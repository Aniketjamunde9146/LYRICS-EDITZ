import React, { useState } from 'react';

export default function BookingModal({ onClose }) {
  const [bookingData, setBookingData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'reels',
    videoLength: '15-30',
    budget: 'standard',
    deadline: '',
    description: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setBookingSuccess(true);

    setTimeout(() => {
      onClose();
      setBookingSuccess(false);
      setBookingData({
        name: '',
        email: '',
        phone: '',
        projectType: 'reels',
        videoLength: '15-30',
        budget: 'standard',
        deadline: '',
        description: ''
      });
    }, 2000);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content booking-modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>

        {!bookingSuccess ? (
          <>
            <div className="modal-header">
              <h2>Book an Edit</h2>
              <p>Let's create something amazing together</p>
            </div>

            <form onSubmit={handleSubmit} className="booking-form">
              {/* Name */}
              <div className="form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={bookingData.name}
                  onChange={handleInputChange}
                  placeholder="Your name"
                  required
                />
              </div>

              {/* Email */}
              <div className="form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={bookingData.email}
                  onChange={handleInputChange}
                  placeholder="your@email.com"
                  required
                />
              </div>

              {/* Phone */}
              <div className="form-group">
                <label>Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={bookingData.phone}
                  onChange={handleInputChange}
                  placeholder="+1 (555) 000-0000"
                  required
                />
              </div>

              {/* Project Type */}
              <div className="form-group">
                <label>Project Type</label>
                <select
                  name="projectType"
                  value={bookingData.projectType}
                  onChange={handleInputChange}
                  required
                >
                  <option value="reels">Instagram Reels</option>
                  <option value="tiktok">TikTok Videos</option>
                  <option value="youtube">YouTube Shorts</option>
                  <option value="promotional">Promotional Video</option>
                  <option value="cinematic">Cinematic Content</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Video Length */}
              <div className="form-group">
                <label>Video Length</label>
                <select
                  name="videoLength"
                  value={bookingData.videoLength}
                  onChange={handleInputChange}
                  required
                >
                  <option value="15-30">15-30 seconds</option>
                  <option value="30-60">30-60 seconds</option>
                  <option value="1-2">1-2 minutes</option>
                  <option value="2-5">2-5 minutes</option>
                  <option value="5plus">5+ minutes</option>
                </select>
              </div>

              {/* Budget */}
              <div className="form-group">
                <label>Budget</label>
                <select
                  name="budget"
                  value={bookingData.budget}
                  onChange={handleInputChange}
                  required
                >
                  <option value="starter">Starter - $100</option>
                  <option value="standard">Standard - $250</option>
                  <option value="premium">Premium - $500</option>
                  <option value="enterprise">Enterprise - Custom</option>
                </select>
              </div>

              {/* Deadline */}
              <div className="form-group">
                <label>Deadline</label>
                <input
                  type="date"
                  name="deadline"
                  value={bookingData.deadline}
                  onChange={handleInputChange}
                  required
                />
              </div>

              {/* Description */}
              <div className="form-group">
                <label>Project Description</label>
                <textarea
                  name="description"
                  value={bookingData.description}
                  onChange={handleInputChange}
                  placeholder="Tell me about your project, style preferences, and any specific requirements..."
                  rows="4"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                className="btn btn-primary btn-large booking-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="spinner"></span>
                    Sending Request...
                  </>
                ) : (
                  <>
                    <span>Send Booking Request</span>
                    <span className="btn-icon">→</span>
                  </>
                )}
              </button>
            </form>
          </>
        ) : (
          <div className="booking-success">
            <div className="success-icon">✓</div>
            <h2>Booking Request Sent!</h2>
            <p>Thank you for your interest</p>
            <p className="success-subtitle">I'll review your request and get back to you within 24 hours</p>
          </div>
        )}
      </div>
    </div>
  );
}