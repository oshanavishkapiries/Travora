import os
import google.generativeai as genai
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Configure the Gemini API
GOOGLE_API_KEY = os.getenv("GOOGLE_API_KEY")
if not GOOGLE_API_KEY:
    raise ValueError("Google API key is required. Please set GOOGLE_API_KEY in .env file")

genai.configure(api_key=GOOGLE_API_KEY)

def test_text_generation():
    """Test basic text generation with Gemini"""
    try:
        # List available models
        print("\n=== Available Models ===")
        for m in genai.list_models():
            print(f"- {m.name}")
        
        # Use gemini-1.5-pro model
        model = genai.GenerativeModel('gemini-1.5-pro')
        
        prompt = "Explain quantum computing in simple terms"
        
        response = model.generate_content(prompt)
        print("\n=== Text Generation Test ===")
        print("Prompt:", prompt)
        print("Response:", response.text)
    except Exception as e:
        print("Error in text generation:", str(e))
        print("Please check if your API key is valid and has access to Gemini API")

def test_chat_conversation():
    """Test chat conversation with Gemini"""
    try:
        model = genai.GenerativeModel('gemini-1.5-pro')
        chat = model.start_chat(history=[])
        
        # First message
        response = chat.send_message("What are the three laws of robotics?")
        print("\n=== Chat Conversation Test ===")
        print("User: What are the three laws of robotics?")
        print("Gemini:", response.text)
        
        # Follow-up question
        response = chat.send_message("How do these laws apply to modern AI?")
        print("\nUser: How do these laws apply to modern AI?")
        print("Gemini:", response.text)
    except Exception as e:
        print("Error in chat conversation:", str(e))
        print("Please check if your API key is valid and has access to Gemini API")

def test_code_generation():
    """Test code generation capabilities"""
    try:
        model = genai.GenerativeModel('gemini-1.5-pro')
        
        prompt = """Write a Python function that:
        1. Takes a list of numbers as input
        2. Returns the sum of all even numbers
        3. Includes error handling
        """
        
        response = model.generate_content(prompt)
        print("\n=== Code Generation Test ===")
        print("Prompt:", prompt)
        print("Response:", response.text)
    except Exception as e:
        print("Error in code generation:", str(e))
        print("Please check if your API key is valid and has access to Gemini API")

if __name__ == "__main__":
    print("Testing Gemini API capabilities...")
    
    # Run all tests
    test_text_generation()
    # test_chat_conversation()
    # test_code_generation() 