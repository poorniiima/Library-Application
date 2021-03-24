const express = require("express");

const app= new express();

app.set('view engine', 'ejs');
app.set('views', '/src/views');

app.get("/", function(req, res){
    res.sendFile(`index`);

});

app.listen(5000);