from flask import Flask, jsonify
from flask_cors import CORS
from google.cloud import firestore

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "*"}})
db = firestore.Client()

@app.route('/api/visitor-count', methods=['GET'])
def visit():
    # Get the visitor count from Firestore
    doc_ref = db.collection('visitor_count').document('counter')
    doc = doc_ref.get()

    # Increment the visitor count
    if doc.exists:
        count = doc.to_dict().get('count', 0) + 1
    else:
        count = 1

    # Update Firestore with the new count
    doc_ref.set({'count': count})

    # Return the updated count as JSON
    return jsonify({'count': count})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080)

# test comment