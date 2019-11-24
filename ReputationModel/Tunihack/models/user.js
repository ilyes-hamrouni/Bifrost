'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    reputation: DataTypes.INTEGER,
    

  });
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Post,{
      foreignKey: 'userId',
      as: 'posts'
    })
  };
  return User;
};