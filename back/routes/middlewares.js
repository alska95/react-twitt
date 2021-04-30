exports.isLoggedIn = (req , res , next)=>{
    if(req.isAuthenticated()){
        next(); //next사용방법 2개 error넣으면 error처리하러가고 안넣으면 다음 미들웨어로 간다.
    }else{
        res.status(401).send('로그인이 필요합니다.');
    }
}

exports.isNotLoggedIn = (req , res , next)=>{
    if(!req.isAuthenticated()){
        next(); //next사용방법 2개 error넣으면 error처리하러가고 안넣으면 다음 미들웨어로 간다.
    }else{
        res.status(401).send('로그인이 필요합니다.');
    }
}