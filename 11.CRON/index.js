var cron = require("node-cron");

cron.schedule("*/2 * * * * *", () => {
  console.log("running a task every minute");
});

// START
var task = cron.schedule(
  "* * * * *",
  () => {
    console.log("stoped task");
  },
  {
    scheduled: false,
  }
);

// task.start();
// task.stop();
// task.destroy();
