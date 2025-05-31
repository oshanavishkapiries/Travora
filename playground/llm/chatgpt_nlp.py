import os
import openai
from typing import List, Dict, Any
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

class ChatGPTNLP:
    def __init__(self, api_key: str = None):
        """
        Initialize the ChatGPT NLP handler.
        
        Args:
            api_key (str, optional): Your OpenAI API key. If not provided, will look for OPENAI_API_KEY environment variable.
        """
        self.api_key = api_key or os.getenv("OPENAI_API_KEY")
        if not self.api_key:
            raise ValueError("OpenAI API key is required. Please provide it or set OPENAI_API_KEY environment variable.")
        
        openai.api_key = self.api_key

    def analyze_sentiment(self, text: str) -> Dict[str, Any]:
        """
        Analyze the sentiment of the given text.
        
        Args:
            text (str): The text to analyze
            
        Returns:
            Dict containing sentiment analysis results
        """
        prompt = f"Analyze the sentiment of the following text and provide a detailed response including:\n" \
                f"1. Overall sentiment (positive/negative/neutral)\n" \
                f"2. Confidence score (0-1)\n" \
                f"3. Key emotional indicators\n\nText: {text}"
        
        response = self._get_completion(prompt)
        return {"text": text, "analysis": response}

    def extract_entities(self, text: str) -> Dict[str, Any]:
        """
        Extract named entities from the given text.
        
        Args:
            text (str): The text to analyze
            
        Returns:
            Dict containing extracted entities
        """
        prompt = f"Extract all named entities from the following text. For each entity, provide:\n" \
                f"1. The entity name\n" \
                f"2. The entity type (person, organization, location, etc.)\n\nText: {text}"
        
        response = self._get_completion(prompt)
        return {"text": text, "entities": response}

    def summarize_text(self, text: str, max_length: int = 150) -> Dict[str, Any]:
        """
        Generate a summary of the given text.
        
        Args:
            text (str): The text to summarize
            max_length (int): Maximum length of the summary in words
            
        Returns:
            Dict containing the summary
        """
        prompt = f"Summarize the following text in {max_length} words or less:\n\n{text}"
        
        response = self._get_completion(prompt)
        return {"text": text, "summary": response}

    def _get_completion(self, prompt: str) -> str:
        """
        Get completion from ChatGPT API.
        
        Args:
            prompt (str): The prompt to send to the API
            
        Returns:
            str: The API response
        """
        try:
            response = openai.ChatCompletion.create(
                model="gpt-3.5-turbo",
                messages=[
                    {"role": "system", "content": "You are a helpful NLP assistant."},
                    {"role": "user", "content": prompt}
                ],
                temperature=0.7,
                max_tokens=500
            )
            return response.choices[0].message.content
        except Exception as e:
            raise Exception(f"Error calling ChatGPT API: {str(e)}")

# Example usage
if __name__ == "__main__":
    # Initialize the NLP handler
    nlp = ChatGPTNLP()
    
    # Example text
    sample_text = "I absolutely love this product! The quality is amazing and the customer service was exceptional. However, the delivery was a bit slow."
    
    # Perform sentiment analysis
    sentiment_result = nlp.analyze_sentiment(sample_text)
    print("\nSentiment Analysis:")
    print(sentiment_result["analysis"])
    
    # Extract entities
    entities_result = nlp.extract_entities(sample_text)
    print("\nEntity Extraction:")
    print(entities_result["entities"])
    
    # Generate summary
    summary_result = nlp.summarize_text(sample_text)
    print("\nSummary:")
    print(summary_result["summary"]) 