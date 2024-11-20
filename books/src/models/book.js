'use strict';
const {
  Model
} = require('sequelize');
const { BookStatus } = require('../constants/book.constants');
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
    status: { type: DataTypes.STRING, allowNull: false, defaultValue: BookStatus.AVAILABLE },
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