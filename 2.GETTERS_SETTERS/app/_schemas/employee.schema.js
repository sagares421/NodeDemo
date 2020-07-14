var mongoose = require("mongoose");

const DBMiddleware = require("../_service/DBMiddleware");

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
    set: DBMiddleware.encryptLowerCase,
  },
  phone: {
    type: String,
    required: true,
    set: DBMiddleware.encrypt,
    get: DBMiddleware.decrypt,
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

EmployeeSchema.set("toObject", { getters: true });
EmployeeSchema.set("toJSON", { getters: true });

module.exports = mongoose.model("employee", EmployeeSchema);
