/*
npm i init 페키지 설정
npm i express
npm i sequelize--> js로 sql조작 sequelize-cli mysql2 -->드라이버
* api.get -> 가져오다
* api.post -> 생성하다
* api.put -> 전체 수정
* api.delete -> 제거
* api.patch -> 부분 수정
* api.options -> 찔러보기
* api.head -> 헤더만 가져오기(헤더 / 바디)
* //swagger로 api 문서 작성
* //
* */



const express = require('express');
const postRouter = require('./routes/post');

const app = express();

app.get('/', (req , res)=>{ //주소창에 치는게 get요청
    res.send('hello express');
});

app.get('/', (req , res)=>{ //주소창에 치는게 get요청
    res.send('hello express');
});

app.get('/posts' ,(req , res)=>{
    res.json([
        {id : 1 , content: 'hello'},
        {id : 2 , content: 'hello2'},
        {id : 3 , content: 'hello3'},
    ]);
})

app.use('/post' , postRouter); //post를 prefix로 붙여준다.



app.listen(3065,()=>{
    console.log('서버 실행중');
})