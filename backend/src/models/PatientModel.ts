import SequelizePatient from "../database/models/SequelizePatient";
import { IPatient } from "../interfaces/patients/IPatient";
import { IPatientModel } from "../interfaces/patients/IPatientModel";
import { NewEntity } from "../interfaces";

export default class PatientModel implements IPatientModel {
    private model = SequelizePatient;

    async create(data: NewEntity<IPatient>): Promise<IPatient> {
        const dbData = await this.model.create(data);
    

        const { id, fullName, birthDate, email } = dbData;
        return { id, fullName, birthDate, email };
    }

    async findAll(): Promise<IPatient[]> {
        const dbData = await this.model.findAll();

        return dbData.map(({ id, fullName, birthDate, email }) => ({ id, fullName, birthDate, email }));
    }

    async findById(id: number): Promise<IPatient | null> {
        const dbData = await this.model.findByPk(id);
        if(dbData === null) return null;

        const { fullName, birthDate, email }: IPatient = dbData;
        return { id, fullName, birthDate, email };
    }

    async update(id: number, data: Partial<NewEntity<IPatient>>): Promise<IPatient | null> {
        const [affectedRows] = await this.model.update(data, { where: { id } });
        if (affectedRows === 0) return null;

        return this.findById(id);
    }

    async delete(id: number): Promise<number> {
        return this.model.destroy({ where: { id } });
    }
}