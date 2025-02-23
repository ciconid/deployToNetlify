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


const handler = ServerlessHttp(app);
module.exports.handler = handler;


// Uncomment to test locally
//module.exports = router;