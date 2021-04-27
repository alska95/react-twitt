const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const db = {};

const sequelize = new Sequelize(config.database , config.username , config.password , config);
//노드와 mysql 연결

db.Comment = require('./comment')(sequelize , Sequelize);
db.Comment = require('./post')(sequelize , Sequelize);
db.Comment = require('./user')(sequelize , Sequelize);
db.Comment = require('./image')(sequelize , Sequelize);
db.Comment = require('./hashtag')(sequelize , Sequelize);

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db); //반복문 돌면서 관계들 연결해준다.
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
