// Requiring path to so we can use relative routes to our HTML files
var path = require("path");

module.exports = function(app) {


// exercise.html route
  app.get("/exercise", function(req, res) {
    // If the user already has an account send them to the members page
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
  });
    
  // stats.html route 
  app.get("/stats", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
  });
  

};
