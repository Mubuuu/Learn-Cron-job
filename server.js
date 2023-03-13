import express from "express";
import cron from "node-cron";

const app = express();

// cron.schedule("*/10 * * * * * ", () => {
//   console.log("running in 10 seconds");
// });

// // running a task every Monday at 10:00 PM in 2025
// cron.schedule("0 22 * * 1 2025", () => {
//   console.log("running a task every Monday at 10:00 PM in 2025");
// });

// // running a task every Monday at 10:00 PM
// cron.schedule("0 22 * * 1", () => {
//   console.log("running a task every Monday at 10:00 PM");
// });

// // running a task every Monday, Wednesday and Friday at 10:00 AM
// cron.schedule("0 10 * * 1,3,5", () => {
//   console.log("running a task every Monday, Wednesday and Friday at 10:00 AM");
// });

// cron.schedule('9 17 8 3 * 2023', () => {
//     console.log('running a task at 5:09 PM on March 8, 2023');
//   });  


  cron.schedule('12 17 * * *', () => {
    console.log('running a task every day at 5:11 PM');
  });
app.listen(3000, () => {
  console.log("server starts on port 3000");
});
