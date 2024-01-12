'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const currentDate = new Date();

    await queryInterface.bulkInsert('Cities', [
      { name: 'New York City', createdAt: currentDate, updatedAt: currentDate },
      { name: 'Los Angeles', createdAt: currentDate, updatedAt: currentDate },
      { name: 'Chicago', createdAt: currentDate, updatedAt: currentDate },
      { name: 'Houston', createdAt: currentDate, updatedAt: currentDate },
      { name: 'Phoenix', createdAt: currentDate, updatedAt: currentDate },
      { name: 'Philadelphia', createdAt: currentDate, updatedAt: currentDate },
      { name: 'San Antonio', createdAt: currentDate, updatedAt: currentDate },
      { name: 'San Diego', createdAt: currentDate, updatedAt: currentDate },
      { name: 'Dallas', createdAt: currentDate, updatedAt: currentDate },
      { name: 'San Jose', createdAt: currentDate, updatedAt: currentDate },
      { name: 'Austin', createdAt: currentDate, updatedAt: currentDate },
      { name: 'Jacksonville', createdAt: currentDate, updatedAt: currentDate },
      { name: 'San Francisco', createdAt: currentDate, updatedAt: currentDate },
      { name: 'Indianapolis', createdAt: currentDate, updatedAt: currentDate },
      { name: 'Columbus', createdAt: currentDate, updatedAt: currentDate },
      { name: 'Fort Worth', createdAt: currentDate, updatedAt: currentDate },
      { name: 'Charlotte', createdAt: currentDate, updatedAt: currentDate },
      { name: 'Seattle', createdAt: currentDate, updatedAt: currentDate },
      { name: 'Denver', createdAt: currentDate, updatedAt: currentDate },
      { name: 'Washington', createdAt: currentDate, updatedAt: currentDate },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Cities', null, {});
  }
};
