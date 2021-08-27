let express = require("express");
var cros = require('cors');
let app = express();

app.use(cros())
app.use(express.static("statics"));
app.use(function(req, res, next) {
    console.log(`${new Date()} - ${req.method} request for ${req.url}`);
    next();
});

var port = 81;
app.listen(port);
console.log("Server listening on :" + port);


