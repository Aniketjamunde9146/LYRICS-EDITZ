/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        {/* Logo */}
        <div className="logo" onClick={() => window.scrollTo(0, 0)} style={{ cursor: 'pointer' }}>
          <span className="logo-icon">🎬</span>
          <span className="logo-text">Lyric Editz</span>
        </div>

        {/* Desktop Navigation */}
        <div className="nav-links">
          <button onClick={() => scrollToSection('home')} className="nav-link">Home</button>
          <button onClick={() => scrollToSection('my-edits')} className="nav-link">My Works</button>
          <button onClick={() => scrollToSection('pricing')} className="nav-link">Pricing</button>
          <button onClick={() => scrollToSection('footer')} className="nav-link">Contact</button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="mobile-menu-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="mobile-nav-menu">
            <button onClick={() => scrollToSection('home')} className="mobile-nav-link">Home</button>
            <button onClick={() => scrollToSection('my-edits')} className="mobile-nav-link">My Works</button>
            <button onClick={() => scrollToSection('pricing')} className="mobile-nav-link">Pricing</button>
            <button onClick={() => scrollToSection('footer')} className="mobile-nav-link">Contact</button>
            <button className="btn btn-primary btn-small">Sign In</button>
          </div>
        )}

        {/* Desktop Buttons */}
        <div className="nav-buttons">
          <button className="btn btn-glass nav-button">Sign In</button>
          <button className="btn btn-primary nav-button">Get Started</button>
        </div>
      </div>
    </nav>
  );
}