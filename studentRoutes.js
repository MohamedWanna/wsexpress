const express= require('express');
const router= express.Router();
const students= require('./students');

/** 
 * METHOD: GET
 *  * Description: Get all students
 * Path : (/studentsRoutes)/all
**/
router.get('/all',(req,res)=>{
    res.json(students)
})

/**
 * METHOD: GET
 * Description: Get only on student
 * Path:/studentRoutes/:id
**/
router.get('/onestudent/:id',(req,res)=>{
    const student = students.find((el)=>el.id==Number(req.params.id))
    if (!student){
        res.json({msg:'Student does not exist'})
    }
    else{
        res.json(student)

    }
})
module.exports=router;
