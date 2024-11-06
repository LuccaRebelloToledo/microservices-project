'use strict';
const {
  TYPES
} = require('../constants/loan.constants');
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Loan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Loan.init({
    userId: { type: DataTypes.INTEGER, allowNull: false },
    bookId: { type: DataTypes.INTEGER, allowNull: false },
    type: { type: DataTypes.ENUM, values: [TYPES.LOAN, TYPES.RETURN], allowNull: false }
  }, {
    sequelize,
    modelName: 'Loan',
    tableName: 'loans'
  });
  return Loan;
};