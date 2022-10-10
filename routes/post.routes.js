module.exports = app =>{
     const posts = require("../controllers/posts.controllers")
      
    var router = require("express").Router();
    // Create  Profolio 
     router.post("/", posts.creates)

     // Find All profolio
     router.get("/" , posts.findAll);

     router.get("/:id" , posts.findOne)

     // Delete profolio
     router.delete("/:id",posts.delete)

     // delete Profilio
     router.delete("/", posts.deleteAll)

     // UPDATE
     router.put("/:id", posts.update)

     
     // app.get("" , posts.update  )
     
     //ROOT ROUTE
     app.use("/profolio/detail", router)

}