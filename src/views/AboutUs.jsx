import React from 'react';
import './AboutUs.css';
//about us portion
const AboutUs = () => {
  const profiles = [
    { id: '20220104120', name: 'Zawad Al Mahi', image: 'https://via.placeholder.com/150' },
    { id: '20220104123', name: 'Abdullah Jubair', image: 'https://via.placeholder.com/150' },
    { id: '20220104124', name: 'Hasibur Rahman Srijon', image: 'https://via.placeholder.com/150' },
    { id: '20210204077', name: 'Rakibul Islam', image: 'https://via.placeholder.com/150' },
  ];

  return (
    <section className="about-us-container">
      <div className="about-us-header">
        <h1>About Us</h1>
      </div>
      <div className="about-us-content">
        <div className="about-us-section">
          <h2>Who We Are</h2>
          <p>
          We are a passionate group of cat lovers dedicated to rescuing and rehoming cats in need. Our organization works tirelessly to provide a safe haven for abandoned and stray cats, offering them medical care, nourishment, and the love they deserve. We believe that every cat deserves a loving home, and our mission is to make that a reality.
          </p>
        </div>
        <div className="about-us-section">
          <h2>Our Mission</h2>
          <p>
          Our mission is to provide shelter and care for homeless cats, while also educating the public about responsible pet ownership and the importance of adopting rather than purchasing. We aim to reduce the number of stray and abandoned cats by offering adoption services that match cats with loving families. Through community outreach and collaboration with veterinarians, we strive to ensure every cat finds its forever home.
          </p>
        </div>
        <div className="about-us-section">
          <h2>Our Vision</h2>
          <p>
          Our vision is a world where every cat has a loving and permanent home, and where animal shelters are no longer needed. We envision a society where adopting a pet is the norm, and where every cat receives the care and attention it needs to live a happy, healthy life. Through our efforts, we aim to inspire a compassionate community that prioritizes animal welfare and works together to make this vision a reality.
          </p>
        </div>
      </div>
      <div className="about-us-images">
        {profiles.map((profile) => (
          <div className="about-us-profile" key={profile.id}>
            <img src={profile.image} alt={profile.name} />
            <h3>{profile.name}</h3>
            <p>ID: {profile.id}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutUs;
