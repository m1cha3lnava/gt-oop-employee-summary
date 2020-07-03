// TODO: Write code to define and export the Employee class

// 1. build out employee.js classes, with all the key-value pairs the readme instructs
//2. build out all other classes at extensions of employee, 'class manager extends employee', according to readme file
// 3. get the tests to pass, make sure they do.
//4 when tests pass, write out inquirer prompts in app.js.
//5. inside the .then of the inquirer prompts, pass through the answers into new Classes. i.e. inquirer.role = employee.role. so it would like: var employee1= new Employee(inquirer prompts)
//6 when finished, pass through into render()

class Employee {
  constructor(name, id, email) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.role = "Employee";
  }
    getName(){
      return this.name;
    };
    getId() {
      return this.id;
    };
    getEmail() {
      return this.email;
    };
    getRole() {
      return this.role;
    };
  
}

module.exports = Employee;