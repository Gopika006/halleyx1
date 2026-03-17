const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");

const workflowRoutes = require("./routes/workflowRoutes");
const stepRoutes = require("./routes/stepRoutes");
const ruleRoutes = require("./routes/ruleRoutes");
const executionRoutes = require("./routes/executionRoutes");

const app = express();

// Connect Database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Test Route
app.get("/", (req, res) => {
  res.send("Halleyx Workflow Engine API Running 🚀");
});

// Routes
app.use("/workflows", workflowRoutes);
app.use("/steps", stepRoutes);
app.use("/rules", ruleRoutes);
app.use("/executions", executionRoutes);

// Server Port
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});