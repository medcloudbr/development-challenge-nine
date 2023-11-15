import { useCallback, useState } from "react"
import { patientService } from "../services";
import { IPatientWithAddress } from "../interfaces";

export const usePatient = () => {
    const [patients, setPatients] = useState<IPatientWithAddress[]>([]);


    const getAll = useCallback(async () => {
        const { status, data } = await patientService.getAll();
        if (status !== 200) throw new Error('Error fetching patients');
        setPatients(data);
        console.log(data);
    }, []);

    const getById = async (id: number) => {
        const { status, data } = await patientService.getById(id);
        if (status !== 200) throw new Error('Error fetching patient');
        console.log(data);
        setPatients(data);
        return data;
    }

    const create = async (patient: IPatientWithAddress) => {
        const { status, data } = await patientService.create(patient);
        if (status !== 201) throw new Error('Error creating patient');
        return data;
    }

    const update = async (patient: IPatientWithAddress) => {
        const { status, data } = await patientService.update(patient)
        if (status !== 200) throw new Error('Error updating patient');
        return data;
    }

    const remove = async (id: number) => {
        const { status, data } = await patientService.remove(id);
        if (status !== 200) throw new Error('Error deleting patient');
        return data;
    }

    return {
        patients,
        getAll,
        getById,
        create,
        update,
        remove
    }
}
