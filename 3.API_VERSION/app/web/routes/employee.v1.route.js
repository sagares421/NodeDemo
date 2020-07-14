const express = require("express");
const router = express.Router();

// Validation payloads
const validate = require("express-validation");
const validationSchema = require("../../_validations/employee.validation");

// DB Collection Model
const EmployeeClass = require("../models/employee.v1.model");
const Employee = new EmployeeClass();

/**
 * @todo: Get all Employees
 * @method: GET
 */
router.get("/", Employee.getAllEmployee);

/**
 * @todo: Get one employee
 * @method: GET
 */
router.get("/:employee_id", Employee.getOneEmployee);

/**
 * @todo: Add one employee
 * @method: POST
 */
router.post("/", validate(validationSchema.create), Employee.addEmployee);

/**
 * @todo: Update one employee
 * @method: POST
 */
router.put(
  "/:employee_id",
  validate(validationSchema.update),
  Employee.updateEmployee
);

/**
 * @todo: Disable one employee
 * @method: POST
 */
router.delete("/:employee_id/disable", Employee.deActivateEmployee);

/**
 * @todo: Delete one employee
 * @method: POST
 */
router.delete("/:employee_id", Employee.deleteEmployee);

module.exports = router;
