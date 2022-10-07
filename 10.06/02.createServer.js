const http = require("http");
          //        요청  응답
http.createServer( (req, res) => { 
    res.writeHead(200,{"Content-Type":"text/html; charset=utf-8"});
    res.write("<h1>hello jy</h1>"); //바디만들기
    res.end("<p>bye hs</p>")
} ) //서버크리에이트 { } 안에요청에대한응답
.listen(8080, ()=>{console.log("8080대기중")})  //무한대기 //로콜호스트:8080
.on     //8080포트



;