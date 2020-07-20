const v1 = "/v1/api/web";
const v2 = "/v2/api/web";

module.exports = (app) => {
  app.use(`${v1}/employee`, require("./employee.v1.route"));
  app.use(`${v2}/employee`, require("./employee.v2.route"));
};
