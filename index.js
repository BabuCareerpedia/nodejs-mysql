const express = require("express");
const mysql = require("mysql2");
const app = express();
const CreateToken = require("./utilies/token");
require("dotenv").config();
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const userRoute = require("./routes/user");

app.use(express.json());

require("./DB/connection");

// const api = '/api/v1'
app.use("/api/v1", userRoute);

app.get("/demo", (req, res) => {
  res.send("hello world");
});

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerJsDoc));
const PORT = 3740;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
