import requests
import json


def download():
    print("Downloading elements from API...")
    r = requests.get('https://api.periodictableofelements.org/elements/', timeout=10)
    r.raise_for_status()

    with open('elements.json', 'w', encoding='utf-8') as f:
        json.dump(r.json(), f, indent=4)

    print("Done! Saved to elements.json")


if __name__ == '__main__':
    download()