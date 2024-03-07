// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// collect employee data to be used for the other functions
const collectEmployees = function() {

  // while window confirm true loop back to prompt for first name
  let enterAnotherEmployee = true

  // an array to house the newEmployee objects created below
  const listOfEmployees = [
  ]

  // loop to keep adding employees until enter another employee is false
  while (enterAnotherEmployee) {

    // prompt for first name
    const employeeFirstName = prompt("Enter employees first name:", "");

    // capitalise first letter of employeeFirstName so that all items are uniform and sort properly later 
    // definetly not the most conscise method for achieving this but I went with simple as it's the first time I've done it
    const employeeFirstNameFirstLetter = employeeFirstName.charAt(0);

    const employeeFirstNameFirstLetterCap = employeeFirstNameFirstLetter.toUpperCase();

    const employeeFirstNameRemainingLetters = employeeFirstName.slice(1);

    const employeeFirstNameCap = employeeFirstNameFirstLetterCap + employeeFirstNameRemainingLetters;

    // prompt for last name
    const employeeLastName = prompt("Enter employees last name:", "");

    // capitalise first letter of employeeLastName so that all items are uniform and sort properly later 
    // again definetly not the most conscise method for achieving this but I went with simple as it's the first time I've done it
    const employeeLastNameFirstLetter = employeeLastName.charAt(0);

    const employeeLastNameFirstLetterCap = employeeLastNameFirstLetter.toUpperCase();

    const employeeLastNameRemainingLetters = employeeLastName.slice(1);

    const employeeLastNameCap = employeeLastNameFirstLetterCap + employeeLastNameRemainingLetters;

    // prompt for salary
    let employeeSalary = prompt("Enter employees salary:", "");

    // if salary == nan, default to $0 otherwise put a $ sign in front
    if (isNaN(employeeSalary) === true) {
      employeeSalary = "$0";
    } else {
      employeeSalary = (`$${employeeSalary}`)
    }

    // create object containing first name, last name and salary
    const newEmployee = {
      firstName: employeeFirstNameCap,
      lastName: employeeLastNameCap,
      salary: employeeSalary,
    }

    // add the newly created employee to the end of the listOfEmployees array
    listOfEmployees.push (newEmployee);

    // window.confirm keep adding employees if true continues while loop if false breaks loop
    enterAnotherEmployee = window.confirm ("Would you like to add another employee?")
  }

  // make a the list of employees array created at the top of the function available once the function ends.
  return listOfEmployees;
};

// display the calculate the average salary of all employees entered and display it in the console log
const displayAverageSalary = function(employeesArray) {

  // create a value which is the sum of all salaries
  let sumOfAllSalaries = 0;

  // create a for loop which adds together all salaries in the listOfEmployees;
  for (let index = 0; index < employeesArray.length; index++) {
    // include parse int on the employee array to remove the $ sign for proper addition
    sumOfAllSalaries += parseInt(employeesArray[index].salary.replace("$", ""), 10);
  }
  // console log out in template literal string to give the number of employees and average salary
  // it may be better to make a new variable of the average salary first and then use that in the console.log instead of the calculation
  console.log(`The average salary between our ${employeesArray.length} employee(s) is $${sumOfAllSalaries/employeesArray.length}`);
};

// select a random employee employee from all employees entered using and designate them as the random draw winner in the console log
const getRandomEmployee = function(employeesArray) {
  // selecte a random object from the employeesArray
  let randomlySelectOneEmployee = (employeesArray[(Math.floor(Math.random() * employeesArray.length))]);
  // console log the first and last name from the randomly selected object with a message in template literal string
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
