import {
    DataTypes,
    Model,
    InferAttributes,
    InferCreationAttributes,
    CreationOptional,
} from 'sequelize';
import db from '.';
import SequelizeAddress from './SequelizeAddress';
// import SequelizeAddress from './SequelizeAddress';

class SequelizePatient extends Model<InferAttributes<SequelizePatient>,
InferCreationAttributes<SequelizePatient>> {

    declare id: CreationOptional<number>;
    declare fullName: string;
    declare birthDate: Date;
    declare email: string;

}

SequelizePatient.init({
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
}, {
    sequelize: db,
    tableName: 'patients',
    timestamps: false,
});

SequelizePatient.hasOne(SequelizeAddress, {
    foreignKey: 'patientId',
    as: 'address',
});

SequelizeAddress.belongsTo(SequelizePatient, {
    foreignKey: 'patientId',
    as: 'patient',
});

export default SequelizePatient;