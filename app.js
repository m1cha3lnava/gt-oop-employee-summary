const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

var employeesArray = [];

const render = require("./lib/htmlRenderer");

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
const questionSet1 = [
  { type: "input", name: "name", message: "What is your Employee's name?" },
  { type: "input", name: "email", message: "What is your email address?" },
  {
    type: "list",
    name: "role",
    message: "What type of employee are you adding?",
    choices: ["Manager", "Engineer", "Intern"],
  },
];
// second set of questions to extend to the children
// const questionSet2 = [{ type: "input" }];
//initialization function
function init() {
  inquirer
    .prompt(questionSet1)
    .then((answers) => {
      switch (answers.role) {
        case "Manager":
          inquirer
            .prompt({
              type: "input",
              name: "officeNumber",
              message: "What is your office number?",
            })
            .then((mgrAnswers) => {
              var manager = new Manager(id, name, email, github);
              employeesArray.push(manager);
            });
          break;
        case "Engineer":
          inquirer
            .prompt({
              type: "input",
              name: "github",
              message: "What is your Github account?",
            })
            .then((engineerAnswers) => {
              var engineer = new Engineer(name, id, email, github);
              employeesArray.push(engineer);
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
              var intern = new Intern(name, id, email, school);
              employeesArray.push(intern);
            });
          break;
        default:
          break;
      }
      // console.log("dot then");

      function getRole(answers) {
        this.role;
      }
      render(employeesArray);
    })
    .catch((error) => {
      if (error.isTtyError) {
        console.log("Prompt couldn't be rendered in the current environment");
      } else {
        console.log("Success");
      }
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
// for the provided `render` function to work! ```
