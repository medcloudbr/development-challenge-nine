import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Typography, Grid, Button } from '@mui/material';
import Swal from 'sweetalert2';
import { IPatientWithAddress } from '../../interfaces';
import { usePatient } from '../../hooks';
import './PatientInfoCard.css';
import { EditRounded, PersonRemove, PersonRounded } from '@mui/icons-material';
import { PatientContext } from '../../context/PatientContext';

function PatientInfoCard() {
    const { id } = useParams();
    const { getById } = usePatient();
    const patientContext = useContext(PatientContext);
    const navigate = useNavigate();
    const [patient, setPatient] = useState<IPatientWithAddress>({
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

    useEffect(() => {
        const fetchPatient = async () => {
            try {
                const [patientData] = await getById(parseInt(id ? id : '0'));
                patientData.birthDate = new Date(patientData.birthDate);
                setPatient(patientData);
            } catch (error) {
                console.error("Erro ao recuperar paciente:", error);
                Swal.fire({
                    title: "Erro ao recuperar paciente!",
                    icon: "error",
                    showConfirmButton: false,
                    timer: 1500,
                });
            }
        };
        fetchPatient();
    }, [id]);

    const handleDeleteClick = async () => {
        const result = await Swal.fire({
            title: 'Remover paciente',
            text: `Deseja remover o paciente ${patient.fullName}?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sim',
            cancelButtonText: 'Não',
            confirmButtonColor: '#009adf',
            cancelButtonColor: '#f44336',
        });

        if (result.isConfirmed) {
            try {
                await patientContext?.remove(patient.id);
                navigate('/');

                Swal.fire({
                    title: 'Removido!',
                    text: `O paciente ${patient.fullName} foi removido com sucesso!`,
                    icon: 'success',
                    showConfirmButton: false,
                    timer: 1500,
                });
            } catch (error) {
                Swal.fire({
                    title: 'Erro!',
                    text: `Houve um erro ao remover o paciente ${patient.fullName}.`,
                    icon: 'error',
                    showConfirmButton: false,
                    timer: 1500,
                });
                navigate('/')
                patientContext?.getAll();
            }
        }
    };

    return (
        <Grid container direction="column" spacing={2} className='main-Info'>
            <Grid item className='patient-info-card-header'>
                <Typography variant="h4">Informações do paciente</Typography>
            </Grid>
            <Grid item className='patient-info-card-body'>
                <div className='patient-info-card-body-picture'>
                    <PersonRounded
                        style={{
                            fontSize: '200px',
                            color: '#009adf',
                            backgroundColor: 'white',
                            borderRadius: '15px',
                            marginTop: '2rem',
                            marginBottom: '2rem',
                        }} />
                </div>
                <div className='patient-info-card-body-info'>
                    <div className='patient-info-card-body-info-content'>
                        <div className='patient-info-card-body-info-content-item'>
                            <Typography variant="h6">Nome:</Typography>
                            <Typography>{patient.fullName}</Typography>
                        </div>
                        <div className='patient-info-card-body-info-content-item'>
                            <Typography variant="h6">Data de nascimento:</Typography>
                            <Typography>{patient.birthDate.toLocaleDateString()}</Typography>
                        </div>
                        <div className='patient-info-card-body-info-content-item'>
                            <Typography variant="h6">Email:</Typography>
                            <Typography>{patient.email}</Typography>
                        </div>
                        <div className='patient-info-card-body-info-content-item'>
                            <Typography variant="h6">Endereço:</Typography>
                            <Typography>
                                {`${patient.address.street}, ${patient.address.number} - ${patient.address.district}, ${patient.address.city} - ${patient.address.state}, ${patient.address.country}`}
                            </Typography>
                        </div>
                        <div className='patient-buttons-div'>
                            <Button onClick={() => { navigate(`/edit/${patient.id}`) }} className='edit-button'                   >
                                Editar
                                <EditRounded style={{ marginLeft: '10px' }} />
                            </Button>
                            <Button onClick={() => { handleDeleteClick() }} className='delete-button'
                            >
                                Remover
                                <PersonRemove style={{ marginLeft: '10px' }} />
                            </Button>
                        </div>
                    </div>
                </div>
            </Grid>
        </Grid>
    );
}

export default PatientInfoCard;
