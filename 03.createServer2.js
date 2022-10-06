const http = require("http");
const fs = require("fs").promises
const server1= http.createServer( (req, res) => { 
    res.writeHead(200,{"Content-Type":"text/html; charset=utf-8"});
    res.write("hello jy");
    res.end("<p>bye hs</p>")
} ) //서버크리에이트 { } 안에요청에대한응답
server1.listen(8080)  //무한대기 //로콜호스트:8080
server1.on("listening",()=>{console.log("8080리스닝중")})
server1.on("error", (error) => {console.log(error); })
 


;