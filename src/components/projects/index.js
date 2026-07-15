import './index.scss'
import saveherDashboard from '../../assets/images/SavemMeimg1.jpg';
import saveherAI from '../../assets/images/SavemMeimg2.jpg';
import careerDashboard from '../../assets/images/career AI 1.png';
import careerInsights from '../../assets/images/careerAI2.png';


const Projects = () => {
   

  return (
    <div className="container projects-page">

      <div className="text-zone">

        <h1>Projects</h1>

        <div className="project-card">

  <div className="project-images">
  <img
    src={careerDashboard}
    alt="CareerAI Dashboard"
    className="project-image"
     
  />

  <img
    src={careerInsights}
    alt="CareerAI Insights"
    className="project-image"
   
  />
</div>

  <div className="project-content">

    <h2>CareerAI</h2>

    <p>
      AI-powered career guidance platform that helps users
      analyze resumes, receive personalized career
      recommendations, and generate interview preparation
      resources using Generative AI.
    </p>

    <div className="tech-stack">
      <span>React</span>
      <span>Node.js</span>
      <span>Express</span>
      <span>Prisma</span>
      <span>PostgreSQL</span>
      <span>Gemini AI</span>
      <span>Clerk</span>
      <span>Inngest</span>
    </div>

    <div className="project-links">
       
      <a href="https://sensai-ai-career-coach-nucz.vercel.app/">🚀 Live Demo</a>
      <a href="https://github.com/swati99gup/career-ai">💻 GitHub</a>
    </div>

  </div>

</div>

       <div className="project-card">

 <div className="project-images">
  <img
    src={saveherDashboard}
    alt="Dashboard"
    className="project-image"
    
  />

  <img
    src={saveherAI}
    alt="AI Assistant"
    className="project-image"
  />
</div>

  <div className="project-content">

    <h2>SaveHer</h2>

    <p>
      AI-powered women safety platform providing
      SOS alerts, live location tracking, shake
      detection and emergency assistance.
    </p>

    <div className="tech-stack">
      <span>React</span>
      <span>Node.js</span>
      <span>Express</span>
      <span>MongoDB</span>
      <span>Leaflet</span>
      <span>Gemini AI</span>
    </div>

    <div className="project-links">
      <a href="https://save-her.vercel.app/">🚀 Live Demo</a>
      <a href="https://github.com/swati99gup/SaveHer">💻 GitHub</a>
  
      </div>

  </div>
  

</div>
<section className="achievement-section">

  <h1>Achievements</h1>

  <div className="achievement-grid">

    <div className="achievement-card">
      <h2>8.3</h2>
      <p>CGPA at NIT Jamshedpur</p>
    </div>

    <a
  href="https://leetcode.com/u/swati_gp099/"
  target="_blank"
  rel="noopener noreferrer"
  className="achievement-card"
>
  <h2>500+</h2>
  <p>DSA Problems Solved</p>
  <span className="visit-link">View LeetCode ↗</span>
</a>

    <div className="achievement-card">
      <h2>SIH</h2>
      <p>Smart India Hackathon Internal Finalist</p>
    </div>

    <div className="achievement-card">
      <h2>2+</h2>
      <p>AI & Full Stack Projects</p>
    </div>

  </div>

</section>
<section className="certificate-section">

  <h1>Certificates</h1>

  <div className="certificate-grid">

    <a
      href="https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiIzODE0IiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvOTMwMDcyM185NjI1NjQyMTc2MjA2MTE4Mzk4OS5wbmciLCJ1c2VybmFtZSI6IlN3YXRpIEd1cHRhICJ9&utm_source=shared-certificate&utm_medium=app_lms&utm_campaign=shared-certificate-promotion&referrer=https%3A%2F%2Fcertificates.simplicdn.net%2Fshare%2F9300723_96256421762061183989.png&_branch_match_id=1286359065553133987&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL87MLcjJ1EssKNDLyczL1k8PLPJw9y7Li4pIsq8rSk1LLSrKzEuPTyrKLy9OLbL1AapJTfHMAwDkTvsvPwAAAA%3D%3D"
      target="_blank"
      rel="noopener noreferrer"
      className="certificate-card"
    >
   
      <h3>Generative AI</h3>

      <p>
        Simplilearn SkillUp
      </p>

      <span>View Certificate ↗</span>
    </a>

    <a
      href="https://edu.google.accredible.com/82a0ecda-197f-49fa-80bc-129d69b86344#acc.qog045CZ"
      target="_blank"
      rel="noopener noreferrer"
      className="certificate-card"
    >
      
      <h3>Gemini Certified Student</h3>

      <p>
        Google for Education
      </p>

      <span>View Certificate ↗</span>
    </a>
 <a
      href="https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiIzODE0IiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvOTMwMDcyM185NjI1NjQyMTc2MjA2MTE4Mzk4OS5wbmciLCJ1c2VybmFtZSI6IlN3YXRpIEd1cHRhICJ9&utm_source=shared-certificate&utm_medium=app_lms&utm_campaign=shared-certificate-promotion&referrer
      =https%3A%2F%2Fcertificates.simplicdn.net%2Fshare%2F9300723_96256421762061183989.png&_branch_match_id=1286359065553133987&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL87MLcjJ1EssKNDLyczL1k8PLPJw9y7Li4pIsq8rSk1LLSrKzEuPTyrKLy9OLbL1AapJTfHMAwDkTvsvPwAAAA%3D%3D"
      target="_blank"
      rel="noopener noreferrer"
      className="certificate-card"
    >
      
      <h3>Introduction to the computer networking</h3>

      <p>
       simplilearn SkillUp
      </p>

      <span>View Certificate ↗</span>
    </a>

  
  </div>

</section>
      </div>

    </div>
  )
}

export default Projects