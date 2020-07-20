const target = "/api/web";

module.exports = (app) => {
  app.use(`${target}/employee`, require("./employee.route"));
};
