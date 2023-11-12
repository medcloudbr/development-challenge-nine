import { Model, QueryInterface, DataTypes } from 'sequelize';
import { IPatient } from '../../interfaces/patients/IPatient';
export default {
    up(queryInterface: QueryInterface) {
        return queryInterface.createTable<Model<IPatient>>('patients', {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            fullName: {
                type: DataTypes.STRING(100),
                allowNull: false,
            },
            birthDate: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            email: {
                type: DataTypes.STRING(100),
                allowNull: false,
            },
        });
    },
    down(queryInterface: QueryInterface) {
        return queryInterface.dropTable('patients');
    }
}