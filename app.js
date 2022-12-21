let express =require('express')

const {dirname}=require('path')
const path=require('path')
let app=express();

app.use(express.static(path.resolve(__dirname,'./public')))
// app.listen(3000,()=>{
//     console.log('servidor iniciado')
// })
app.listen(process.env.PORT || 3000, function() {
  console.log("Servidor corriendo");
})

app.get('/',(req,res)=>{
    let htmlPath=path.resolve(__dirname,'./views/index.html')
    res.sendFile(htmlPath)
})