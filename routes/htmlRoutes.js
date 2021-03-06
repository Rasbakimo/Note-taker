const path = require("path");

module.exports = function(app){
    
    // Route to go to notes page
    app.get("/notes", function(req, res){
        res.sendFile(path.join(__dirname, "../Develop/public/notes.html"));
    });
    app.get("/", function(req, res) {
        res.json(path.join(__dirname, "../Develop?public/index.html"));
      });

    // Route to go to index page
    app.get("*", function(req, res){
        res.sendFile(path.join(__dirname, "../Develop/public/index.html"));
    });
}
