
//Install express server
const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 80;
// Serve only the static files form the dist directory
app.use(express.static('./dist/paparazzme-UI'));

app.get('/*', function(req,res) {
    const fs = require('fs');

fs.readdir(__dirname+"/"+"dist/paparazzme-UI", (err, files) => {
  files.forEach(file => {
    console.log(file);
  });
  console.log(process.cwd());
});
res.sendFile(process.cwd()+'/dist/paparazzme-UI/index.html');
});

// Start the app by listening on the default Heroku port
app.listen(port);
