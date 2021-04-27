module.exports = (sequelize , DataTypes) =>{
    const Image = sequelize.define('Image' , { //대문자 ->소문자 , s를 붙인다.
        src : {
            type: DataTypes.STRING(200),
            allowNull : false,
        },
    }, {
        modelName: 'Image',
        tableName: 'images',
        charset: 'utf8',
        collate: 'utf8_general_ci',
    });
    Image.associate = (db)=>{
        db.Image.belongsTo(db.Post);
    };
    return Image;
}