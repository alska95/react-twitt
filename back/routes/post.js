const express = require('express')
const {Post , Comment , Image , User} = require('../models');
const router = express.Router();
const {isLoggedIn} = require('./middlewares');

router.post('/' , isLoggedIn , async (req, res,next)=>{
    try{
        const post = await Post.create({
            content:req.body.content,
            userId : User.id,
        });
        const fullPost = await Post.findOne({
            where:{id : post.id},
            include:[{
                model: Image,
            },{
                model: Comment,
            },{
                model: User,
            }]
        })
        res.status(201).json(fullPost);
    }catch (error){
        console.error(error);
        next(error);
    }

})

//동적으로 주소 할당하는법 :
router.post('/:postId/comment' ,isLoggedIn , async (req, res,next)=>{
    try{
        const post = await Post.findOne({
            where:{id : req.params.post}
        })
        if(!post){
            return res.status(403).send('존재하지 않는 게시글입니다.');
        }
        const comment = await Comment.create({
            content: req.body.content,
            postId : req.params.postId, //주소에 대한 parameter
            userId : req.user.id,

        })

        res.status(201).json(comment);
    }catch (error){
        console.error(error);
        next(error);
    }
})

module.exports = router;