'''
API Test Cases (test_employee_api.py)

Purpose:
Validates Employee API endpoints using Pytest.

Responsibilities:
1. Verify retrieval of all employees.
2. Verify retrieval of a specific employee by ID.
3. Verify handling of invalid employee IDs.
4. Verify employee creation functionality.
5. Verify employee update functionality.
6. Verify employee deletion functionality.
7. Validate API response status codes and response data.

Test Cases:
- test_get_all_employees()    : Validate GET /employees.
- test_get_employee_by_id()  : Validate GET /employees/{id}.
- test_invalid_employee()    : Validate invalid employee lookup.
- test_create_employee()     : Validate employee creation.
- test_update_employee()     : Validate employee update.
- test_delete_employee()     : Validate employee deletion.
'''

def test_get_all_employees(client):

    response = client.get("/employees")

    assert response.status_code == 200


def test_get_employee_by_id(client):

    response = client.get("/employees/1")

    assert response.status_code == 200

    data = response.get_json()

    assert data["name"] == "Gayatri"


def test_invalid_employee(client):

    response = client.get("/employees/999")

    assert response.status_code == 404


def test_create_employee(client):

    payload = {
        "id": 3,
        "name": "John",
        "status": "complete"
    }

    response = client.post(
        "/employees",
        json=payload
    )

    assert response.status_code == 201

    data = response.get_json()

    assert data["name"] == "John"


def test_update_employee(client):

    payload = {
        "status": "completed"
    }

    response = client.put(
        "/employees/1",
        json=payload
    )

    assert response.status_code == 200

    data = response.get_json()

    assert data["status"] == "completed"


def test_delete_employee(client):

    response = client.delete("/employees/2")

    assert response.status_code == 200

    data = response.get_json()

    assert data["message"] == "Deleted Successfully"