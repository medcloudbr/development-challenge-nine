import {
    useCallback,
    useState
} from "react"
import { patientService } from "../services";
import { IPatientWithAddress } from "../interfaces";
import { IPatientContext } from "../context/PatientContext";



export const usePatient = (): IPatientContext => {
    const [patients, setPatients] = useState<IPatientWithAddress[]>([]);
    const [action, setAction] = useState<string>('')
    const [wasPatientDeleted, setWasPatientDeleted] = useState<boolean>(false);


    const getAll = useCallback(async (): Promise<void> => {
        const { status, data } = await patientService.getAll();
        if (status !== 200) throw new Error('Error fetching patients');
        await setPatients(data);
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
        await setAction('create');
        return data;
    }

    const update = async (patient: IPatientWithAddress, id: number) => {
        const { status, data } = await patientService.update(patient, id)
        if (status !== 200) throw new Error('Error updating patient');
        setAction('update');
        console.log('Action do update:', action)
        return data;
    }

    const remove = async (id: number) => {
        const { status } = await patientService.remove(id);
        if (status !== 200) throw new Error('Error deleting patient');
        setWasPatientDeleted(!wasPatientDeleted);
        setAction('delete');
    }

    return {
        patients,
        setPatients,
        getAll,
        getById,
        create,
        update,
        remove,
        wasPatientDeleted,
        setWasPatientDeleted,
        // action, 
        // setAction,
    }
}
