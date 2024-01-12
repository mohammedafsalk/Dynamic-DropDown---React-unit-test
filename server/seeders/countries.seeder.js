// seeders/xxxxxx-demo-countries.js

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const currentDate = new Date();

    await queryInterface.bulkInsert('Countries', [
      { name: 'Afghanistan', createdAt: currentDate, updatedAt: currentDate },
      { name: 'Albania', createdAt: currentDate, updatedAt: currentDate },
      { name: 'Algeria', createdAt: currentDate, updatedAt: currentDate },
      { name: 'Andorra', createdAt: currentDate, updatedAt: currentDate },
      { name: 'Angola', createdAt: currentDate, updatedAt: currentDate },
      { name: 'Antigua and Barbuda', createdAt: currentDate, updatedAt: currentDate },
      { name: 'Argentina', createdAt: currentDate, updatedAt: currentDate },
      { name: 'Armenia', createdAt: currentDate, updatedAt: currentDate },
      { name: 'Australia', createdAt: currentDate, updatedAt: currentDate },
      { name: 'Austria', createdAt: currentDate, updatedAt: currentDate },
      { name: 'Azerbaijan', createdAt: currentDate, updatedAt: currentDate },
      { name: 'Bahamas', createdAt: currentDate, updatedAt: currentDate },
      { name: 'Bahrain', createdAt: currentDate, updatedAt: currentDate },
      { name: 'Bangladesh', createdAt: currentDate, updatedAt: currentDate },
      { name: 'Barbados', createdAt: currentDate, updatedAt: currentDate },
      { name: 'Belarus', createdAt: currentDate, updatedAt: currentDate },
      { name: 'Belgium', createdAt: currentDate, updatedAt: currentDate },
      { name: 'Belize', createdAt: currentDate, updatedAt: currentDate },
      { name: 'Benin', createdAt: currentDate, updatedAt: currentDate },
      { name: 'Bhutan', createdAt: currentDate, updatedAt: currentDate },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Countries', null, {});
  }
};
