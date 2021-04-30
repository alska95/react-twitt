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

const detenv = require('dotenv');
const express = require('express');
const postRouter = require('./routes/post');
const userRouter = require('./routes/user');
const cors = require('cors');
const db = require('./models')
const app = express();
const passportConfig = require('./passport')
const passport = require('passport')
const session = require('express-session');
const cookieParser = require('cookie-parser');


db.sequelize.sync()
    .then(()=>{
        console.log('db 연결 성공');
    })

passportConfig();

app.use(cors({
    credentials: true,
    origin : 'http://localhost:3000', //해킹위험있음. 추후에 origin설정해주면된다.

}));
app.use(express.json());
app.use(express.urlencoded({extended:true})); //위에서부터 아래로 실행되기때문에 위에 이썽야한다. user찾으면 거기서 끝나기 때문
app.use(cookieParser('nodebirdsecret')); //실제 정보대신 랜덤한 토큰을 보내준다 ->보안을 위한 쿠키 and 프론트쪽의 쿠키와 백쪽의 쿠키를 연결시켜서 동작한다.
app.use(session({
    saveUninitialized:false,
    resave : false,
    secret:'nodebirdsecret',
}));
app.use(passport.initialize());
app.use(passport.session());

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
app.use('/user', userRouter);





app.listen(3065,()=>{
    console.log('서버 실행중');
})