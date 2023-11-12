import { Model, QueryInterface, DataTypes } from 'sequelize';
import { IAddress } from '../../interfaces/addresses//IAddress';

export default {
    up(queryInterface: QueryInterface) {
        return queryInterface.createTable<Model<IAddress>>('addresses', {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            street: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            number: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            district: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            city: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            state: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            country: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            patientId: {
                type: DataTypes.INTEGER,
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
    down(queryInterface: QueryInterface) {
        return queryInterface.dropTable('addresses');
    }
};
