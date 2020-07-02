// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./employee.js");
class Manager extends Employee {
    constructor(id, name, email, officeNumber) {
        super(id, name, email);
      this.officeNumber = officeNumber;
      this.getRole = function() {
          return "Manager";
      }
      this.getOfficeNumber = function(){
          return this.officeNumber;
      }
      /*
       *  // Returns 'Employee' */
    }
  }
  
  module.exports = Manager;
  