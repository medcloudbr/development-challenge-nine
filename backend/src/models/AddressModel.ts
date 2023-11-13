import SequelizeAddress from "../database/models/SequelizeAddress";
import { IAddress } from "../interfaces/addresses/IAddress";
import { IAddressModel } from "../interfaces/addresses/IAddressModel";

export default class AddressModel implements IAddressModel {
    private model = SequelizeAddress;

    async findById(id: number): Promise<IAddress | null> {
        const dbData = await this.model.findByPk(id);
        if (dbData === null) return null;

        const { street, number, district, city, state, country, patientId }: IAddress = dbData;
        return { id, street, number, district, city, state, country, patientId };
    }
    async update(id: number, data: Partial<IAddress>): Promise<IAddress | null> {
        const [affectedRows] = await this.model.update(data, {
            where: { patientId: id },
        });

        if (affectedRows === 0) return null;

        return this.findById(id);
    }

}