/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import '../App.css';
import Navbar from './Navbar';

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleBookEdit = () => {
    const pricingSection = document.getElementById('pricing');
    pricingSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="home" id="home">
      <Navbar />

      {/* Animated Background */}
      <div className="background-blur">
        <div className="blur-orb blur-orb-1"></div>
        <div className="blur-orb blur-orb-2"></div>
        <div className="blur-orb blur-orb-3"></div>
      </div>

      {/* Hero Section */}
      <section className={`hero ${isVisible ? 'visible' : ''}`}>
        <div className="hero-container">
          {/* Left Content */}
          <div className="hero-content">
            <div className="content-wrapper">
              <h1 className="hero-title">
                All Type Video Editing
                <span className="gradient-text"> That Converts</span>
              </h1>

              <p className="hero-subtitle">
                Professional reels, cinematic edits, and viral content crafted to elevate your brand.
                From Instagram creators to businesses — I turn raw footage into powerful storytelling.
              </p>

              <div className="hero-buttons">
                <button className="btn btn-primary btn-large">
                  <span>View My Work</span>
                  <span className="btn-icon">🎬</span>
                </button>

                <button className="btn btn-glass btn-large" onClick={handleBookEdit}>
                  <span>Book an Edit</span>
                  <span className="btn-icon">📅</span>
                </button>
              </div>

              <div className="hero-features">
                <div className="feature-item">
                  <div className="feature-check">✓</div>
                  <span>Fast Delivery</span>
                </div>

                <div className="feature-item">
                  <div className="feature-check">✓</div>
                  <span>Unlimited Revisions</span>
                </div>

                <div className="feature-item">
                  <div className="feature-check">✓</div>
                  <span>Premium Templates</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="hero-visual">
            <div className="image-wrapper">
              <img 
                src="logo.png" 
                alt="Lyric Editz Video Editor" 
                className="hero-image"
              />
            </div>

            {/* Glass Cards */}
            
            
           

            {/* Decorative elements */}
            <div className="visual-decoration deco-1"></div>
            <div className="visual-decoration deco-2"></div>
          </div>
        </div>
      </section>

     
    </div>
  );
}