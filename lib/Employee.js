// TODO: Write code to define and export the Employee class

// 1. build out employee.js classes, with all the key-value pairs the readme instructs
//2. build out all other classes at extensions of employee, 'class manager extends employee', according to readme file
// 3. get the tests to pass, make sure they do.
//4 when tests pass, write out inquirer prompts in app.js.
//5. inside the .then of the inquirer prompts, pass through the answers into new Classes. i.e. inquirer.role = employee.role. so it would like: var employee1= new Employee(inquirer prompts)
//6 when finished, pass through into render()

class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.getName = function () {
      return this.name;
    };
    this.getId = function () {
      return this.id;
    };
    this.getEmail = function () {
      return this.email;
    };
    this.getRole = function() {
        return "Employee";
    }
    /*
     *  // Returns 'Employee' */
  }
}

module.exports = Employee;
