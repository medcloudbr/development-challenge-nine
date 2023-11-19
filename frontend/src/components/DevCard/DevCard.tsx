// import { Grid, Typography } from '@mui/material'
import './DevCard.css'
import devPicture from '../../assets/devPicture2.jpg'
import { Typography } from '@mui/material'
import { Email, GitHub, Instagram, LinkedIn } from '@mui/icons-material'
function DevCard() {
  return (
    <div className='dev-main-div'>
      <img src={devPicture} alt="dev" className='dev-info-card-body-picture' />
      <Typography variant='h4' className='dev-info-card-body-name'>Quem sou eu?</Typography>
      <Typography variant='body1' className='dev-info-card-body-text'>
        Olá! Me chamo Juan Cassius, tenho 26 anos, sou músico e acadêmico de Análise e Desenvolvimento de Sistemas. Faço o curso de desenvolvimento fullstack da Trybe (Node/React) desde janeiro deste ano. Estou em constante aprendizado, não houve uma semana deste ano que não tenha aprendido um conceito, uma ferramenta ou uma metodologia relacionada a programação e meu aprimoramento pessoal. </Typography>
      <Typography variant='h4' className='dev-info-card-body-name'>Quer entrar em contato?</Typography>
      <div className='social-media'>
        <LinkedIn
          onClick={() => window.open('https://www.linkedin.com/in/juan-cassius/', '_blank')}
          style={{ marginRight: '10px', marginLeft: '10px', fontSize: '80px', color: '#009adf' }}
        />
        <GitHub
          onClick={() => window.open('https://github.com/juan-cassius/', '_blank')}
          style={{ marginRight: '10px', marginLeft: '10px', fontSize: '80px', color: '#009adf' }}
        />
        <Instagram
          onClick={() => window.open('https://www.instagram.com/juan.cassius/', '_blank')}
          style={{ marginRight: '10px', marginLeft: '10px', fontSize: '80px', color: '#009adf' }}
        />
        <Email
          onClick={() => window.open('mailto:cassjuan@hotmail.com', '_blank')}
          style={{ marginRight: '10px', marginLeft: '10px', fontSize: '80px', color: '#009adf' }}
        />
      </div>

    </div>
  )
}

export default DevCard