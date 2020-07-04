const orm = require('./config/orm.js');
const cTable = require('console.table');
const inquirer = require('inquirer');
const end= require('./config/connection.js');

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
  module.export = getAll;
};
//log a whole table
getTable = (response) => {
  orm.getTable(response.table);
  module.export = getAllTable;
};
//select data from a table
getOne = () => {
  orm.selectWhere('first_name', `'sal'`);
  module.export = getOne;
};

// * Add departments, roles, employees
// Add new employee
addEmp = (response, manager) => {
  // firs tname, last name, role, manager
  console.log(response, manager);
  orm.addEmp([response.firstName, response.lastName, response.role], manager);
  module.export = addEmp;
};
//department name
addDept = (response) => {
  console.log('server2');
  orm.addDept(response.name);
  module.export = addDept;
};
//title, salary, department_id
addRole = (response) => {
  orm.addRole(response.title, response.salary, response.department);
  module.export = addRole;
};

// * Update employee roles
updateEmp = (response) => {
  // col = value, id = #
  console.log(response);
  orm.updateEmp(response.col, response.value, response.id);
  module.export = updateEmp;
};
updateRole = (response) => {
  // col = value, id = #
  orm.updateRole(response.field, response.change, response.id);
  module.export = updateRole;
};


start = () => {
  //start program by choosing what to do
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'start',
        message: 'What would you like to do?',
        choices: [
          'See all employees',
          'Add and employee',
          'Update employee info (name, role_id, manager_id)',
          'See a table (departments, roles, employees)',
          'Add a department',
          'Add a role',
          'Update a role (title, salary, department_id)',
          'Exit',
        ],
      },
    ])
    .then((response) => {
      let choice = response.start;
      if (choice == 'See all employees') {
        getAll();
      } else if (choice == 'Add and employee') {
        iAddEmp();
      } else if (choice == 'Update employee info (name, role_id, manager_id)') {
        iUpdateEmp();
      } else if (choice == 'See a table (departments, roles, employees)') {
        iSeeTable();
      } else if (choice == 'Add a department') {
        iAddDept();
      } else if (choice == 'Add a role') {
        iAddRole();
      } else if (choice == 'Update a role (title, salary, department_id)') {
        iUpdateRole();
      } else {
        exit();
      }
    });
};

iAddEmp = () => {
  // first name, last name, role, manager
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'firstName',
        message: `What is the employee's first name?`,
      },
      {
        type: 'input',
        name: 'lastName',
        message: `What is the employee's last name?`,
      },
      {
        type: 'number',
        name: 'role',
        message: `What is the employee's role_id? 
    (manager =1, sales team = 2, point person = 3, developer = 4, unassigned = 5, terminated = 6)`,
      },
      {
        type: 'confirm',
        name: 'manager',
        message: 'Dose the employee have a manager?',
      },
    ])
    .then((response) => {
      if (response.manager === true) {
        let manager = 1;
        addEmp(response, manager);
      } else {
        let manager = 0;
        addEmp(response, manager);
      }
    });
};
iUpdateEmp = () => {
  inquirer
    .prompt([
      {
        type: 'number',
        name: 'id',
        message: `What is the employee's id number?`,
      },
      {
        type: 'list',
        name: 'col',
        message: 'Which field would you like to update?',
        choices: ['first_name', 'last_name', 'role_id', 'manager_id'],
      },
      {
        type: 'number',
        name: 'value',
        message: 'What would you like to change the value to?'
      }
    ])
    .then((response) => {
      console.log('employee updated');
      updateEmp(response);
    });
};
iSeeTable = () => {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'table',
        message: 'Which table would you like to see?',
        choices: ['departments', 'roles', 'employees'],
      },
    ])
    .then((response) => {
      console.log(response);
      getTable(response);
    });
};
iAddDept = () => {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of the department you would like to add?',
      },
    ])
    .then((response) => {
      console.log('server1');
      addDept(response);
    });
};
iAddRole = () => {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'title',
        message: 'What is the tile of this new role?',
      },
      {
        type: 'number',
        name: 'salary',
        message: 'What is the salary for this postition?',
      },
      {
        type: 'number',
        name: 'department',
        message: 'Enter the department id for this role',
      },
    ])
    .then((response) => {
      addRole(response);
    });
};
iUpdateRole = () => {
  inquirer
    .prompt([
      {
        type: 'number',
        name: 'id',
        massage: 'Enter the id of the role you would like to update.'
      },
      {
        type: 'list',
        name: 'field',
        massage: 'Which field would you like to update?',
        choices: ['salary', 'department_id'],
      },
      {
        type: 'input',
        name: 'change',
        message: 'Enter the change you would like to make.',
      }
    ])
    .then((response) => {
      console.log(response);
      updateRole(response);
    });
};
exit = () => {
  console.log('Good bye');
};
