
let data = [
    {item:"Go to Gym"},
    {item:"Buy some Burger"},
    {item:"Go Swimming"}
]

const bodyParser = require("body-parser")

const urlEncoded = bodyParser.urlencoded({extended:false})



const appController=(app)=>{

    app.use(bodyParser.json())

    app.get("/todo",(req,res)=>{

        res.render("todo",{data: data.length ? data : [{item:"No todos yet!"}]})
     })

    app.post("/todo",urlEncoded,(req,res)=>{
         
        data.push({item:req.body.input})

        console.log(data)

        res.json(req.body)
    })

    app.delete("/todo/:item",(req,res)=>{
        data = data.filter((obj)=> obj.item !== req.params.item.replace(/-/g," "))
        res.send("DOne")
    })

    return app
}


module.exports = appController