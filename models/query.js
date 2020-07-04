const orm = require("../config/orm.js");
const cTable = require("console.table");
const inquirer = require("inquirer")

displayLogo = () => {
  console.log(`====================================================================\n                 ********   **      **    ******\n                 **         ***    ***   ***    *\n                 ****       ****  ****    ******\n                 **         ** **** **   *    ***\n                 ********   **  **  **    ******
  `);
  console.log(
    `                --- Employee Management System ---\n====================================================================`
  );
  module.export = displayLogo;
};
// * View departments, roles, employees
//log all information.
getAll = () => {
  orm.allJoin();
};
//log a whole table
getAllTable = () => {
  orm.getTable("roles");
};
//select data from a table
getOne = () => {
  orm.selectWhere("first_name", `"sal"`);
};

// * Add departments, roles, employees
// Add new employee
addEmp = () => {
  // firs tname, last name, role, manager
  orm.addEmp("employees", ["Aaron", "Young", 3, 1]);
};
//department name
addDept = () => {
  orm.addDept("departments", ["name"]);
};
//title, salary, department_id
addRole = () => {
  orm.addRole("roles", ["janitor", 20000, 5]);
};

// * Update employee roles
updateEmp = () => {
  // col = value, id = #
  orm.updateEmp("role_id", "2", "id", "5");
};
updateRole = () => {
  // col = value, id = #
  orm.updateRole("salary", "2", "id", "5");
};

getAll();
getAllTable();
getOne();
addDept();
addRole();
addEmp();
updateRole();
updateEmp();