import { FaUpload, FaCamera, FaRobot, FaUserMd, FaCalendarAlt, FaPaperPlane } from 'react-icons/fa';
import { useState } from 'react';
import axios from "axios";
import "./skindiag.css";


const SkinDiagnosis = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [capturedImage, setCapturedImage] = useState(null);
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleCapture = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCapturedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSendMessage = () => {
    if (userInput.trim() === "") return;

    // Add user message to chat
    const newMessages = [...messages, { text: userInput, sender: "user" }];
    setMessages(newMessages);
    setUserInput("");

    // Simulated AI response
    setTimeout(() => {
      const aiResponse = 
      setMessages([...newMessages, { text: aiResponse, sender: "ai" }]);
    }, 1000);
  };

  return (
    <>
      <header className="page-title">
        <h1>Derma Diagnosis</h1>
      </header>

      <div className="container">
        {/* Left Corner - Upload & Capture Image and Find a Specialist */}
        <div className="left-section">
          <section className="card card-1">
            <h2>Upload or Capture Skin Image</h2>
            <label className="upload-box">
              <FaUpload className="icon" />
              <input type="file" onChange={handleFileChange} />
              <p>Click to upload an image</p>
              {selectedFile && <p>{selectedFile.name}</p>}
            </label>
            <div>
              <label className="upload-box">
                <FaCamera className="icon" />
                <input type="file" accept="image/*" capture="camera" onChange={handleCapture} />
                <p>Take a Photo</p>
              </label>
              {capturedImage && <img src={capturedImage} alt="Captured" className="captured-image" />}
            </div>
          </section>

          <section className="card card-3">
            <h2>Find a Specialist</h2>
            <div className="info-box">
              <FaUserMd className="icon" />
            </div>
            <button className="primary-button">Search Doctors</button>
          </section>
        </div>

        {/* Center - AI Diagnosis with Chatbot */}
        <section className="card card-2">
          <h2>AI Diagnosis</h2>
          <div className="chatbox">
            <div className="chat-messages">
              {messages.map((msg, index) => (
                <div key={index} className={`chat-message ${msg.sender}`}>
                  {msg.text}
                </div>
              ))}
            </div>
            <div className="chat-input">
              <input
                type="text"
                placeholder="your query.."
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
              />
              <button onClick={handleSendMessage}>
                <FaPaperPlane />
              </button>
            </div>
          </div>
        </section>

        {/* Right Corner - Your Sessions */}
        <section className="card card-4">
          <h2>Your Sessions</h2>
          <div className="info-box">
            <FaCalendarAlt className="icon" />
            <p>Track your past diagnoses and doctor appointments.</p>
          </div>
        </section>
      </div>
    </>
  );
};

export default SkinDiagnosis;
