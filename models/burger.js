// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");

const burger = {
  all(cb) {
    orm.all("burgers", (res) => cb(res));
  },
  // The variables cols and vals are arrays.
  create(cols, vals, cb) {
    orm.create("burgers", cols, vals, (res) => cb(res));
  },
  update(objColVals, condition, cb) {
    orm.update("burgers", objColVals, condition, (res) => cb(res));
  },
  delete(condition, cb) {
    orm.delete("burgers", condition, (res) => cb(res));
  },
};

// Export the database functions for the controller (burgersController.js).
module.exports = burger;

// 1. Inside your`burger` directory, create a folder named`views`.

//    * Create the`index.handlebars` file inside`views` directory.

//    * Create the`layouts` directory inside`views` directory.

//      * Create the`main.handlebars` file inside`layouts` directory.

//      * Setup the`main.handlebars` file so it's able to be used by Handlebars.

//   * Setup the`index.handlebars` to have the template that Handlebars can render onto.

//      * Create a button in `index.handlebars` that will submit the user input into the database.