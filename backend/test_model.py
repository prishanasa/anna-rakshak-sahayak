import joblib
import warnings

# ignore sklearn version mismatch warnings
warnings.filterwarnings("ignore", category=UserWarning)

# load the model
try:
    model = joblib.load("pest_model.pkl")
    print("✅ Model loaded successfully!")
    print(type(model))
except Exception as e:
    print("❌ Failed to load model")
    print(e)
