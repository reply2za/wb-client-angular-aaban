const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/dist/cs4550-f20-client-angular-aaban'));
app.listen(process.env.PORT || 8081);
app.get('/*', function(req,res) {
  res.sendFile(path.join(__dirname +
    '/dist/cs4550-f20-client-angular-aaban/index.html'));});

console.log('Console listening')
