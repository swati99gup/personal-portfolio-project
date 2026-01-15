import { useEffect, useState } from 'react'
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'


const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
useEffect(() => {
  const timeoutId = setTimeout(() => {
    setLetterClass('text-animate-hover');
  }, 3000);

  return () => clearTimeout(timeoutId); 
}, []);

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
           I am a motivated B.Tech student in Electrical Engineering at NIT Jamshedpur with a strong interest 
           in frontend and full-stack web development. I have hands-on experience building 
           scalable web applications using the MERN stack, along with a solid foundation in data structures,
            algorithms, and core computer science fundamentals. 
          </p>
          <p align="LEFT">
           I enjoy creating responsive, user-friendly 
            interfaces and solving real-world problems through clean and efficient code.</p>
          <p>
           Alongside my technical skills, I am a disciplined and curious learner who values teamwork, leadership, and continuous growth, balancing academics with projects, hackathons, and extracurricular involvement.

          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
