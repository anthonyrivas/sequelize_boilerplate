const express = require("express");
const db = require("./models");
const app = express();
const PORT = process.env.PORT || 8080;
// Setup middleware and routing here

// End middleware and routing
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});