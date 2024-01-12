'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const currentDate = new Date();

    await queryInterface.bulkInsert('States', [
      { name: 'California', createdAt: currentDate, updatedAt: currentDate },
      { name: 'Texas', createdAt: currentDate, updatedAt: currentDate },
      { name: 'New York', createdAt: currentDate, updatedAt: currentDate },
      { name: 'Florida', createdAt: currentDate, updatedAt: currentDate },
      { name: 'Illinois', createdAt: currentDate, updatedAt: currentDate },
      { name: 'Pennsylvania', createdAt: currentDate, updatedAt: currentDate },
      { name: 'Ohio', createdAt: currentDate, updatedAt: currentDate },
      { name: 'Georgia', createdAt: currentDate, updatedAt: currentDate },
      { name: 'North Carolina', createdAt: currentDate, updatedAt: currentDate },
      { name: 'Michigan', createdAt: currentDate, updatedAt: currentDate },
      { name: 'New Jersey', createdAt: currentDate, updatedAt: currentDate },
      { name: 'Virginia', createdAt: currentDate, updatedAt: currentDate },
      { name: 'Washington', createdAt: currentDate, updatedAt: currentDate },
      { name: 'Arizona', createdAt: currentDate, updatedAt: currentDate },
      { name: 'Massachusetts', createdAt: currentDate, updatedAt: currentDate },
      { name: 'Tennessee', createdAt: currentDate, updatedAt: currentDate },
      { name: 'Indiana', createdAt: currentDate, updatedAt: currentDate },
      { name: 'Missouri', createdAt: currentDate, updatedAt: currentDate },
      { name: 'Maryland', createdAt: currentDate, updatedAt: currentDate },
      { name: 'Wisconsin', createdAt: currentDate, updatedAt: currentDate },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('States', null, {});
  }
};
