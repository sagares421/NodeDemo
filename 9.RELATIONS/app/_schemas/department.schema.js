var mongoose = require("mongoose");

var DepartmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
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

module.exports = mongoose.model("department", DepartmentSchema);
