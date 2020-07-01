// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

const Employee = require("./employee.js");
class Engineer extends Employee {
    constructor(github,) {
      this.github = github;
      /* this.getGithub = function () {
        return this.github;
      }; */
      this.getRole = function() {
          return "Engineer";
      }
      /*
       *  // Returns 'Engineer' */
    }
  }
  
  module.exports = Engineer;
  