module.exports = app => {
    const employee = require("../controllers/employeeController");
    let router = require("express").Router();
    router.post("/create", employee.create);
    router.get("/findOne", employee.findOne);
    app.use('/employee', router);
  };