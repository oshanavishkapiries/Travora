import http.client
import json
import re

conn = http.client.HTTPSConnection("travel-advisor.p.rapidapi.com")

payload = json.dumps({
    "query": "srilanka panadura",
    "updateToken": ""
})


headers = {
    'x-rapidapi-key': "a0256b55c3msh1c5dae0df48722cp15e800jsnbc779ff5ea6f",
    'x-rapidapi-host': "travel-advisor.p.rapidapi.com",
    'Content-Type': "application/json"
}

conn.request("POST", "/locations/v2/search?currency=USD&units=km&lang=en_US", payload, headers)

res = conn.getresponse()
data = res.read()

def clean_image_url(url):
    if not url:
        return None
    return re.sub(r'\?.*$', '', url)

def parse_useful_data(data):
    useful_data = {
        "search_query": data["data"]["AppPresentation_queryAppSearch"]["container"]["searchTitle"]["string"],
        "results": []
    }

    sections = data["data"]["AppPresentation_queryAppSearch"]["sections"]

    for section in sections:
        if section["__typename"] == "AppPresentation_SingleCard":
            content = section["appSearchCardContent"]

            card_info = {
                "title": content["cardTitle"]["string"],
                "primary_info": content["primaryInfo"]["text"] if content.get("primaryInfo") else None,
                "secondary_info": content["secondaryInfo"]["text"] if content.get("secondaryInfo") else None,
                "rating": content["bubbleRating"]["rating"] if content.get("bubbleRating") else None,
                "review_count": content["bubbleRating"]["numberReviews"]["string"] if content.get("bubbleRating") else None,
                "image_url": clean_image_url(content["cardPhoto"]["sizes"]["urlTemplate"]) if content.get("cardPhoto") else None,
                "details_url": content["cardLink"]["route"]["url"] if content.get("cardLink") else None
            }

            useful_data["results"].append(card_info)

    return useful_data



response_data = json.loads(data.decode("utf-8"))

useful_data = parse_useful_data(response_data)

# is it useful data?
if True:
    with open("location_search_response_useful_data.json", "w", encoding="utf-8") as f:
        json.dump(useful_data, f, indent=4)
else:
    with open("location_search_response_raw_data.json", "w", encoding="utf-8") as f:
        json.dump(response_data, f, indent=4)

print("Response has been saved to location_search_response.json")