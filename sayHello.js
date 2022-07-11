const sayHello=(req,res,next)=>{
    console.log('Hello');
    next();
}

module.exports=sayHello;
