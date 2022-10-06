const http = require("http");

const server1= http.createServer( (req, res) => { 
    res.writeHead(200,{"Content-Type":"text/html; charset=utf-8"});
    res.write("hello jy");
    res.end("<p>bye hs</p>")
} ) //서버크리에이트 { } 안에요청에대한응답
server1.listen(8080)  //무한대기 //로콜호스트:8080
server1.on("listening",()=>{console.log("8080리스닝중")})
server1.on("error", (error) => {console.log(error); })

//한번에 여러개 서버 실행하기

 
const server2= http.createserver2( (req, res) => { 
    res.writeHead(200,{"Content-Type":"text/html; charset=utf-8"});
    res.write("hello jy");
    res.end("<p>bye hs</p>")
} ) //서버크리에이트 { } 안에요청에대한응답
server2.listen(8081)  //무한대기 //로콜호스트:8080
server2.on("listening",()=>{console.log("8080리스닝중")})
server2.on("error", (error) => {console.log(error); })



;