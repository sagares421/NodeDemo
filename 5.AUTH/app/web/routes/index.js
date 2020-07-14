const target = "/api/web";

module.exports = (app) => {
  app.use(`${target}/employee`, require("./employee.route"));
  app.use(`${target}/auth`, require("./user.route"));
};
