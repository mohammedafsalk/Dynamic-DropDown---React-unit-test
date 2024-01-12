// seeders/xxxxxx-demo-blocks.js

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const currentDate = new Date();

    await queryInterface.bulkInsert('Blocks', [
      { name: 'Block A', createdAt: currentDate, updatedAt: currentDate },
      { name: 'Block B', createdAt: currentDate, updatedAt: currentDate },
      { name: 'Block C', createdAt: currentDate, updatedAt: currentDate },
      { name: 'Block D', createdAt: currentDate, updatedAt: currentDate },
      { name: 'Block E', createdAt: currentDate, updatedAt: currentDate },
      { name: 'Block F', createdAt: currentDate, updatedAt: currentDate },
      { name: 'Block G', createdAt: currentDate, updatedAt: currentDate },
      { name: 'Block H', createdAt: currentDate, updatedAt: currentDate },
      { name: 'Block I', createdAt: currentDate, updatedAt: currentDate },
      { name: 'Block J', createdAt: currentDate, updatedAt: currentDate },
      { name: 'Block K', createdAt: currentDate, updatedAt: currentDate },
      { name: 'Block L', createdAt: currentDate, updatedAt: currentDate },
      { name: 'Block M', createdAt: currentDate, updatedAt: currentDate },
      { name: 'Block N', createdAt: currentDate, updatedAt: currentDate },
      { name: 'Block O', createdAt: currentDate, updatedAt: currentDate },
      { name: 'Block P', createdAt: currentDate, updatedAt: currentDate },
      { name: 'Block Q', createdAt: currentDate, updatedAt: currentDate },
      { name: 'Block R', createdAt: currentDate, updatedAt: currentDate },
      { name: 'Block S', createdAt: currentDate, updatedAt: currentDate },
      { name: 'Block T', createdAt: currentDate, updatedAt: currentDate },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Blocks', null, {});
  }
}
