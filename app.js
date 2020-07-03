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
//initialization function
function init() {
  inquirer
    .prompt(managerQ)
    .then((mgrAnswers) => {
      var manager = new Manager(
        mgrAnswers.name,
        mgrAnswers.id,
        mgrAnswers.email,
        mgrAnswers.officeNumber
      );
      employeesArray.push(manager);
      // console.log("manager added");
      // console.log(employeesArray);
    })
    .then((addNewEmp) => {
      inquirer
        .prompt({
          type: "confirm",
          name: "addMore",
          message: "Would you like to add additional employees?",
          default: true,
        })
        .then((res) => {
          if (res.addmore) {
            console.log("Add employee");
          } else {
            console.log("I am done");
          }
        })
        .catch((error) => {
          if (error.isTtyError) {
            console.log(
              "Prompt couldn't be rendered in the current environment"
            );
          } else {
            console.log("Success Add New Employee");
          }
        });
    })
    .catch((error) => {
      if (error.isTtyError) {
        console.log("Prompt couldn't be rendered in the current environment");
      } else {
        console.log("Success Manager Question");
      }
    });
}
/* function addEmployee() {
  inquirer
    .prompt({
      type: "confirm",
      name: "addMore",
      message: "Would you like to add additional employees?",
      default: true,
    })
    .then((mgrAnswers) => {
      if (res.addMore) {
        inquirer.prompt([
          {
            type: "list",
            name: "role",
            message: "What type of employee are you adding?",
            choices: ["Engineer", "Intern"],
          },
        ]);
        switch (mgrAnswers.role) {
          case "Engineer":
            inquirer
              .prompt({
                type: "input",
                name: "github",
                message: "What is your Github account?",
              })
              .then((engineerAnswers) => {
                var engineer = new Engineer(
                  engineerAnswers.name,
                  engineerAnswers.id,
                  engineerAnswers.email,
                  engineerAnswers.github
                );
                employeesArray.push(engineer);
                addEmployee();
              });
            break;
          case "Intern":
            inquirer
              .prompt({
                type: "input",
                name: "school",
                message: "What school are you from?",
              })
              .then((internAnswers) => {
                var intern = new Intern(
                  internAnswers.name,
                  internAnswers.id,
                  internAnswers.email,
                  internAnswers.school
                );
                employeesArray.push(intern);
                addEmployee();
              });
            break;
          default:
            inquirer.prompt({
              type: "confirm",
              name: "addmore",
              message: "Do you want to add more employees?",
              default: true,
            });
        }
        break;
      } else {
        render(employeesArray);
        fs.writeFile;
      }
    });
} */
init();
/*   
  // console.log("dot then");

  function getRole(answers) {
    this.role;
  }
} */

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
