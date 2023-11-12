'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, _Sequelize) {
    return queryInterface.bulkInsert('addresses', 
    [
      {
        street: 'Janete Angela',
        number: 50,
        district: 'Olarias',
        city: 'Ponta Grossa',
        state: 'PR',
        patientId: 1
      },
      {
        street: 'Rua de Teste',
        number: 1,
        district: 'Bairro Teste',
        city: 'Cidade Teste',
        state: 'TST',
        patientId: 2
      },
      {
        street: 'Rua de Teste 2',
        number: 2,
        district: 'Bairro Existente',
        city: 'Cidade que existe',
        state: 'ALG STD',
        patientId: 3
      }
    ], {});
  },

  async down (queryInterface, _Sequelize) {
    return queryInterface.bulkDelete('addresses', null, {});
  }
};
