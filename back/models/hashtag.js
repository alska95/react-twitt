module.exports = (sequelize , DataTypes) =>{
    const Hashtag = sequelize.define('Hashtag' , { //대문자 ->소문자 , s를 붙인다.
        name : {
            type: DataTypes.STRING(20),
            allowNull : false,
        },
    }, {
        charset : 'utf8mb4',
        collate : 'utf8mb4_general_ci',
    });
    Hashtag.associate = (db)=>{
        db.Hashtag.belongsToMany(db.Post);
    };
    return Hashtag;
}