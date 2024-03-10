// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// collect and return employee data stored in listOfEmployees 
const collectEmployees = function() {

  // an array to house the newEmployee objects created below
  const listOfEmployees = [
  ];

  // loop to keep adding employees until enter another employee is false
  let enterAnotherEmployee = true;
 
  while (enterAnotherEmployee) {

    // prompt to retrieve the data that will eventually go into listOfEmployees
    const employeeFirstName = prompt("Enter employees first name:", "");
    const employeeLastName = prompt("Enter employees last name:", "");
    let employeeSalary = prompt("Enter employees salary:", "");

    // capitalise first letter of first and last names so that all items are uniform and sort properly later 
    // definetly not the most conscise method for achieving this but I went with simple as it's the first time I've done it
    const employeeFirstNameFirstLetter = employeeFirstName.charAt(0);
    const employeeFirstNameFirstLetterCap = employeeFirstNameFirstLetter.toUpperCase();
    const employeeFirstNameRemainingLetters = employeeFirstName.slice(1);
    const employeeFirstNameCap = employeeFirstNameFirstLetterCap + employeeFirstNameRemainingLetters;

    const employeeLastNameFirstLetter = employeeLastName.charAt(0);
    const employeeLastNameFirstLetterCap = employeeLastNameFirstLetter.toUpperCase();
    const employeeLastNameRemainingLetters = employeeLastName.slice(1);
    const employeeLastNameCap = employeeLastNameFirstLetterCap + employeeLastNameRemainingLetters;

    // make salary default to 0 if a non number or nothing is entered
    // else convert to a number
    if (isNaN(employeeSalary) === true) {
      employeeSalary = 0;
    } else if (employeeSalary === '') {
      employeeSalary = 0;
    } else {
      employeeSalary = Number(employeeSalary);
    };
    
    // salaries to include cents
    employeeSalary00 = employeeSalary.toFixed(2);

    // put a $ in front
    $employeeSalary = (`$${employeeSalary00.toString()}`);

    // new object for listOfEmployees array above
    const newEmployee = {
      firstName: employeeFirstNameCap,
      lastName: employeeLastNameCap,
      salary: $employeeSalary,
    };

    listOfEmployees.push (newEmployee);

    // check for continuing loop
    enterAnotherEmployee = window.confirm ("Would you like to add another employee?")
  };
  return listOfEmployees;
};

// calculate the average salary of all employees, display in the console log
const displayAverageSalary = function(employeesArray) {

  let sumOfAllSalaries = 0;

  for (let index = 0; index < employeesArray.length; index++) {
    // parse float on the employee array to remove the $ sign for proper addition
    let salaryValue = parseFloat(employeesArray[index].salary.replace("$", ""));
    sumOfAllSalaries += salaryValue;
  };

  // it may be better to make a new variable of the average salary first and then use that in the console.log instead of the calculation
  console.log(`The average salary between our ${employeesArray.length} employee(s) is $${(sumOfAllSalaries/employeesArray.length).toFixed(2)}`);
};

// select a random employee, log the first and last name with a message
const getRandomEmployee = function(employeesArray) {

  let randomlySelectOneEmployee = (employeesArray[(Math.floor(Math.random() * employeesArray.length))]);

  console.log(`Congratulations to ${randomlySelectOneEmployee.firstName} ${randomlySelectOneEmployee.lastName}, our random drawing winner!`);
};

// ______________________________________________________________________________________________________________________________________________________
/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();
// const employees = [
//   { firstName: "inputfromprompt"
//     lastName: "asdf"}
//   { firstName:
//     lastName}
// ]
  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
