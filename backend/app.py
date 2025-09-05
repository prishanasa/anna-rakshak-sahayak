from flask import Flask, request, jsonify
import joblib
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enables CORS for all routes

# Load working models (replace 'model_filename.pkl' with your actual file names/paths)
yield_model = joblib.load('yield_model.pkl')
fertility_model = joblib.load('fertility_model.pkl')

@app.route('/predict/yield', methods=['POST'])
def predict_yield():
    data = request.json
    inputs = [data.get(key) for key in ['state_name', 'district_name', 'crop_year', 'season', 'crop', 'area']]
    prediction = yield_model.predict([inputs])[0]
    return jsonify({'production': str(prediction)})

@app.route('/predict/fertility', methods=['POST'])
def predict_fertility():
    data = request.json
    inputs = [float(data.get(key, 0)) for key in ['temp', 'humidity', 'moisture', 'soil_type', 'crop_type', 'nitrogen', 'potassium']]
    prediction = fertility_model.predict([inputs])[0]
    return jsonify({'fertility': str(prediction)})

if __name__ == '__main__':
    app.run(debug=True, port=5000)
