'''
Employee API (app.py)

Purpose:
Provides REST API endpoints to manage employee data.

Responsibilities:
1. Retrieve all employees.
2. Retrieve an employee by ID.
3. Create a new employee.
4. Update an existing employee's status.
5. Delete an employee.
6. Return appropriate success and error responses.
7. Handle GET, POST, PUT, and DELETE requests.

Endpoints:
- GET    /employees              : Retrieve all employees.
- GET    /employees/<id>         : Retrieve employee by ID.
- POST   /employees              : Create a new employee.
- PUT    /employees/<id>         : Update employee status.
- DELETE /employees/<id>         : Delete an employee.

Data:
- Stores employee details (ID, Name, Status).
- Returns responses in JSON format.
'''


from flask import Flask, jsonify, request

app = Flask(__name__)

employees = [
    {
        "id": 1,
        "name": "Gayatri",
        "status": "complete"
    },
    {
        "id": 2,
        "name": "Sam",
        "status": "pending"
    }
]


@app.route('/employees', methods=['GET'])
def get_employees():
    return jsonify(employees)


@app.route('/employees/<int:employee_id>', methods=['GET'])
def get_employee(employee_id):

    for employee in employees:

        if employee["id"] == employee_id:
            return jsonify(employee)

    return jsonify(
        {"error": "Employee Not Found"}
    ), 404


@app.route('/employees', methods=['POST'])
def create_employee():

    employee = request.get_json()

    employees.append(employee)

    return jsonify(employee), 201


@app.route('/employees/<int:employee_id>', methods=['PUT'])
def update_employee(employee_id):

    data = request.get_json()

    for employee in employees:

        if employee["id"] == employee_id:

            employee["status"] = data["status"]

            return jsonify(employee)

    return jsonify(
        {"error": "Not Found"}
    ), 404


@app.route('/employees/<int:employee_id>', methods=['DELETE'])
def delete_employee(employee_id):

    for employee in employees:

        if employee["id"] == employee_id:

            employees.remove(employee)

            return jsonify(
                {"message": "Deleted Successfully"}
            )

    return jsonify(
        {"error": "Not Found"}
    ), 404


if __name__ == "__main__":
    app.run(debug=True)