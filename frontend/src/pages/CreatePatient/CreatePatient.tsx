import NavBar from '../../components/NavBar/NavBar'
import Form from '../../components/Form/Form'
import './CreatePatient.css'

function CreatePatient() {
  return (
    <div>
        <NavBar />
        <div className='create-patient-body'>
            <Form />
        </div>
    </div>
  )
}

export default CreatePatient