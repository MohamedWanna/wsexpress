var http = require('http');
var fs = require('fs');

const server= http.createServer((req,res)=>{
    if(req.url=='/'){
        res.write('Hello World!')
        res.end();
    }
    else if(req.url == '/home'){
        fs.readFile('./home.html',(err, data)=>{
            if (err) {
                console.log(err)
            } else {
                res.write(data)
                res.end();
            }
        })
    
    }else{
        res.statusCode= 404 ;
        res.end('404 NOT FOUND');
    }
})
server.listen(7000,(err)=>
    err ? 
    console.log(err) :
    console.log('Server is running on port 7000'))