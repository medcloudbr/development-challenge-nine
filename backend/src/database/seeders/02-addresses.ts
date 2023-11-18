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
                }, {
                    patientId: 4,
                    street: 'Rua 4',
                    district: 'Bairro 4',
                    number: '123',
                    city: 'Cidade 4',
                    state: 'Estado 4',
                    country: 'País 4',
                },
                {
                    patientId: 5,
                    street: 'Rua 5',
                    district: 'Bairro 5',
                    number: '456',
                    city: 'Cidade 5',
                    state: 'Estado 5',
                    country: 'País 5',
                },
                {
                    patientId: 6,
                    street: 'Rua 6',
                    district: 'Bairro 6',
                    number: '789',
                    city: 'Cidade 6',
                    state: 'Estado 6',
                    country: 'País 6',
                },
                {
                    patientId: 7,
                    street: 'Rua 7',
                    district: 'Bairro 7',
                    number: '1011',
                    city: 'Cidade 7',
                    state: 'Estado 7',
                    country: 'País 7',
                },
                {
                    patientId: 8,
                    street: 'Rua 8',
                    district: 'Bairro 8',
                    number: '1213',
                    city: 'Cidade 8',
                    state: 'Estado 8',
                    country: 'País 8',
                },
            ], {});
    },
    down: async (queryInterface: QueryInterface) => {
        await queryInterface.bulkDelete('addresses', {});
    },
};