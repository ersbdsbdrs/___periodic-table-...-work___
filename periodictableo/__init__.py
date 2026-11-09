from flask import Flask, jsonify, render_template
import requests
import json
import os

app = Flask(__name__)
BASE = 'https://api.periodictableofelements.org'

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA_FILE = os.path.join(BASE_DIR, 'elements.json')

def fetch(path):
    r = requests.get(BASE + path, timeout=10)
    r.raise_for_status()
    return r.json()



def get_all_elements():
    if not os.path.exists(DATA_FILE):
        print(f"❌ Файл не найден по пути: {DATA_FILE}")
        print("Скачиваю с API и сохраняю...")
        data = fetch('/elements/')
        with open(DATA_FILE, 'w', encoding='utf-8') as f:
            json.dump(data, f, indent=4)
        return data

    with open(DATA_FILE, 'r', encoding='utf-8') as f:
        return json.load(f)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api/elements')
def api_elements():
    return jsonify(get_all_elements())

@app.route('/api/quiz')
def api_quiz():
    return jsonify(fetch('/elements/quiz/'))

@app.route('/api/daily')
def api_daily():
    return jsonify(fetch('/elements/element-of-the-day/'))

@app.route('/api/element/<int:number>')
def api_element(number):
    for el in get_all_elements():
        if el.get('atomic_number') == number:
            return jsonify(el)
    return jsonify({'error': 'не найден'}), 404

if __name__ == '__main__':
    app.run(debug=True)