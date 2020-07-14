var mongoose = require("mongoose");

var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var EmployeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  department: {
    type: ObjectId,
    required: true,
    ref: "department",
  },
  projects: [
    {
      type: ObjectId,
      required: false,
      ref: "project",
    },
  ],
  roles: [
    {
      type: ObjectId,
      required: false,
      ref: "role",
    },
  ],
  is_active: {
    type: Boolean,
    required: true,
    default: true,
  },
  created_at: {
    type: Date,
    required: true,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    required: false,
    default: null,
  },
});

module.exports = mongoose.model("employee", EmployeeSchema);
