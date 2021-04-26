module.exports = (sequelize , DataTypes) =>{
    const Image = sequelize.define('Image' , { //대문자 ->소문자 , s를 붙인다.
        src : {
            type: DataTypes.STRING(200),
            allowNull : false,
        },
    }, {
        charset : 'utf8',
        collate : 'utf8mb4_general_ci',
    });
    Image.associate = (db)=>{
        db.Image.belongsTo(db.Post);
    };
    return Image;
}