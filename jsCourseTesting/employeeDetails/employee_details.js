const employees = [
  { id: 1, name: "John Doe", age: 30, department: "IT", salary: 50000 },
  { id: 2, name: "Bob Johnson", age: 35, department: "HR", salary: 60000 },
  { id: 3, name: "Alice Smith", age: 28, department: "HR", salary: 45000 },
  //... More employee records can be added here
];

// Function to display all employees
function displayEmployees() {
  const totalEmployees = employees
    .map(
      (employee, index) =>
        `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`
    )
    .join("");
  document.getElementById("employeesDetails").innerHTML = totalEmployees;
}

function calculateTotalSalaries() {
  const totalSalaries = employees.reduce(
    (total, employee) => total + employee.salary,
    0
  );

  alert(`Total salaries: $${totalSalaries}`);
}

function findEmployeeById(employeeId) {
  const foundEmployee = employees.find(
    (employee) => employee.id === employeeId
  );

  if (foundEmployee) {
    document.getElementById(
      "employeesDetails"
    ).innerHTML = `<p>${foundEmployee.id}: ${foundEmployee.name}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary}</p>`;
  } else {
    document.getElementById(
      "employeesDetails"
    ).innerHTML = `<p>no employee has been found with this ID</p>`;
  }
}

function displayHREmployees() {
  const HRemployees = employees.filter(
    (employee) => employee.department === "HR"
  );

  if (HRemployees.length) {
    let HRemployeesHTML = "";
    HRemployees.forEach(
      (employee) =>
        (HRemployeesHTML += `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`)
    );

    document.getElementById("employeesDetails").innerHTML = HRemployeesHTML;
  } else {
    document.getElementById(
      "employeesDetails"
    ).innerHTML = `<p>no employee has been found with this ID</p>`;
  }
}
