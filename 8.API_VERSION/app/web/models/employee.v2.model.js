const EmployeeSchema = require("../../_schemas/employee.schema");
const RESPONSES = require("../../_constants/responses");

class Employee {
  /**
   * @Todo: List all Employees
   * @param {*} req
   * @param {*} res
   */
  getAllEmployee(req, res) {
    EmployeeSchema.find({
      is_active: true,
    })
      .select("_id name is_active created_at updated_at")
      .exec((err, doc) => {
        if (err) {
          res.status(400).json(RESPONSES.INTERNAL_ERROR(err));
        } else if (doc.length == 0) {
          res.status(200).json(RESPONSES.RECORDS_NOT_FOUND);
        } else {
          res.status(200).json({
            success: true,
            data: doc,
          });
        }
      });
  }

  /**
   * @Todo: List one Employee
   * @param {*} req
   * @param {*} res
   */
  getOneEmployee(req, res) {
    EmployeeSchema.findOne({
      _id: req.params.employee_id,
      is_active: true,
    })
      .select("_id name is_active created_at updated_at")
      .exec((err, doc) => {
        if (err) {
          res.status(400).json(RESPONSES.INTERNAL_ERROR(err));
        } else if (doc === null) {
          res.status(200).json(RESPONSES.RECORDS_NOT_FOUND);
        } else {
          res.status(200).json({
            success: true,
            data: doc,
          });
        }
      });
  }
}

module.exports = Employee;
