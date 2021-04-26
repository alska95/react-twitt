module.exports = (sequelize , DataTypes) =>{
    const Comment = sequelize.define('Comment' , { //대문자 ->소문자 , s를 붙인다.
        content : {
            type : DataTypes.TEXT,
            allowNull : false,
        },
    }, {
        charset : 'utf8mb4',
        collate : 'utf8mb4_general_ci',
    });
    Comment.associate = (db)=>{
        db.Comment.belongsTo(db.User); //belongsto 사용하면 user_id , post_id컬럼을 만들어준다 (외래키)
        db.Comment.belongsTo(db.Post);
    };
    return Comment;
}