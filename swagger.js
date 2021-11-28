const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Anything API',
    description: '',
  },
  host: 'localhost:4000',
  schemes: ['http', 'https'],
  consumes: ['application/json'],
  produces: ['application/json'],
  securityDefinitions: {
    Authorization: {
      type: 'apiKey',
      name: 'Authorization',
      description: 'Value: Bearer ',
      in: 'header',
      scheme: 'bearer',
    },
  },

};

const outputFile = './swagger-output.json';
const endpointsFiles = ['server.js'];

/* NOTE: if you use the express Router, you must pass in the 
   'endpointsFiles' only the root file where the route starts,
   such as index.js, app.js, routes.js, ... */

swaggerAutogen(outputFile, endpointsFiles, doc);
