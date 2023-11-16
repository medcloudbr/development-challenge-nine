import './Home.css'
import medcloudLogo from '../assets/medcloud.svg';
import menuButton from '../assets/menu.svg'

function Home() {
  return (
    <>
      <nav>
        <button>
            <img src={menuButton} alt='menu-button' />
        </button>
        <img src={medcloudLogo} alt='logo-medcloud' className='main-logo' />
      </nav>
      <main>
      </main>
    </>
  )
}

export default Home