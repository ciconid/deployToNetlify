const express = require('express');
const ServerlessHttp = require('serverless-http');
const serverless = require('serverless-http');

const app = express();
const router = express.Router();

router.get('/', (req, res) => {
    res.json('Hello world! Goodbye world')
})

 app.get('/.netlify/functions/', (req, res) => {
     res.json('This is the .netlify/functions/ path')
 })


app.use('/.netlify/functions/api', router);

module.exports.handler = serverless(app);

// api.js
exports.handler = async (event) => {
    return {
        statusCode: 200,
        body: JSON.stringify({ message: "Hello from Lambda!" }),
    };
};


// Uncomment to test locally
module.exports = router;