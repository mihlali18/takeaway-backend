const bodyParser = require("body-parser")
const express = require("express")
const app = express ()
const cors = require("cors")



app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended:true
}));



app.get("/" , (req , res) =>{
    res.json({info: "Server Online"})
})
 const PORT = 2022
 // Cross Orign Resource sharing
 var corsOptions = {
   origin: "http://localhost:8081"
 };

 app.use(cors(corsOptions));

 const db = require("./models");
 db.mongoose
   .connect(db.url, {
     useNewUrlParser: true,
     useUnifiedTopology: true
   })
   .then(() => {
     console.log("Connected to the database!");
   })
   .catch(err => {
     console.log("Cannot connect to the database!", err);
     process.exit();
   });

require('./routes/post.routes')(app)

app.listen(PORT, ()=> {
    console.log(`Server running at port:${PORT}`)
}) 