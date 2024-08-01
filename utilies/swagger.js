const swaggerJsdoc = require('swagger-jsdoc');
// const route = require("../routes/*.js")

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'CAREERPEDIA API',
      version: '1.0.0',
      description: "careerpedia-platform API documentation",
    },
    servers: [
      {
        url: "http://localhost:5000",
      },
    ],
  },
  apis: ['../routes/*.js'], // Adjusted the path pattern for JavaScript files
};

// Generate the Swagger specification
const swaggerSpecification = swaggerJsdoc(options);

module.exports = { swaggerSpecification };
