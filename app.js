const express = require("express")

const app = express()

const appController = require("./controllers/controller.js")(app)


appController.set("view engine","ejs")



appController.use(express.static("./assets"))


appController.listen(3000,()=>{
    console.log("Listening at port : 3000")
})
