var express =require('express')
const app = express();
const port=5000;
const fs=require('fs');
const path= require('path');
const sayHello=require('./sayHello');

//app.get('/',(req,res)=>{
    //res.send('Hello')
//})

app.get('/homep',(req,res)=>{
    //fs.readFile('./public/home.html',(err,data)=> err ? console.log(err) : res.send(data) )
    //res.sendFile('./public/home.html',{root:__dirname} )
    //res.sendFile(__dirname +'/public/home.html')
    res.sendFile(path.join(__dirname,'public/home.html'))

})
app.get('/contactp',(req,res)=>{
    res.sendFile(path.join(__dirname,'public/contact.html'))
})

app.use(express.static(path.join(__dirname,'public')))

//const students=
//[
    //{ 
       // id:1,
        //name: 'Ahmed',
        //age:20,
    //},
   // {
       // id:2,
        //name:'Nidhal',
        //age: 28
    //},
    //{
       // id:3,
       // name:'Mohamed',
       // age: 30
   // }
//];
/** 
 * METHOD: GET
 *  * Description: Get all students
 * Path : /students
**/
//app.get('/students',(req,res)=>{
    //res.json(students)
//})

/**
 * METHOD: GET
 * Description: Get only on student
 * Path:/student/:id
**/
//app.get('/student/:id',(req,res)=>{
    //const student = students.find((el)=>el.id==Number(req.params.id))
    //if (!student){
       // res.json({msg:'Student does not exist'})
   // }
   // else{
    //    res.json(student)

   // }
//})
app.use(sayHello);
app.use('/studentsRoutes', require('./studentRoutes'));



app.listen(port,(err)=>
err ? 
console.log(err) :
console.log(`Server is running on port ${port}`))
