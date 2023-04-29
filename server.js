var fs=require('fs');
var http=require('http');

var server=http.createServer((req,res)=>{
  if(req.url=="/"){
    let data= fs.readFileSync('home.html','utf8');
    res.end(data);
  }
  else if(req.url=="/about"){
    let data= fs.readFileSync('about.html','utf8');
    res.end(data);
  }
  else if(req.url=="/contact"){
    let data= fs.readFileSync('contact.html','utf8');
    res.end(data);
  }
  else if(req.url=="/terms"){
    let data= fs.readFileSync('terms.html','utf8');
    res.end(data);
  }else{
    res.writeHead(404,{'Content-Type':'text/html'})
    res.write('<h1>404 not found</h1>')
    res.end();
  }
});

server.listen(3000,()=>{
    console.log(`Server Running on port 3000`);
})