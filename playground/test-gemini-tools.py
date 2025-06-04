import json
import os
from typing import List, Optional
from dotenv import load_dotenv

import google.generativeai as genai
import requests
from pydantic import BaseModel, Field

# Load environment variables from .env file
load_dotenv()

# Configure the Gemini API
api_key = os.getenv("GOOGLE_API_KEY")
if not api_key:
    raise ValueError(
        "Please set your GOOGLE_API_KEY environment variable. "
        "You can get one from https://makersuite.google.com/app/apikey"
    )

genai.configure(api_key=api_key)

"""
docs: https://ai.google.dev/docs/gemini_api_overview
"""

# --------------------------------------------------------------
# Define the tool (function) that we want to call
# --------------------------------------------------------------

def get_weather(latitude: float, longitude: float) -> dict:
    """This is a publically available API that returns the weather for a given location."""
    response = requests.get(
        f"https://api.open-meteo.com/v1/forecast?latitude={latitude}&longitude={longitude}&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m"
    )
    data = response.json()
    return data["current"]

# --------------------------------------------------------------
# Define the function schema for Gemini
# --------------------------------------------------------------

weather_function = {
    "name": "get_weather",
    "description": "Get current temperature for provided coordinates in celsius.",
    "parameters": {
        "type": "object",
        "properties": {
            "latitude": {
                "type": "number",
                "description": "The latitude coordinate"
            },
            "longitude": {
                "type": "number",
                "description": "The longitude coordinate"
            }
        },
        "required": ["latitude", "longitude"]
    }
}

# --------------------------------------------------------------
# Define response model
# --------------------------------------------------------------

class WeatherResponse(BaseModel):
    temperature: float = Field(
        description="The current temperature in celsius for the given location."
    )
    response: str = Field(
        description="A natural language response to the user's question."
    )

# --------------------------------------------------------------
# Initialize the model with function calling capability
# --------------------------------------------------------------

model = genai.GenerativeModel(
    model_name="gemini-1.5-pro",
    tools=[{"function_declarations": [weather_function]}]
)

# --------------------------------------------------------------
# Step 1: Start the chat and send initial message
# --------------------------------------------------------------

chat = model.start_chat()
response = chat.send_message(
    "What's the weather like in Paris today?",
    generation_config={"temperature": 0.7}
)

# --------------------------------------------------------------
# Step 2: Handle function calls if present
# --------------------------------------------------------------

def call_function(name: str, args: dict) -> dict:
    if name == "get_weather":
        return get_weather(**args)
    return None

# Process any function calls in the response
if hasattr(response, 'candidates') and response.candidates:
    for candidate in response.candidates:
        if hasattr(candidate, 'content') and candidate.content:
            for part in candidate.content.parts:
                if hasattr(part, 'function_call'):
                    name = part.function_call.name
                    # Convert MapComposite to dict
                    args = dict(part.function_call.args)
                    result = call_function(name, args)
                    
                    # Send the function result back to the model
                    response = chat.send_message(
                        {
                            "parts": [{
                                "text": json.dumps(result)
                            }]
                        }
                    )

# --------------------------------------------------------------
# Step 3: Get final response
# --------------------------------------------------------------

final_response = response.text
print(f"Final response: {final_response}")

# --------------------------------------------------------------
# Example usage
# --------------------------------------------------------------

if __name__ == "__main__":
    # Test the weather function directly
    weather_data = get_weather(48.8566, 2.3522)  # Paris coordinates
    print(f"Current weather in Paris: {weather_data}") 