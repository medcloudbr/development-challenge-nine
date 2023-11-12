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
            }
        ], {});
    },
    down: async (queryInterface) => {
        await queryInterface.bulkDelete('patients', {});
    }
};
//# sourceMappingURL=01-patients.js.map