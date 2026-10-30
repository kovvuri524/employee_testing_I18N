# Employee API Testing Report

## Overview

This project performs automated testing of Employee REST APIs using Pytest and generates an interactive HTML report.

The report supports:

- Internationalization (I18N)
- English (United States)
- English (United Kingdom)
- Italian (Italy)
- Dynamic language switching
- Country flag support
- Dark/Light mode
- Search functionality
- Interactive dashboard

---

## Project Structure

```text
employee_testing/

├── app.py
├── requirements.txt
├── .gitignore
│
├── report_generator/
│   └── generate_report.py
│
├── reports/
│   ├── css/
│   │   └── styles.css
│   │
│   ├── html/
│   │   └── report.html
│   │
│   ├── images/
│   │   ├── us.webp
│   │   ├── uk.webp
│   │   └── italy.webp
│   │
│   └── js/
│       └── app.js
│
├── templates/
│   └── report_template.html
│
├── tests/
│   └── test_employee_api.py
│
└── test_results/
    └── results.json
```

---

## Setup

### Create Virtual Environment

#### Windows

```bash
python -m venv venv
```

#### Linux / macOS

```bash
python3 -m venv .venv
```

### Activate Virtual Environment

#### Windows

```bash
venv\Scripts\activate
```

#### Linux / macOS

```bash
source .venv/bin/activate
```

### Install Dependencies

```bash
pip install -r requirements.txt
```

---

## Execute Tests

Run the API test suite and generate the JSON report:

```bash
pytest --json-report --json-report-file=test_results/results.json
```

---

## Generate HTML Report

Move to the report generator directory:

```bash
cd report_generator
```

Generate the HTML report:

```bash
python generate_report.py
```

Generated report location:

```text
reports/html/report.html
```

---

## Features

### Internationalization (I18N)

Supports:

- English (United States)
- English (United Kingdom)
- Italian (Italy)

Users can switch languages dynamically without regenerating the report.

---

### Country Flag Support

Displays country flags based on the selected language:

- United States Flag
- United Kingdom Flag
- Italy Flag

---

### Dark / Light Mode

Toggle between light and dark themes.

---

### Search

Filter test results using the search box.

---

### Interactive Dashboard

Displays:

- Total Tests
- Passed Tests
- Failed Tests
- Test Results Table
- Report Generation Timestamp

---

## Technologies Used

- Python
- Flask
- Pytest
- Pytest JSON Report
- Jinja2
- HTML
- CSS
- JavaScript

---

## Run Summary

### Execute Tests

```bash
pytest --json-report --json-report-file=test_results/results.json
```

### Generate Report

```bash
cd report_generator
python generate_report.py
```

### Open Report

```text
reports/html/report.html
```
