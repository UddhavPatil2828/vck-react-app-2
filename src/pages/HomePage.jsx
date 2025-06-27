import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Link } from "react-router-dom";
const HomePage =()=>{
  return(
    <div >
     <Header/>
     <div className="content-wrapper">
    <div className="hero-wrapper">
  <div className="hero-section">
    <div className="hero-text">
      <h1>Welcome to Vivekanand College!</h1>
      <h4>Your journey to excellence starts here.</h4>
    <div className="admmison-home">
  <Link to="/admissions" className="btn">
  Apply Now!
</Link>
</div>
</div>
  </div>
</div>

     <div> 
     <p> Vivekanand College is a premier educational institution dedicated to fostering academic excellence, innovation, and holistic development. Established in 1980, we have proudly served generations of students, empowering them to achieve their full potential.

At Vivekanand College, we believe in a vibrant learning environment that extends beyond textbooks. Our state-of-the-art facilities, experienced faculty, and diverse student community create a unique ecosystem where curiosity thrives and future leaders are shaped.
     </p>
     <h2> Why Choose Vivekanand College?</h2>
     <hr></hr>
     <ul>
<li>Legacy of Excellence: Decades of commitment to quality education.</li>
<li>Experienced Faculty: Learn from renowned experts and passionate educators.</li>
<li>Modern Facilities: Well-equipped labs, expansive library, and comfortable campus.</li>
<li>Holistic Development: Focus on co-curricular activities, sports, and community service.</li>
<li>Strong Placements: Excellent career opportunities with leading companies.</li>
     </ul>
     <h2>Campus Life & Facilities</h2>
     <div id="stud">
  <div className="stud-image">
    <img src="images/Student_info.jpeg" alt="Student Info" />
  </div>
  <div className="stud-image">
    <img src="images/campus-image.jpg" alt="Campus" />
  </div>
  <p>Explore our vibrant campus and state-of-the-art facilities designed to enhance your learning experience and personal growth.</p>
</div>
<div className="home-text">
  <p >Ready to explore our courses?</p>
  <Link to="/courses" className="btn">
  View Course Details
</Link>

</div>
    </div>
    </div>
    <Footer/>
    </div>
  )
}
export default HomePage;