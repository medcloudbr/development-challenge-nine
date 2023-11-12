"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.default = {
    up(queryInterface) {
        return queryInterface.createTable('patients', {
            id: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            fullName: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
            birthDate: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: false,
            },
            email: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
        });
    },
    down(queryInterface) {
        return queryInterface.dropTable('patients');
    }
};
//# sourceMappingURL=01-create-patients-table.js.map