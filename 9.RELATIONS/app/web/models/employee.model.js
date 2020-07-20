const EmployeeSchema = require("../../_schemas/employee.schema");
const DepartmentSchema = require("../../_schemas/department.schema");
const ProjectSchema = require("../../_schemas/project.schema");
const RoleSchema = require("../../_schemas/role.schema");
const RESPONSES = require("../../_constants/responses");

class Employee {
  constructor() {
    this.insertDepartments();
    this.insertProjects();
    this.insertRoles();
  }

  insertDepartments() {
    const departments = [
      {
        name: "UI/UX",
      },
      {
        name: "Android",
      },
      {
        name: "IOS",
      },
      {
        name: "Java",
      },
    ];
    DepartmentSchema.find({}).exec((err, doc) => {
      if (err) {
        console.log("Error: Unable to insert Departments");
      } else if (doc.length == 0) {
        for (var i = 0; i < departments.length; i++) {
          new DepartmentSchema(departments[i]).save((err, doc) => {
            if (err) {
              console.log("Error: Unable to insert Departments");
            }
          });
        }
        console.log("Message: Departments Added Succesfully");
      } else {
        console.log("Message: Departments Available");
      }
    });
  }

  insertProjects() {
    const projects = [
      {
        name: "Project 1",
      },
      {
        name: "Project 2",
      },
      {
        name: "Project 3",
      },
      {
        name: "Project 4",
      },
    ];
    ProjectSchema.find({}).exec((err, doc) => {
      if (err) {
        console.log("Error: Unable to insert Projects");
      } else if (doc.length == 0) {
        for (var i = 0; i < projects.length; i++) {
          new ProjectSchema(projects[i]).save((err, doc) => {
            if (err) {
              console.log("Error: Unable to insert Projects");
            }
          });
        }
        console.log("Message: Projects Added Succesfully");
      } else {
        console.log("Message: Projects Available");
      }
    });
  }

  insertRoles() {
    const roles = [
      {
        name: "admin",
      },
      {
        name: "user",
      },
    ];
    RoleSchema.find({}).exec((err, doc) => {
      if (err) {
        console.log("Error: Unable to insert Roles");
      } else if (doc.length == 0) {
        for (var i = 0; i < roles.length; i++) {
          new RoleSchema(roles[i]).save((err, doc) => {
            if (err) {
              console.log("Error: Unable to insert Roles");
            }
          });
        }
        console.log("Message: Roles Added Succesfully");
      } else {
        console.log("Message: Roles Available");
      }
    });
  }

  /**
   * @Todo: List all Employees
   * @param {*} req
   * @param {*} res
   */
  getAllEmployee(req, res) {
    EmployeeSchema.find({
      is_active: true,
    })
      .select("_id name age email phone")
      .populate({ path: "department", select: "_id name" })
      .populate({ path: "projects", select: "_id name" })
      .populate({ path: "roles", select: "_id name" })
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
      .select("_id name age email phone")
      .populate({ path: "department", select: "_id name" })
      .populate({ path: "projects", select: "_id name" })
      .populate({ path: "roles", select: "_id name" })
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

  /**
   * @Todo: Add Employee
   * @param {*} req
   * @param {*} res
   */
  addEmployee(req, res) {
    new EmployeeSchema(req.body).save((err, doc) => {
      if (err) {
        res.status(400).json(RESPONSES.INTERNAL_ERROR(err));
      } else {
        res.status(200).json({
          success: true,
          message: "Added Successfully!",
          data: {
            _id: doc._id,
            name: doc.name,
          },
        });
      }
    });
  }

  /**
   * @Todo: Update Employees
   * @param {*} req
   * @param {*} res
   */
  updateEmployee(req, res) {
    EmployeeSchema.findByIdAndUpdate(
      {
        _id: req.params.employee_id,
      },
      {
        $set: {
          name: req.body.name,
          age: req.body.age,
          email: req.body.email,
          phone: req.body.phone,
          department: req.body.department,
          projects: req.body.projects,
          roles: req.body.roles,
          updated_at: new Date(),
        },
      }
    ).exec((err, doc) => {
      if (err) {
        res.status(400).json(RESPONSES.INTERNAL_ERROR(err));
      } else if (doc === null) {
        res.status(200).json(RESPONSES.RECORDS_NOT_FOUND);
      } else {
        res.status(200).json({
          success: true,
          message: "Updated Successfully!",
          _id: doc.id,
        });
      }
    });
  }

  /**
   * @Todo: Deactivate Employee
   * @param {*} req
   * @param {*} res
   */
  deActivateEmployee(req, res) {
    EmployeeSchema.findByIdAndUpdate(
      {
        _id: req.params.employee_id,
      },
      {
        $set: {
          is_active: false,
          updated_at: new Date(),
        },
      }
    ).exec((err, doc) => {
      if (err) {
        res.status(400).json(RESPONSES.INTERNAL_ERROR(err));
      } else if (doc === null) {
        res.status(200).json(RESPONSES.RECORDS_NOT_FOUND);
      } else {
        res.status(200).json({
          success: true,
          message: "Deactivated Successfully!",
          _id: doc.id,
        });
      }
    });
  }

  /**
   * @Todo: Delete Employee
   * @param {*} req
   * @param {*} res
   */
  deleteEmployee(req, res) {
    EmployeeSchema.findByIdAndRemove({
      _id: req.params.employee_id,
    }).exec((err, doc) => {
      if (err) {
        res.status(400).json(RESPONSES.INTERNAL_ERROR(err));
      } else if (doc === null) {
        res.status(200).json(RESPONSES.RECORDS_NOT_FOUND);
      } else {
        res.status(200).json({
          success: true,
          message: "Deleted Successfully!",
          _id: doc.id,
        });
      }
    });
  }
}

module.exports = Employee;
