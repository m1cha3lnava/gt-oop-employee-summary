// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./employee.js");
class Intern extends Employee {
    constructor(school) {
      this.school = school;
      this.getSchool = function () {
        return this.school;
      };
      this.getRole = function() {
          return "Intern";
      }
      /*
       *  // Returns 'Intern' */
    }
  }
  
  module.exports = Intern;