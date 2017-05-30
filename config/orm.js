// Import MySQL connection.
var connection = require("../config/connection.js");

// Helper function for SQL syntax.
function printQuestionMarks(num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push("?");
  }
  return arr.toString();
}

// Helper function for SQL syntax. This functions turns an object into a format that SQL can read.
function objToSql(ob) {
  var arr = [];
  for (var key in ob) {
    if (Object.hasOwnProperty.call(ob, key)) {
      arr.push(key + "=" + ob[key]);
    }
  }
  return arr.toString();
}

// Object for all our SQL statement functions.
var orm = {
  all: function(tableInput, callback) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      callback(result);
    });
  },
  create: function(table, tableColumn, value, callback) {
    var queryString = "INSERT INTO " + table;

    queryString += " (";
    queryString += tableColumn.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(value.length);
    queryString += ") ";

    console.log(queryString);

    connection.query(queryString, value, function(err, result) {
      if (err) {
        throw err;
      }
      callback(result);
    });
  },
  // An example of objColVals would be {name: panther, sleepy: true}
  update: function(table, objectColumnValues, condition, callback) {
    var queryString = "UPDATE " + table;

    queryString += " SET ";
    queryString += objToSql(objectColumnValues);
    queryString += " WHERE ";
    queryString += condition;

    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      callback(result);
    });
  },
  delete: function(table, condition, callback) {
    console.log(condition)
    var queryString = "DELETE FROM " + table;
    queryString += " WHERE ";
    queryString += condition;

    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      callback(result);
    });
  }
};

// Export the orm object for the model (cat.js).
module.exports = orm;
