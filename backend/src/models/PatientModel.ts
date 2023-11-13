import SequelizePatient from "../database/models/SequelizePatient";
import { IPatient, IPatientWithAddress } from "../interfaces/patients/IPatient";
import { IPatientModel } from "../interfaces/patients/IPatientModel";
import { NewEntity } from "../interfaces";
import SequelizeAddress from "../database/models/SequelizeAddress";

export default class PatientModel implements IPatientModel {
    private model = SequelizePatient;
    private addressModel = SequelizeAddress
    async create(data: NewEntity<IPatientWithAddress>): Promise<IPatientWithAddress> {
        const dbData = await this.model.create(data, {
            include: [{
                model: this.addressModel,
                as: 'address'
            }]
        });

        const { id, fullName, birthDate, email } = dbData;
        const convertedData: IPatientWithAddress = { id, fullName, birthDate, email, address: data.address };

        return convertedData;
    }

    async findAll(): Promise<IPatientWithAddress[]> { // tinha um array de Ipatient
        const dbData = await this.model.findAll({
            include: [{
                model: this.addressModel,
                attributes: ['street', 'number', 'district', 'city', 'state', 'country'],
                as: 'address'
            }]
        });

        const convertedData: IPatientWithAddress[] = dbData.map(({ id, fullName, birthDate, email, address }: IPatient | any) => ({ id, fullName, birthDate, email, address }));

        return convertedData;  // return dbData.map(({ id, fullName, birthDate, email }) => ({ id, fullName, birthDate, email }));
    }

    async findById(id: number): Promise<IPatientWithAddress | null> {
        const dbData = await this.model.findByPk(id, {
            include: [{
                model: this.addressModel,
                attributes: ['street', 'number', 'district', 'city', 'state', 'country'],
                as: 'address'
            }]
        });
        if (dbData === null) return null;

        const { fullName, birthDate, email, address }: IPatient | any = dbData;
        const convertedData: IPatientWithAddress = { id, fullName, birthDate, email, address };

        return convertedData;
    }

    async update(id: number, data: Partial<NewEntity<IPatientWithAddress>>): Promise<IPatientWithAddress | null> {
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