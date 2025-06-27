import './styles/pages.css'
import {Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import CoursesPage from "./pages/CoursesPage";
import ContactsPage from "./pages/ContactsPage";
import AdmissionsPage from './pages/AdmissionPage';
import ChatbotComponent from './components/Chatbot/ChatComponent';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import DeveloperInfoPopup from './components/DeveloperInfo/DeveloperInfoPopup';
import { useState } from 'react';


const App =()=>{
  const [showPopup, setShowPopup] = useState(true);
  const handleClosePopup = () => {
    setShowPopup(false);
  };
  return(
    <>
    <div>
        {/* Your main application content */}
        <DeveloperInfoPopup
          show={showPopup}
          onClose={handleClosePopup}
          studentName="Uddhav Mahukar Patil"
          studentPhotoUrl="/images/saniya.jpg" // Path to their photo
          uniqueMessage="Learned so much during this OJT! This app showcases my independent coding and deployment skills"
        />
      </div>
    <div className='navbar'>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/home" element={<HomePage/>}/>

          <Route path="/about" element={<AboutPage/>}/>

          <Route path="/courses" element={<CoursesPage/>}/>

          <Route path="/contacts" element={<ContactsPage/>}/>
          
          <Route path="/admissions" element={<AdmissionsPage />} />

        </Routes>
        <ChatbotComponent/>
      </Router>
    </div>
    </>
  )
}
export default App;