'use strict';

const { BookStatus } = require('../constants/book.constants');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('books', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false
      },
      author: {
        type: Sequelize.STRING,
        allowNull: false
      },
      status: {
        type: Sequelize.ENUM,
        values: [BookStatus.AVAILABLE, BookStatus.BORROWED],
        allowNull: false,
        defaultValue: BookStatus.AVAILABLE
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });

    await queryInterface.addIndex('books', ['title', 'author'], {
      unique: true,
      name: 'unique_title_author'
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeIndex('books', 'unique_title_author');
    await queryInterface.dropTable('books');
  }
};
