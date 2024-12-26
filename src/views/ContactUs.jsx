import React, { useState } from 'react';
import './ContactUs.css'; // Import CSS for styling

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });

  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation: Ensure Name and Phone fields are filled
    if (!formData.name || !formData.phone) {
      setError('Name and Phone Number are required.');
      return;
    }

    // Clear the error if validation passes
    setError('');

    // Submit the form (for now, just log the data)
    console.log('Form submitted:', formData);
  };

  return (
    <div className="contact-us-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-text">
          <h1>Contact Us</h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="contact-content container">
        <div className="row">
          {/* Meet Us Section */}
          <div className="col-md-6 meet-us">
            <h2>Meet Us</h2>
            <ul className="contact-info">
              <li>
                <i className="fas fa-phone-alt"></i> +8801793******
              </li>
              <li>
                <i className="fas fa-envelope"></i> zawadalmahi@gmail.com
              </li>
              <li>
                <i className="fas fa-map-marker-alt"></i> 141 & 142, Love Road, Tejgaon Industrial Area, Dhaka
              </li>
            </ul>
            {/* Map */}
            <div className="map-container">
              <iframe
                title="location-map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.848191472204!2d90.3994523154313!3d23.75088539459016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b85c2f2e1d3b%3A0x9b9b9b9b9b9b9b9b!2sDhaka%2C%20Bangladesh!5e0!3m2!1sen!2sbd!4v1689345782083!5m2!1sen!2sbd"
                allowFullScreen=""
                loading="lazy"
                className="map-frame"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-md-6 contact-form">
            <h2>Contact</h2>
            <form onSubmit={handleSubmit}>
              {error && <p className="error-message">{error}</p>}

              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="4"
                  placeholder="Write your message"
                  value={formData.message}
                  onChange={handleInputChange}
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Send
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
