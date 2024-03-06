// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
  // This function will allow a user to add multiple employees to display on the page.  The user will need to enter the first name, last name, and salary of each employee, 
  // then have the option to keep adding employees until they choose to stop. A `while` loop will be needed here ([MDN Web Docs on `while` loops]
  // The salary will need to be entered as a number, otherwise it should default to $0.  The `isNaN` function can help with this: ([MDN Web Docs on isNaN]
  // This function should return an array of objects.  Reference the [MDN Web Docs on return]:
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects

// while window confirm true loop back to prompt for first name
let enterAnotherEmployee = true

while (enterAnotherEmployee) {

// prompt for first name
const employeeFirstName = prompt("Enter employees first name:", "");
console.log (employeeFirstName); // log 1
// prompt for last name

const employeeLastName = prompt("Enter employees last name:", "");
console.log (employeeLastName); // log 2

// prompt for salary
let employeeSalary = prompt("Enter employees salary:", "");

// if salary == nan, default to $0
if (isNaN(employeeSalary) === true) {
  employeeSalary = "$0";
} else {
  employeeSalary = (`$${employeeSalary}`)
}
console.log (`${employeeSalary}`); // log 3

// create object containing first name, last name and salary
const newEmployee = {
  firstName: employeeFirstName,
  lastName: employeeLastName,
  salary: employeeSalary,
}
console.log (newEmployee); // log 4

// all objects need to enter an array under displayEmployees / employeesArray. probably either through .push or .unshift
console.log ("confirmation of addition of object") // log 5

// window.confirm keep adding employees
enterAnotherEmployee = window.confirm ("Would you like to add another employee?")
console.log (enterAnotherEmployee) // log 6
}
};

// collectEmployees()

//click add employees
addEmployeesBtn.addEventListener("click", collectEmployees());
// document.getElementById('#add-employees-btn').addEventListener("click", collectEmployees());


//___________________________________________________________________________________________________________________________________________________

// Display the average salary
// This function will take in the generated array of employees and log the average salary and number of employees to the console.  

// You should use a template literal string for this task.
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary

}


let testEmployees = [
{ // 0
  firstName: "Sam",
  lastName: "Smith",
  salary: 100000
},
{ // 1
  firstName: "Suzy",
  lastName: "Sampson",
  salary: 200000
},
];
// console.log(Array.prototype.join.call(testEmployees, "+"));

// for (const testEmployee of testEmployees) { 
//   console.log(testEmployee.salary); // $100000, $200,000
// }


let averageSalaryTest = 0; 

for (let index = 0; index < testEmployees.length; index++) {
  averageSalaryTest += testEmployees[index].salary;
}
console.log (`Average salary is ${averageSalaryTest}`) // Average salary is 300000

// console.log(Array.prototype.join.call(testEmployees, "+")); // [object Object]+[object Object]





// You should use a template literal string for this task.
const displayAverageSalaryTestWithNonIntegratedObject = function(employeesArray) {
  // TODO: Calculate and display the average salary
}




displayAverageSalaryTestWithNonIntegratedObject ();
// input employeesArray salaries
// divide total by array length to get array length
// console.log average salary and array length template literally
// _____________________________________________________________________________________________________________________________________________________

// Select a random employee
// This function will take in the generated array of employees, randomly select one employee, and use a template literal to log their full name to the console.  
// The built in `Math` object can help with random number generation: ([MDN Web Docs on `Math.random`]
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
}

// (employeesArray[(Math.floor(Math.random() * computerSelection.length))])
// console.log first name and last name selected above template literally
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
