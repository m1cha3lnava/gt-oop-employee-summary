// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./employee.js");
class Manager extends Employee {
    constructor(officeNumber) {
      this.officeNumber = officeNumber;
      this.getRole = function() {
          return "Manager";
      }
      /*
       *  // Returns 'Employee' */
    }
  }
  
  module.exports = Manager;
  