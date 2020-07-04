const connection = require("./connection.js");
const cTable = require("console.table");

let orm = {
  allJoin: function (req) {
    let queryString = `SELECT 
      e.id,
      e.first_name,
      e.last_name,
      e.manager_id,
      r.title AS role,
      r.salary AS Salary,
      d.name AS department
      FROM employees e 
      JOIN roles r
      ON e.role_id = r.id
      JOIN departments d
      ON r.department_id = d.id
      ORDER BY salary DESC
      `;
    connection.query(queryString, function (err, result) {
      if (err) throw err;
      console.table(result);
      start();
    });
    // console.log(connection.query(queryString).sql);
  },

  getTable: function (table) {
    console.log(table);
    let queryString = `SELECT * FROM ` + table;
    connection.query(queryString, [table], function (err, result) {
      if (err) throw err;
      console.log(table + `\n------------`);
      console.table(result);
      start();
    });
  },

  selectWhere: function (whatToSelect, tableInput) {
    let queryString =
      `SELECT 
      e.id,
      e.first_name,
      e.last_name,
      e.manager_id,
      r.title AS role,
      r.salary AS Salary,
      d.name AS department
      FROM employees e 
      JOIN roles r
      ON e.role_id = r.id
      JOIN departments d
      ON r.department_id = d.id
      WHERE e.` +
      whatToSelect +
      "=" +
      tableInput;
    // console.log("queryString" + queryString);
    connection.query(queryString, [whatToSelect, tableInput], function (
      err,
      result
    ) {
      if (err) throw err;
      // console.log(connection.query(queryString).sql);
      console.log(tableInput + `\n------------`);
      console.table(result);
      start();
    });
  },

  addEmp: function ([col1, col2, col3], col4) {
    let queryString =
      `INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ('` +
      col1 +
      `','` +
      col2 +
      `',` +
      col3 +
      `,` +
      col4 +
      `);`;
    // console.log("queryString" + queryString);
    connection.query(queryString, function (err, result) {
      if (err) throw err;
      console.table(result);
      start();
    });
  },
  addDept: function (name) {
    console.log("orm1");
    let queryString = `INSERT INTO departments (name) VALUES ('` + name + `');`;
    // console.log("queryString" + queryString);
    connection.query(queryString, function (err, result) {
      if (err) throw err;
      // console.log(connection.query(queryString).sql);
      // console.log(col1, col2, col3, col4 + `\n------------`);
      console.table(result);
      start();
    });
  },
  addRole: function (col1, col2, col3) {
    let queryString =
      `INSERT INTO roles (title, salary, department_id) VALUES ('` +
      col1 +
      `',` +
      col2 +
      `,` +
      col3 +
      `);`;
    // console.log("queryString" + queryString);
    connection.query(queryString, function (err, result) {
      if (err) throw err;
      // console.log(connection.query(queryString).sql);
      // console.log(col1, col2, col3, col4 + `\n------------`);
      console.table(result);
      start();
    });
  },
  updateEmp: function (field, change, id) {
    var queryString =
      `UPDATE employees SET ` + field + ` = ` + change + ` WHERE id = ` + id;

    console.log(queryString);
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }
      console.table(result);
      start();
    });
  },
  updateRole: function (field, change, id) {
    var queryString =
      `UPDATE roles SET ` + field + ` = ` + change + ` WHERE id = ` + id;

    console.log(queryString);
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }
      console.table(result);
      start();
    });
  },
};
module.exports = orm;
