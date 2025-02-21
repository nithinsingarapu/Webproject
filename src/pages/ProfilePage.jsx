import React from "react";

const ProfilePage = () => {
  const user = {
    name: "John Doe",
    email: "johndoe@gmail.com",
    height: "5'9\"",
    weight: "70kg",
    bloodGroup: "O+",
    servicesOpted: [
      { service: "Web Development", timeline: "Jan - Mar 2024", painPoint: "Need a portfolio website", sessionDetails: "Weekly meetings on Fridays" },
      { service: "SEO Optimization", timeline: "Apr - Jun 2024", painPoint: "Low search ranking", sessionDetails: "Bi-weekly check-ins" }
    ]
  };

  return (
    <div className="profile-container">
      <div className="login-section">
        <h2>Login with Google</h2>
        <button className="google-login">Sign in with Google</button>
      </div>
      
      <div className="personal-info">
        <h2>Personal Information</h2>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Height:</strong> {user.height}</p>
        <p><strong>Weight:</strong> {user.weight}</p>
        <p><strong>Blood Group:</strong> {user.bloodGroup}</p>
      </div>
      
      <div className="dashboard">
        <h2>Dashboard</h2>
        <table>
          <thead>
            <tr>
              <th>Service</th>
              <th>Timeline</th>
              <th>Pain Point</th>
              <th>Session Details</th>
            </tr>
          </thead>
          <tbody>
            {user.servicesOpted.map((service, index) => (
              <tr key={index}>
                <td>{service.service}</td>
                <td>{service.timeline}</td>
                <td>{service.painPoint}</td>
                <td>{service.sessionDetails}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProfilePage;
