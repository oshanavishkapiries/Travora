from openai import OpenAI
import os
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

# Initialize the client
client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

# Simple test question
test_question = "Say hello in one word"

try:
    response = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "user", "content": test_question}
        ]
    )
    print("API is working!")
    print("Response:", response.choices[0].message.content)
except Exception as e:
    print("Error:", str(e)) 