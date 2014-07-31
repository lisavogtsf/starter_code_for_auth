var bcrypt = require("bcrypt");
var salt = bcrypt.genSaltSync(10);

module.exports = function (sequelize, DataTypes){
   var User = sequelize.define('user', {
     username: { 
        type: DataTypes.STRING, 
        unique: true, 
        validate: {
          len: [6, 30],
          }
    },
    password: {
        type:DataTypes.STRING,
        validate: {
          notEmpty: true
        }
      }
    },
    
    {
      classMethods: {
        associate: function(db){
          User.hasMany(db.post);
        }
      },
      {
        encrypt: function(password, salt){
          var hash = bcrypt.hashSync(password, salt);
          return hash;
        }
      },
      {
        comparePass:
      },
      {
        createNewUser:
      },
      {
        authorize:
      }

    } //close classMethods outer 

  ); // close define user
  return User;
}; // close User function

