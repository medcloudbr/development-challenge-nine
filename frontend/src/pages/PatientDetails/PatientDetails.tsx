import NavBar from '../../components/NavBar/NavBar'
import PatientInfoCard from '../../components/PatientInfoCard/PatientInfoCard'
import './PatientDetails.css'

function PatientDetails() {
    return (
        <div>
            <NavBar />
            <div className='details-body'>
                <PatientInfoCard />
            </div>
        </div>
    )
}

export default PatientDetails