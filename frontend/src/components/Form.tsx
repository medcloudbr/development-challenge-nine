// import { useEffect } from "react";
// import { usePatient } from "../hooks";
// import { Button, FormControl, TextField, FormLabel } from "@mui/material";

// export default function Form() {
//     const {
//         patients,
//         getById,
//     } = usePatient();

//     useEffect(() => {
//         getById(1);
//     }, []);

//     return (
//         <form >
//             <FormControl>
//                 <FormLabel>Nome Completo</FormLabel>
//                 <TextField></TextField>
//                 <Button
//                     onClick={() => console.log(patients)}
//                 >Submit</Button>
//             </FormControl>
//         </form>
//     );
// }
import React, { useState, ChangeEvent, FormEvent, ChangeEventHandler } from "react";
import {
    TextField,
    Button,
    Grid,
    Typography,
    Paper,
} from "@mui/material";
import { IPatientWithAddress } from "../interfaces";
import { usePatient } from "../hooks/usePatient";

interface PatientFormProps {
    initialPatient?: IPatientWithAddress;
}

const PatientForm: React.FC<PatientFormProps> = ({ initialPatient }) => {
    const { create, update } = usePatient();
    const [patient, setPatient] = useState<IPatientWithAddress>(
        initialPatient || {
            id: 0,
            fullName: "",
            birthDate: new Date(),
            email: "",
            address: {
                street: "",
                number: 0,
                district: "",
                city: "",
                state: "",
                country: "",
            },
        }
    );
    const [operationResult, setOperationResult] = useState<string | null>(null);

    const handleChange: ChangeEventHandler = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setPatient((prevPatient) => ({
            ...prevPatient,
            [name]: value,
        }));
    };

    const handleAddressChange = (
        event: ChangeEvent<HTMLInputElement & { name: string; value: string }>
      ) => {
        const { name, value } = event.target;
        setPatient((prevPatient) => ({
          ...prevPatient,
          address: {
            ...prevPatient.address,
            [name]: value,
          },
        }));
      };

    const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        if (e.target.valueAsDate === null) return;
        setPatient((prevPatient) => ({
            ...prevPatient,
            [name]: new Date(value),
        }));
    }

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        const isAFieldEmpty = Object.values(patient).some(
            (value) => value === "" || (typeof value === "object" && Object.values(value).some((nestedValue) => nestedValue === ""))
        );

        if (isAFieldEmpty) {
            alert("Preencha todos os campos!");
            return;
        }
        try {
            if (patient.id) {
                await update(patient, patient.id);
                setOperationResult("Dados do paciente atualizados com sucesso!");
            } else {
                await create(patient);
                setOperationResult("Paciente cadastrado com sucesso!");
            }
            setPatient({
                id: 0,
                fullName: "",
                birthDate: new Date(),
                email: "",
                address: {
                    street: "",
                    number: 0,
                    district: "",
                    city: "",
                    state: "",
                    country: "",
                },
            });
        } catch (error) {
            console.error("Erro ao salvar paciente:");
        }
    };

    return (
        <Grid container justifyContent="center">
            <Grid item xs={10} sm={8} md={6}>
                <Paper elevation={3} style={{ padding: 10, marginTop: 10 }}>
                    <Typography variant="h6" align="center" gutterBottom>
                        {patient.id ? "Editar Paciente" : "Novo Paciente"}
                    </Typography>
                    {operationResult && (
                        <Typography
                            variant="body1"
                            align="center"
                            color={operationResult.includes("sucesso") ? "primary" : "error"}
                            gutterBottom
                        >
                            {operationResult}
                        </Typography>
                    )}
                    <form onSubmit={handleSubmit}>
                        <TextField
                            label="Nome Completo"
                            fullWidth
                            margin="normal"
                            variant="outlined"
                            name="fullName"
                            value={patient.fullName}
                            onChange={handleChange}
                            required
                        />
                        <TextField
                            label="Data de Nascimento"
                            fullWidth
                            margin="normal"
                            variant="outlined"
                            type="date"
                            name="birthDate"
                            value={patient.birthDate.toISOString().split("T")[0]}
                            onChange={handleDateChange}
                            required
                        />
                        <TextField
                            label="E-mail"
                            fullWidth
                            margin="normal"
                            variant="outlined"
                            type="email"
                            name="email"
                            value={patient.email}
                            onChange={handleChange}
                            required
                        />
                        <TextField
                            label="Rua"
                            fullWidth
                            margin="normal"
                            variant="outlined"
                            name="street"
                            value={patient.address.street}
                            onChange={handleAddressChange}
                            required
                        />
                        <TextField
                            label="Número"
                            fullWidth
                            margin="normal"
                            variant="outlined"
                            type="number"
                            name="number"
                            value={patient.address.number}
                            onChange={handleAddressChange}
                            required
                        />
                        <TextField
                            label="Bairro"
                            fullWidth
                            margin="normal"
                            variant="outlined"
                            name="district"
                            value={patient.address.district}
                            onChange={handleAddressChange}
                            required
                        />
                        <TextField
                            label="Cidade"
                            fullWidth
                            margin="normal"
                            variant="outlined"
                            name="city"
                            value={patient.address.city}
                            onChange={handleAddressChange}
                            required
                        />
                        <TextField
                            label="Estado"
                            fullWidth
                            margin="normal"
                            variant="outlined"
                            name="state"
                            value={patient.address.state}
                            onChange={handleAddressChange}
                            required
                        />
                        <TextField
                            label="País"
                            fullWidth
                            margin="normal"
                            variant="outlined"
                            name="country"
                            value={patient.address.country}
                            onChange={handleAddressChange}
                            required
                        />
                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                            style={{ marginTop: 20 }}
                        >
                            {patient.id ? "Atualizar" : "Cadastrar"}
                        </Button>
                    </form>
                </Paper>
            </Grid>
        </Grid>
    );
};

export default PatientForm;