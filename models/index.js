var fs        = require('fs') //?
  , path      = require('path') //?
  , Sequelize = require('sequelize')
  , lodash    = require('lodash')
  , env       = process.env.NODE_ENV || 'development' //?
  , config    = require(__dirname + '/../config/config.json')[env]
  , sequelize = new Sequelize(config.database, config.username, config.password, config)
  , db        = {}

fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf('.') !== 0) && (file !== 'index.js')
  })
  .forEach(function(file) {
    var model = sequelize.import(path.join(__dirname, file))
    db[model.name] = model
  })

Object.keys(db).forEach(function(modelName) {
  if ('associate' in db[modelName]) {
    db[modelName].associate(db)
  }
})


// // test findOrCreate user
// db.user.findOrCreate({username: "lisavogtsf"}, {password: "password"})
//   .success(function(user, created){
//     console.log(user);
//   })

// // test findOrCreate post
// db.post.findOrCreate({title: "Ta da"}, {body: "So much to say"}, {userid: 1})
//   .success(function(post, created){
//     console.log(post);
//   })






module.exports = lodash.extend({
  sequelize: sequelize,
  Sequelize: Sequelize
}, db)
