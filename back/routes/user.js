const express = require('express');
const {User , Post} = require('../models');
const router = express.Router();
const bcrypt = require('bcrypt')
const passport = require('passport')
const {isLoggedIn , isNotLoggedIn}= require('./middlewares')


router.get('/', isLoggedIn , async (req, res, next) => { // GET /user
    try {
        if (req.user) {
            const fullUserWithoutPassword = await User.findOne({
                where: { id: req.user.id },
                attributes: {
                    exclude: ['password']
                },
                include: [{
                    model: Post,
                    attributes: ['id'],
                }, {
                    model: User,
                    as: 'Followings',
                    attributes: ['id'],
                }, {
                    model: User,
                    as: 'Followers',
                    attributes: ['id'],
                }]
            })
            res.status(200).json(fullUserWithoutPassword);
        } else {
            res.status(200).json(null);
        }
    } catch (error) {
        console.error(error);
        next(error);
    }
});
router.post('/login' , isNotLoggedIn , (req , res , next)=>{
    /*/user / login*/
    passport.authenticate('local' ,(err , user , info)=>{
        if(err){
            console.error(err);
            return next(err);
        }
        if(info){
            return res.status(401).send(info.reason);
        }
        return req.login(user , async (loginErr)=>{
            if(loginErr){
                console.error(loginErr);
                return next(loginErr);
            }
            const fullUserWithOutPassword = await User.findOne({
                where:{id : user.id},
                attributes: {
                    exclude:['password'], //모델에서 as썻기때문에 as해줘야함.
                },
                include : [{
                    model: Post,
                },{
                    model: User,
                    as:'Followings',
                },{
                    model:User,
                    as:'Followers',
                }]
            })
            return res.status(200).json(fullUserWithOutPassword);
        })
    })(req, res , next);
});

//cor문제 프록시로 해결한다.
router.post('/', isNotLoggedIn , async (req, res, next) => { // POST /user/
    try {
        const exUser = await User.findOne({
            where: {
                email: req.body.email,
            }
        });
        if (exUser) {
            return res.status(403).send('이미 사용 중인 아이디입니다.');
        }
        const hashedPassword = await bcrypt.hash(req.body.password, 1);
        await User.create({
            email: req.body.email,
            nickname: req.body.nickname,
            password: hashedPassword,
        });
        res.status(201).send('ok');
    } catch (error) {
        console.error(error);
        next(error); // status 500
    }
});

router.post('/logout' , isLoggedIn , (req, res , next)=>{
    req.logout();
    req.session.destroy();
    res.send('ok')
})


module.exports = router;