import NavBar from '../../components/NavBar/NavBar'
import Form from '../../components/Form/Form'
import './EditPatient.css'


function EditPatient() {
  return (
    <div>
        <NavBar />
        <div className='edit-patient-body'>
            <Form />
        </div>
    </div>
  )
}

export default EditPatient