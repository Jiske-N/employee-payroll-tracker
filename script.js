// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
  // This function will allow a user to add multiple employees to display on the page.  The user will need to enter the first name, last name, and salary of each employee, 
  // then have the option to keep adding employees until they choose to stop.
  // The salary will need to be entered as a number, otherwise it should default to $0.
  // This function should return an array of objects.
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects

// while window confirm true loop back to prompt for first name
let enterAnotherEmployee = true

// an array to house the newEmployee objects created below
const listOfEmployees = [
]

// loop to keep adding employees until enter another employee is false
while (enterAnotherEmployee) {

// prompt for first name
const employeeFirstName = prompt("Enter employees first name:", "");
console.log ("delete later" + employeeFirstName); // log 1

// prompt for last name
const employeeLastName = prompt("Enter employees last name:", "");
console.log ("delete later" + employeeLastName); // log 2

// prompt for salary
let employeeSalary = prompt("Enter employees salary:", "");

// if salary == nan, default to $0 otherwise put a $ sign in front
if (isNaN(employeeSalary) === true) {
  employeeSalary = "$0";
} else {
  employeeSalary = (`$${employeeSalary}`)
}
console.log ("delete later" + `${employeeSalary}`); // log 3

// create object containing first name, last name and salary
const newEmployee = {
  firstName: employeeFirstName,
  lastName: employeeLastName,
  salary: employeeSalary,
}
console.log ("delete later" + newEmployee); // log 4

// add the newly created employee to the end of the listOfEmployees array
listOfEmployees.push (newEmployee);
console.log ("delete later" + listOfEmployees); 

console.log ("delete later" + "confirmation of addition of object") // log 5

// window.confirm keep adding employees if true continues while loop if false breaks loop
enterAnotherEmployee = window.confirm ("Would you like to add another employee?")
console.log (enterAnotherEmployee) // log 6
}
console.log ("delete later" + "this is list of employees")
console.log ("delete later" + listOfEmployees); 

// make a the list of employees array created at the top of the function available once the function ends.
return listOfEmployees;
};

//click add employees
// addEmployeesBtn.addEventListener("click", collectEmployees);

// document.getElementById('#add-employees-btn').addEventListener("click", collectEmployees);


//___________________________________________________________________________________________________________________________________________________

// Display the average salary
// This function will take in the generated array of employees and log the average salary and number of employees to the console.  

// You should use a template literal string for this task.
const displayAverageSalary = function(employeesArray) {
  
  // console.log(employeesArray);
  // console.log(displayEmployees);


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


// let testEmployees = [
// { 
//   firstName: "Sam",
//   lastName: "Smith",
//   salary: "$100000"
// },
// { 
//   firstName: "Suzy",
//   lastName: "Sampson",
//   salary: "$200000"
// },
// ];

// let averageSalaryTest = 0; 

// for (let index = 0; index < testEmployees.length; index++) {
//   averageSalaryTest += parseInt(testEmployees[index].salary.replace("$", ""), 10);
// }

// console.log (`Average salary is $${averageSalaryTest}`);

// let averageSalaryTestAverage = averageSalaryTest/testEmployees.length;

// console.log(averageSalaryTestAverage);


// console.log (`Average salary is $${averageSalaryTest}`); // Average salary is $300000

// console.log(averageSalaryTestAverage);
// console.log("delete later" + Array.prototype.join.call(testEmployees, "+")); // [object Object]+[object Object]

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
