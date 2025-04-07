// src/server.js
const app = require("./app");
// const { defineEmailJob } = require("./jobs/emailJobs");
const defineEmailJob = require("./jobs/emailJobs");
const connectDB = require("./config/database");
const agenda = require("./config/agenda");
const cors = require('cors');

const PORT = process.env.PORT || 5000;


const corsOptions = {
  origin: ['https://future-blink-26r1.vercel.app/'], 
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  credentials: true, 
};


app.use(cors(corsOptions));

(async () => {
  await connectDB();
  await agenda.start();
  defineEmailJob();
 
  app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
  });
})();
