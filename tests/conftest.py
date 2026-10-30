'''
Test Configuration (conftest.py)

Purpose:
Provides a reusable Flask test client for API testing.

Responsibilities:
1. Import the Flask application.
2. Enable testing mode.
3. Create a test client using test_client().
4. Share the client across test cases using a Pytest fixture.
5. Allow API testing without running the server.
'''


import sys
from pathlib import Path
sys.path.append(str(Path(__file__).resolve().parent.parent))
import pytest
from app import app
@pytest.fixture
def client():
 app.config["TESTING"]=True
 with app.test_client() as c: yield c
