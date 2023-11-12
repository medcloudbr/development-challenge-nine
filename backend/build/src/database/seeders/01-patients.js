'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  return queryInterface.bulkInsert('patients', 
  [
    {
      fullName: 'Juan Cassius carneiro Pereira',
      birthDate: '1997-01-03',
      email: 'cassjuan@hotmail.com',   
  },
  {
      fullName: 'Fulano Pereira',
      birthDate: '1992-01-02',
      email: 'maria@gmail.com',
  },
  {
    fullName: 'Pedro da Silva',
    birthDate: '2000-10-04',
    email: 'pedropedroso@gbol.com',
  }
  ], {});
  },
  
  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('patients', null, {});
  }
};
