const express = require('express');
const mysql = require('mysql2');
const app = express();
const CreateToken = require('./routes/token')
require("dotenv").config();
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const userRoute = require('./routes/user')

app.use(express.json());



require('./DB/connection')

// const api = '/api/v1'
app.use('/user',userRoute)


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
