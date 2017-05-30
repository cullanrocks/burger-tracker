// Import the ORM to create functions that will interact with the database.

var orm = require("../config/orm.js");

var burger = {
  all: function(callback) {
    orm.all("burgers", function(res) {
      callback(res);
    });
  },
  // The variables columns and values are arrays.
  create: function(columns, values, callback) {
    orm.create("burgers", columns, values, function(res) {
      callback(res);
    });
  },
  update: function(objectColumnValues, condition, callback) {
    orm.update("burgers", objectColumnValues, condition, function(res) {
      callback(res);
    });
  },
  delete: function(condition, callback) {
    console.log(condition)
    orm.delete("burgers", condition, function(res) {
      callback(res);
    });
  }
};

// Export the database functions for the controller (burgers_controller.js).
module.exports = burger;
