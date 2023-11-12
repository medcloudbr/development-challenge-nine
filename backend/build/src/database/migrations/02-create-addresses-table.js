"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.default = {
    up(queryInterface) {
        return queryInterface.createTable('addresses', {
            id: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            street: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
            number: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
            },
            district: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
            city: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
            state: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
            country: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
            patientId: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'patients',
                    key: 'id'
                },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE'
            }
        });
    },
    down(queryInterface) {
        return queryInterface.dropTable('addresses');
    }
};
//# sourceMappingURL=02-create-addresses-table.js.map