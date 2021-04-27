module.exports = (sequelize , DataTypes) =>{
    const Post = sequelize.define('Post' , { //대문자 ->소문자 , s를 붙인다.
        content : {
            type : DataTypes.TEXT,
            allowNull : false,
        },
    }, {
        charset : 'utf8mb4',
        collate : 'utf8mb4_general_ci',
    });
    Post.associate = (db)=>{
        db.Post.belongsTo(db.User); //post 1 : N User //포스트 작성자
        db.Post.hasMany(db.Comment); //post N : 1 comment
        db.Post.hasMany(db.Image);
        db.Post.belongsTo(db.Post , {as : 'Retweet'});//리트윗 --> postId -> Retweet
        db.Post.belongsToMany(db.Hashtag, {through:'PostHashtag'});
        db.Post.belongsToMany(db.User, {through: 'Like' , as:'Likers'}); //중간테이블 설정 //포스트 좋아요 누른 사람
    };
    return Post;
}