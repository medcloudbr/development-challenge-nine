"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    up: async (queryInterface) => {
        await queryInterface.bulkInsert('patients', [
            {
                fullName: 'Juan Cassius Carneiro Pereira',
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
            }, {
                fullName: 'Pedro Pedrosa',
                birthDate: '2000-10-04',
                email: 'pedropedroso@gbol.com',
            },
            {
                fullName: 'Maria da Silva',
                birthDate: '1995-01-03',
                email: 'mariasilva@gbol.com',
            },
            {
                fullName: 'João Joãozinho',
                birthDate: '1990-05-15',
                email: 'joaojoaozinho@gbol.com',
            },
            {
                fullName: 'Ana Aninha',
                birthDate: '1998-07-20',
                email: 'anaaninha@gbol.com',
            },
            {
                fullName: 'Carlos Carlitos',
                birthDate: '1985-02-28',
                email: 'carloscarlitos@gbol.com',
            },
        ], {});
    },
    down: async (queryInterface) => {
        await queryInterface.bulkDelete('patients', {});
    }
};
//# sourceMappingURL=01-patients.js.map