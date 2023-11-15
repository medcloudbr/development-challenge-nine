export interface IPatientWithAddress {
    id: number;
    fullName: string;
    birthDate: Date;
    email: string;
    address: {
        street: string;
        number: number;
        district: string;
        city: string;
        state: string;
        country: string;
    }
}

