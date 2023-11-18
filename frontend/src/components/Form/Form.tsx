import React, { useState, ChangeEvent, FormEvent, useEffect, ChangeEventHandler } from "react";
import { TextField, Button, Grid, Typography } from "@mui/material";
import { IPatientWithAddress } from "../../interfaces";
import { usePatient } from "../../hooks/usePatient";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";
import './Form.css';

interface PatientFormProps {
    initialPatient?: IPatientWithAddress;
}

const PatientForm: React.FC<PatientFormProps> = () => {
    const { create, update, getById, getAll } = usePatient();
    const navigate = useNavigate();
    const { id } = useParams();
    const [patient, setPatient] = useState<IPatientWithAddress>(
        {
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

    useEffect(() => {
        if (id) {
            const fetchPatient = async () => {
                try {
                    const [patientData] = await getById(parseInt(id));
                    if (patientData.birthDate instanceof Date) {
                        const auxStringDate = patientData.birthDate.toLocaleString("en-US", { timeZone: "America/Sao_Paulo" });
                        const auxDate = new Date(auxStringDate);
                        patientData.birthDate = auxDate;
                    }
                    patientData.birthDate = new Date(patientData.birthDate);
                    setPatient(patientData);
                } catch (error) {
                    console.error("Erro ao buscar paciente:", error);
                }
            };

            fetchPatient();
        }
    }, [id]);


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
        const { value } = e.target;
        const dateValue = new Date(value);
        console.log(patient.birthDate);
        
        if (!isNaN(dateValue.getTime())) {
            setPatient((prevPatient) => ({
                ...prevPatient,
                birthDate: dateValue,
            }));
        }    
        console.log(patient.birthDate);
            
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
                Swal.fire({
                    title: "Paciente atualizado com sucesso!",
                    icon: "success",
                    showConfirmButton: false,
                    timer: 1500,
                });
                getAll();
            } else {
                await create(patient);
                Swal.fire({
                    title: "Paciente criado com sucesso!",
                    icon: "success",
                    showConfirmButton: false,
                    timer: 1500,
                }).then(() => {
                getAll();
                });
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
            navigate("/test");
        } catch (error) {
            console.error("Erro ao salvar paciente:");
            Swal.fire({
                title: "Erro ao salvar paciente!",
                icon: "error",
                showConfirmButton: false,
                timer: 1500,
            });
        }
    };

    return (
        <Grid container justifyContent="center" className="main-form-div">
            <form onSubmit={handleSubmit} className="form-itself">
                <Typography variant="h4" align="center" gutterBottom className='page-title'>
                    {patient.id ? "Editar Paciente" : "Novo Paciente"}
                </Typography>
                <TextField
                    className='form-input'
                    label="Nome Completo"
                    fullWidth
                    variant="outlined"
                    name="fullName"
                    value={patient.fullName}
                    onChange={handleChange}
                    required
                />
                <TextField
                    className='form-input'
                    label="Data de Nascimento"
                    fullWidth
                    variant="outlined"
                    type="date"
                    name="birthDate"
                    value={patient.birthDate instanceof Date ? patient.birthDate.toISOString().split('T')[0] : ''}
                    onChange={handleDateChange}
                    required
                />
                <TextField
                    className='form-input'
                    label="E-mail"
                    fullWidth
                    variant="outlined"
                    type="email"
                    name="email"
                    value={patient.email}
                    onChange={handleChange}
                    required
                />
                <TextField
                    className='form-input'
                    label="Rua"
                    fullWidth
                    variant="outlined"
                    name="street"
                    value={patient.address.street}
                    onChange={handleAddressChange}
                    required
                />
                <TextField
                    className='form-input'
                    label="Número"
                    fullWidth
                    variant="outlined"
                    type="number"
                    name="number"
                    value={patient.address.number}
                    onChange={handleAddressChange}
                    required
                />
                <TextField
                    className='form-input'
                    label="Bairro"
                    fullWidth
                    variant="outlined"
                    name="district"
                    value={patient.address.district}
                    onChange={handleAddressChange}
                    required
                />
                <TextField
                    className='form-input'
                    label="Cidade"
                    fullWidth
                    variant="outlined"
                    name="city"
                    value={patient.address.city}
                    onChange={handleAddressChange}
                    required
                />
                <TextField
                    className='form-input'
                    label="Estado"
                    fullWidth
                    variant="outlined"
                    name="state"
                    value={patient.address.state}
                    onChange={handleAddressChange}
                    required
                />
                <TextField
                    className='form-input'
                    label="País"
                    fullWidth
                    variant="outlined"
                    name="country"
                    value={patient.address.country}
                    onChange={handleAddressChange}
                    required
                />
                <Button
                    variant="contained"
                    type="submit"
                    style={{ background: '#009adf', marginBottom: '5px' }}
                >
                    {patient.id ? "Atualizar" : "Cadastrar"}
                </Button>
            </form>
        </Grid>
    );
};

export default PatientForm;