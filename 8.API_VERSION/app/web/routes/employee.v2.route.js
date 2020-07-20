const express = require("express");
const router = express.Router();

// Validation payloads
const validate = require("express-validation");
const validationSchema = require("../../_validations/employee.validation");

// DB Collection Model
const EmployeeClass = require("../models/employee.v2.model");
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

module.exports = router;
