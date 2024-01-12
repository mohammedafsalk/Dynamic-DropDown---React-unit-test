'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const currentDate = new Date();

    await queryInterface.bulkInsert('Villages', [
      { name: 'Village 1', createdAt: currentDate, updatedAt: currentDate },
      { name: 'Village 2', createdAt: currentDate, updatedAt: currentDate },
      { name: 'Village 3', createdAt: currentDate, updatedAt: currentDate },
      { name: 'Village 4', createdAt: currentDate, updatedAt: currentDate },
      { name: 'Village 5', createdAt: currentDate, updatedAt: currentDate },
      { name: 'Village 6', createdAt: currentDate, updatedAt: currentDate },
      { name: 'Village 7', createdAt: currentDate, updatedAt: currentDate },
      { name: 'Village 8', createdAt: currentDate, updatedAt: currentDate },
      { name: 'Village 9', createdAt: currentDate, updatedAt: currentDate },
      { name: 'Village 10', createdAt: currentDate, updatedAt: currentDate },
      { name: 'Village 11', createdAt: currentDate, updatedAt: currentDate },
      { name: 'Village 12', createdAt: currentDate, updatedAt: currentDate },
      { name: 'Village 13', createdAt: currentDate, updatedAt: currentDate },
      { name: 'Village 14', createdAt: currentDate, updatedAt: currentDate },
      { name: 'Village 15', createdAt: currentDate, updatedAt: currentDate },
      { name: 'Village 16', createdAt: currentDate, updatedAt: currentDate },
      { name: 'Village 17', createdAt: currentDate, updatedAt: currentDate },
      { name: 'Village 18', createdAt: currentDate, updatedAt: currentDate },
      { name: 'Village 19', createdAt: currentDate, updatedAt: currentDate },
      { name: 'Village 20', createdAt: currentDate, updatedAt: currentDate },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Villages', null, {});
  }
};
