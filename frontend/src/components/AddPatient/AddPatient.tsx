import { PersonAdd } from '@mui/icons-material'
import { Fab } from '@mui/material'
import { Link } from 'react-router-dom'

function AddPatient() {
    return (
        <div>
            <Link to='/add'>
                <Fab aria-label="add"
                    style={{
                        backgroundColor: '#009adf',
                        position: 'absolute',
                        bottom: '20px',
                        right: '20px',
                        height: '100px',
                        width: '100px',
                    }}
                >
                    <PersonAdd style={{ color: '#f5f5f5' }} />
                </Fab>
            </Link>
        </div >
    )
}

export default AddPatient