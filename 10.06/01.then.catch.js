class varClass {
   constructor(){
       this.state = "";
       this.result = "";
   }

   
   ret() {
       return new varClass;
   }
   on() {
       return new varClass;
   }
   resolve(meg1) {
       this.result = meg1;
       this.state = "resolved";

       return this;
   }
   reject(meg2) {
       this.result = meg2;
       this.state = "rejected";

       return this;
   }
   then(func2) {
       if (this.state == "resolved"){
           func2(this.result);
       }
       return func2();
   }
   catch(func3) {
       if (this.state == "rejected"){
           func3(this.result);
       }        
       return this;
   }
}


let tempVar1  = new varClass();
tempVar1.reject('실패하진 않았어요'); //스테이트 리젝트로 선언
tempVar1 
.then( (message)=>{console.log(message); return new varClass();} )
   //then(func2) 에서 func2       (message)=>{console.log(message); 메시지를 콘솔로그하는 함수
   // 리젝트 스테이트니까 출력 x
       //리턴varClass
.resolve('성공했어요')         
   // 스테이트 리졸브로 변경
       //리턴디스=리턴varClass
.catch( (message)=>{console.log(message);} ) // func3
   //스테이트 리졸브니까 출력x
       //리턴디스=리턴varClass
.then( (message)=>{console.log(message);} )  //func2    
   // 스테이트 리졸브니까 성공했어요 출력
       //리턴펑크2?
;





