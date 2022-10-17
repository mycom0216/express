const express = require("express");
const app = express(); //127.0.0.1

const router = express.Router();

router.get("/plus", (request, response) => {

    console.log("/plus 라우터호출");
    console.log(parseInt(request.query.num1)+parseInt(request.query.num2));
    
    response.writeHead(200, {"Content-Type" : "text/html;charset=utf-8"});
    response.write("<html>");
    response.write("<body>");
    response.write("응답성공<br>");
    response.write("결과값 : " + (parseInt(request.query.num1)+parseInt(request.query.num2)));
    response.write("</body>");
    response.write("</html>");
    response.end();

});

router.get("/cal", (request, response) => {
    //1. 사용자 입력한 값을 가져오기.
    let num1 = request.query.num1;
    let num2 = request.query.num2;
    let cal = request.query.cal;

    console.log(num1 + cal + num2);

})

app.use(router);

app.listen(3001);
