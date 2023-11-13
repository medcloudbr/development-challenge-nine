import { IAddress } from "./IAddress";

export interface IAddressModel {
    update(id: IAddress['id'], data: Partial<IAddress>): Promise<IAddress | null>,
    findById(id: IAddress['id']): Promise<IAddress | null>
}
