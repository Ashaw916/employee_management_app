const orm = require("./config/orm.js");
const cTable = require("console.table");

displayLogo = () => {
  console.log(`====================================================================\n                 ********   **      **    ******\n                 **     *   ***    ***   ***    *\n                 ****       ****  ****    ******\n                 **     *   ** **** **   *    ***\n                 ********   **  **  **    ******
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
  orm.selectWhere("first_name", `"dev"`);
};
//call function to get all employee data
getAll();
// getAllTable();
// getOne();


// * Add departments, roles, employees
// Add new employee
addEmp = () => {
  orm.addEmployee("test", "test", "manager", "role");
}
// Add new namager
// addManage = () => {
//   orm.addManager("test", "test", "manager", "role")
// }
addEmp();
// * Update employee roles
