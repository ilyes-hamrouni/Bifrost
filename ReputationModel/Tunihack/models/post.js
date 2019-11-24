'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    name: DataTypes.STRING,
    source: DataTypes.STRING,
    score: DataTypes.INTEGER,
  }, {});
  Post.associate = function(models) {
    // associations can be defined here
    Post.belongsTo(models.User,{
      foreignKey: 'userId',
      onDelete: 'CASCADE',
    });
  };
  return Post;
};