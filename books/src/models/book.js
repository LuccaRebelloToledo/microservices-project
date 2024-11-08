'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Book.init({
    title: { type: DataTypes.STRING, allowNull: false },
    author: { type: DataTypes.STRING, allowNull: false },
    available: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: true }
  }, {
    indexes: [
      {
          unique: true,
          fields: ['title', 'author']
      }
    ],
    sequelize,
    modelName: 'Book',
    tableName: 'books'
  });
  return Book;
};