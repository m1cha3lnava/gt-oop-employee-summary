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
const { match } = require("assert");

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
const managerQ = [
  {
    type: "input",
    name: "id",
    message: "Enter manager ID.",
    validate: function (answer) {
      const match = answer.match(/^[1-9]\d*$/);
      if (match) {
        return true;
      }
      return "Please enter a valid number";
    },
  },
  {
    type: "input",
    name: "name",
    message: "What the manager's name?",
    validate: function (answer) {
      if (answer !== "") {
        return true;
      }
      return "Please enter a valid name";
    },
  },
  {
    type: "input",
    name: "email",
    message: "What is the manager's email address?",
    validate: function (answer) {
      const match = answer.match(/\S+@\S+\.\S+/);
      if (match) {
        return true;
      }
      return "Please enter a valid email address";
    },
  },
  {
    type: "input",
    name: "officeNumber",
    message: "What is the manager's office number?",
    validate: function (answer) {
      const match = answer.match(/^[1-9]\d*$/);
      if (match) {
        return true;
      }
      return "Please enter a valid number";
    },
  },
];
const engineerQuest = [
  {
    type: "input",
    name: "id",
    message: "Enter engineer's ID.",
    validate: function (answer) {
      const match = answer.match(/^[1-9]\d*$/);
      if (match) {
        return true;
      }
      return "Please enter a valid id number";
    },
  },
  {
    type: "input",
    name: "name",
    message: "What the engineer's name?",
    validate: function (answer) {
      if (answer !== "") {
        return true;
      }
      return "Please enter a name";
    },
  },
  {
    type: "input",
    name: "email",
    message: "What is the engineer's email address?",
    validate: function (answer) {
      const match = answer.match(/\S+@\S+\.\S+/);
      if (match) {
        return true;
      }
      return "Please enter a valid email address";
    },
  },
  {
    type: "input",
    name: "github",
    message: "What is your engineer's Github account?",
    validate: function (answer) {
      if (answer !== "") {
        return true;
      }
      return "Please enter an account name";
    },
  },
];
const internQuest = [
  {
    type: "input",
    name: "id",
    message: "Enter intern's ID.",
    validate: function (answer) {
      const match = answer.match(/^[1-9]\d*$/);
      if (match) {
        return true;
      }
      return "Please enter valid id number";
    },
  },
  {
    type: "input",
    name: "name",
    message: "What the intern's name?",
    validate: function (answer) {
      if (answer !== "") {
        return true;
      }
      return "Please enter a name";
    },
  },
  {
    type: "input",
    name: "email",
    message: "What is the intern's email address?",
    validate: function (answer) {
      const match = answer.match(/\S+@\S+\.\S+/);
      if (match) {
        return true;
      }
      return "Please enter a valid email address";
    },
  },
  {
    type: "input",
    name: "school",
    message: "What school are you from?",
    validate: function (answer) {
      if (answer !== "") {
        return true;
      }
      return "Please enter a school";
    },
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
        // console.log(employeesArray);
        fs.writeFile(outputPath, render(employeesArray), function (err) {
          if (err) throw err;
        });
        console.log("we will push your team members to an HTML file!");
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