import { QueryInterface } from 'sequelize';
export default {
    up: async (queryInterface: QueryInterface) => {
        await queryInterface.bulkInsert('addresses',
            [
                {
                    street: 'Janete Angela',
                    number: 50,
                    district: 'Olarias',
                    city: 'Ponta Grossa',
                    state: 'PR',
                    country: 'Brasil',
                    patientId: 1
                },
                {
                    street: 'Rua de Teste',
                    number: 1,
                    district: 'Bairro Teste',
                    city: 'Cidade Teste',
                    state: 'TST',
                    country: 'País Teste',
                    patientId: 2
                },
                {
                    street: 'Rua de Teste 2',
                    number: 2,
                    district: 'Bairro Existente',
                    city: 'Cidade que existe',
                    state: 'ALG STD',
                    country: 'País que existe',
                    patientId: 3
                }
            ], {});
    },
    down: async (queryInterface: QueryInterface) => {
        await queryInterface.bulkDelete('addresses', {});
    },
};