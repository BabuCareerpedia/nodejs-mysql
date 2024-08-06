const express = require("express");
const app = express();
require("dotenv").config();
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const userRoute = require("./routes/user");
const PORT = 3740;

app.use(express.json());

require("./DB/connection");

// const api = '/api/v1'
app.use("/api/v1", userRoute);

app.get("/demo", (req, res) => {
  res.send("hello world");
});

//swagger documentation
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerJsDoc));


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
