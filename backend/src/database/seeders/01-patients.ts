import { QueryInterface } from 'sequelize';
export default {
    up: async (queryInterface: QueryInterface) => {
        await queryInterface.bulkInsert('patients',
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
    down: async (queryInterface: QueryInterface) => {
        await queryInterface.bulkDelete('patients', {});
    }
};