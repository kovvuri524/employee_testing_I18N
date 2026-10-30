'''
Report Generator

Purpose:
Generates an HTML report from the Pytest JSON results.

Responsibilities:
1. Read test results from results.json.
2. Extract summary information (Total, Passed, Failed).
3. Extract individual test execution details.
4. Load the HTML report template.
5. Populate the template with dynamic data.
6. Add the report generation timestamp.
7. Generate report.html.
8. Save the report in reports/html/.

'''

import json
from datetime import datetime
from pathlib import Path
from jinja2 import Environment,FileSystemLoader
base=Path(__file__).resolve().parent.parent
with open(base/"test_results/results.json") as f:data=json.load(f)
s=data.get("summary",{})
tests=data.get("tests",[])
env=Environment(loader=FileSystemLoader(base/"templates"))
html=env.get_template("report_template.html").render(total=s.get("total",0),passed=s.get("passed",0),failed=s.get("failed",0),generated_on=datetime.now().strftime("%d-%m-%Y %H:%M:%S"),tests=tests)
out=base/"reports/html/report.html"
out.parent.mkdir(parents=True,exist_ok=True)
out.write_text(html,encoding="utf-8")
print("Report generated")