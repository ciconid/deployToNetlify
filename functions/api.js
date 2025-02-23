const express = require('express');
const ServerlessHttp = require('serverless-http');
const serverless = require('serverless-http');

const app = express();
const router = express.Router();

router.get('/', (req, res) => {
    res.json('Hello world! Goodbye world')
})

// app.get('/.netlify/functions/', (req, res) => {
//     res.json('This is the .netlify/functions/ path')
// })


app.use('/.netlify/functions/api', router);

module.exports.handler = serverless(app);

// Uncomment to test locally
module.exports = router;