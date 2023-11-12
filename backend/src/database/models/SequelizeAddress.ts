import {
    DataTypes,
    Model,
    InferAttributes,
    InferCreationAttributes,
    CreationOptional,
} from 'sequelize';
import db from '.';
import SequelizePatient from './SequelizePatient';

class SequelizeAddress extends Model<InferAttributes<SequelizeAddress>,
InferCreationAttributes<SequelizeAddress>> {

    declare id: CreationOptional<number>;
    declare street: string;
    declare number: number;
    declare district: string;
    declare city: string;
    declare state: string;
    declare country: string;
    declare patientId: number;

}

SequelizeAddress.init({
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
}, {
    sequelize: db,
    tableName: 'addresses',
    timestamps: false,
});

SequelizeAddress.belongsTo(SequelizePatient, {
    foreignKey: 'patientId',
    as: 'patient',
});

export default SequelizeAddress;