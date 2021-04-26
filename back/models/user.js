module.exports = (sequelize , DataTypes) =>{
    const User = sequelize.define('User' , { //대문자 ->소문자 , s를 붙인다.
        email : {
            type: DataTypes.STRING(30), //STRING , TEXT , BOOLEAN , INTEGER , FLOAT , DATATIME
            allowNull: false,
            unique : true,
        },
        nickname : {
            type: DataTypes.STRING(30),
            allowNull: false,
        },
        password : {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
    }, {
        charset : 'utf8',
        collate : 'utf8_general_ci',
    });
    User.associate = (db)=>{
        db.User.hasMany(db.post); //post 1 : N User
        db.User.hasMany(db.Comment); //Comment 1 : N User
        db.User.belongsToMany(db.Hashtag , {through : 'Like' , as:'Liked'});//중간테이블
        db.User.belongsToMany(db.User , {through : 'Follow' , as: 'Followers' , foreignKey: 'followingId' });
        db.User.belongsToMany(db.User , {through : 'Follow' , as: 'Followings' , foreignKey: 'followerId' });
        //같은 테이블에서의 다대다 관계 -> following 찾을때는 나를 먼저 찾고 following 찾아야한다.
        //follower도 마찬가지
        //같은 테이블 안에서 설정할때는 foreignkey를 따로 설정해준다. -->직접 만들어준다.
    };
    return User;
}