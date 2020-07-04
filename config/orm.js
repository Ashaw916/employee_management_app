const connection = require("./connection.js");
const cTable = require("console.table");

let orm = {
    // select: function(whatToSelect, tableInput) {
    //   let queryString = "SELECT ?? FROM ??";
    //   connection.query(queryString, [whatToSelect, tableInput], function(err, result) {
    //     if (err) throw err;
    //     console.table(result);
    //   });
    // },
    // selectWhere: function(tableInput, colToSearch, valOfCol) {
  //     let queryString = "SELECT * FROM ?? WHERE ?? = ?";

  //     console.table(queryString);

  //     connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
  //       if (err) throw err;
  //       console.table(result);
  //     });

  // first_name, last_name, title, department, salary, manager
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
      ORDER BY salary
      `;
    connection.query(queryString, function (err, result) {
      if (err) throw err;
      console.table(result);
    });
    // console.log(connection.query(queryString).sql);
  },

  getTable: function (whatToSelect) {
    let queryString = `SELECT * FROM ??`;
    connection.query(queryString,[whatToSelect],function (err, result) {
      if (err) throw err;
      console.log(whatToSelect + `\n------------`);
      console.table(result);
    })
  },

  selectWhere: function (whatToSelect, tableInput) {
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
      WHERE e.` + whatToSelect + "=" + tableInput;
    // console.log("queryString" + queryString);
    connection.query(queryString,[whatToSelect, tableInput],function (err, result) {
      if (err) throw err;
      // console.log(connection.query(queryString).sql);
      console.log(tableInput + `\n------------`);
      console.table(result);
    })
  },

  addEmployee: function () {
    let queryString = 
    "INSERT INTO employees (first_name) VALUES ('firstName')";
    // console.log("queryString" + queryString);
    connection.query(queryString,function (err, result) {
      if (err) throw err;
      // console.log(connection.query(queryString).sql);
      // console.log(firstName, lastName, role, manager + `\n------------`);
      console.table(result);
    })
  },
  // updateEmployee: function(table, objColVals, condition, cb) {
  //   var queryString = "UPDATE " + table;

  //   queryString += " SET ";
  //   queryString += objToSql(objColVals);
  //   queryString += " WHERE ";
  //   queryString += condition;

  //   console.log(queryString);
  //   connection.query(queryString, function(err, result) {
  //     if (err) {
  //       throw err;
  //     }

  //     cb(result);
  //   });
  // }


};
module.exports = orm;
