import { IAddress } from "./IAddress";

export interface IAddressModel {
    create(data: Partial<IAddress>): Promise<IAddress>,
    
}
