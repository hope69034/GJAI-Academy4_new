const http = require("http");

http.createServer( (req, res) => { 
    res.writeHead(200,{"Content-Type":"text/html; charset=utf-8"});
    res.write("hello jy");
    res.end("<p>bye hs</p>")
} ) //서버크리에이트 { } 안에요청에대한응답
.listen(8080, ()=>{console.log("8080대기중")})  //무한대기 //로콜호스트:8080
 



;