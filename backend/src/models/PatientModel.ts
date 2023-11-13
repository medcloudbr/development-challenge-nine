import SequelizePatient from "../database/models/SequelizePatient";
import { IPatient, IPatientWithAddress } from "../interfaces/patients/IPatient";
import { IPatientModel } from "../interfaces/patients/IPatientModel";
import { NewEntity } from "../interfaces";
import SequelizeAddress from "../database/models/SequelizeAddress";

export default class PatientModel implements IPatientModel {
    private model = SequelizePatient;
    private addressModel = SequelizeAddress
    async create(data: NewEntity<IPatientWithAddress>): Promise<any> {
        const dbData = await this.model.create(data, {
            include: [{
                model: this.addressModel,
                as: 'address'
            }]
        });


        const { id, fullName, birthDate, email } = dbData;
        // return { id, fullName, birthDate, email, address: data.address};
        return dbData
    }

    async findAll(): Promise<any[]> { // tinha um array de Ipatient
        const dbData = await this.model.findAll({
            include: [{
                model: this.addressModel,
                attributes: ['street', 'number', 'district', 'city', 'state', 'country'],
                as: 'address'
            }]
        });

        // return dbData.map(({ id, fullName, birthDate, email }) => ({ id, fullName, birthDate, email }));
        return dbData
    }

    async findById(id: number): Promise<IPatient | null | any> {
        const dbData = await this.model.findByPk(id, {
            include: [{
                model: this.addressModel,
                attributes: ['street', 'number', 'district', 'city', 'state', 'country'],
                as: 'address'
            }]
        });
        if (dbData === null) return null;

        const { fullName, birthDate, email, address }: IPatient | any = dbData;
        return { id, fullName, birthDate, email, address };
    }

    async update(id: number, data: Partial<NewEntity<IPatientWithAddress>>): Promise<any | null> {
        const [affectedRows] = await this.model.update(data, {
            where: { id },
        });
        if (affectedRows === 0) return null;

        return this.findById(id);
    }

    async delete(id: number): Promise<number> {
        return this.model.destroy({ where: { id } });
    }
}