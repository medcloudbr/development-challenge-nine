import DevCard from "../../components/DevCard/DevCard"
import NavBar from "../../components/NavBar/NavBar"
import './About.css'

function About() {
  return (
    <div>
      <NavBar />
      <div className="about-main-div">
        <DevCard />
      </div>
    </div>
  )
}

export default About