const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const employeesArray = [];

const render = require("./lib/htmlRenderer");

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
const managerQ = [
  { type: "input", name: "id", message: "Enter manager ID." },
  { type: "input", name: "name", message: "What the manager's name?" },
  {
    type: "input",
    name: "email",
    message: "What is the manager's email address?",
  },
  {
    type: "input",
    name: "officeNumber",
    message: "What is the manager's office number?",
  },
];
const engineerQuest = [
  { type: "input", name: "id", message: "Enter engineer's ID." },
  { type: "input", name: "name", message: "What the engineer's name?" },
  {
    type: "input",
    name: "email",
    message: "What is the engineer's email address?",
  },
  {
    type: "input",
    name: "github",
    message: "What is your engineer's Github account?",
  },
];
const internQuest = [
  { type: "input", name: "id", message: "Enter intern's ID." },
  { type: "input", name: "name", message: "What the intern's name?" },
  {
    type: "input",
    name: "email",
    message: "What is the engineer's email address?",
  },
  {
    type: "input",
    name: "school",
    message: "What school are you from?",
  },
];
//initialization function
function init() {
  inquirer.prompt(managerQ).then((mgrAnswers) => {
    const manager = new Manager(
      mgrAnswers.name,
      mgrAnswers.id,
      mgrAnswers.email,
      mgrAnswers.officeNumber
    );
    employeesArray.push(manager);
    addNewEmp();
  });
}

function addNewEmp() {
  // console.log("Add New Employee");
  inquirer
    .prompt({
      type: "list",
      message: "Do you want to add more employees?",
      name: "addMore",
      choices: ["Engineer", "Intern", "I am finished"],
    })
    .then((newEmp) => {
      // console.log(newEmp.addMore);
      if (newEmp.addMore === "Engineer") {
        // console.log("Add engineer");
        engineerQ();
      } else if (newEmp.addMore === "Intern") {
        console.log("Add Intern");
        internQ();
      } else {
        // console.log("render emp");
      }
    });
}
function engineerQ() {
  inquirer.prompt(engineerQuest).then((engineerA) => {
    const engineer = new Engineer(
      engineerA.name,
      engineerA.id,
      engineerA.email,
      engineerA.github
    );
    employeesArray.push(engineer);
    addNewEmp();
  });
}
function internQ() {
  inquirer.prompt(internQuest).then((internA) => {
    const intern = new Intern(
      internA.name,
      internA.id,
      internA.email,
      internA.school
    );
    employeesArray.push(intern);
    addNewEmp();
  });
}
init();

/* After the user has input all employees desired, call the `render` function (required above) and pass in an array containing all employee objects; the `render` function will generate and return a block of HTML including templated divs for each employee!*/

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work!
