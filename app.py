from flask import Flask, jsonify, render_template
import requests

app = Flask(__name__)
BASE = 'https://api.periodictableofelements.org'


def fetch(path):
    url = f"f"
    r = requests.get(BASE + path)
    return r.json()


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/api/elements')
def api_elements():
    return jsonify(fetch('/elements/'))


@app.route('/api/quiz')
def api_quiz():
    return jsonify(fetch('/elements/quiz/'))


@app.route('/api/daily')
def api_daily():
    return jsonify(fetch('/elements/element-of-the-day/'))


@app.route('/api/element/<int:number>')
def api_element(number):
    for el in fetch('/elements/'):
        if el['atomic_number'] == number:
            return jsonify(el)
    return jsonify({'error': 'не найден'}), 404


if __name__ == '__main__':
    app.run(debug=True)