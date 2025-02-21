import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ServiceCard from "./pages/ServiceCard"; // Adjust path if necessary
import "./styles.css";
import SkinDiseaseDetection from "./pages/SkinDeceaseDetection";
import MedicalChatbot from "./pages/AiDiagnosis";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/services" element={<ServiceCard />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/painmapper" element={<PainMapper />} />
        <Route path="/ai-chatbot" element={<MedicalChatbot />} />
        <Route path="/skin-detection" element={<SkinDiseaseDetection/>} />
      </Routes>
    </Router>
  );
}

export default App;