import React, { useState } from 'react';
import '../App.css';

export default function MyEdits() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredId, setHoveredId] = useState(null);

  const works = [
    {
      id: 1,
      title: 'Instagram Reels Campaign',
      category: 'reels',
      image: 'https://via.placeholder.com/400x500?text=Instagram+Reels',
      duration: '0:15 - 1:00',
      platform: 'Instagram',
    },
    {
      id: 2,
      title: 'Cinematic Product Promo',
      category: 'cinematic',
      image: 'https://via.placeholder.com/400x500?text=Product+Promo',
      duration: '0:30',
      platform: 'YouTube',
    },
    {
      id: 3,
      title: 'Viral TikTok Transitions',
      category: 'transitions',
      image: 'https://via.placeholder.com/400x500?text=TikTok+Transitions',
      duration: '0:10 - 0:30',
      platform: 'TikTok',
    },
    {
      id: 4,
      title: 'Corporate Brand Video',
      category: 'corporate',
      image: 'https://via.placeholder.com/400x500?text=Brand+Video',
      duration: '2:00',
      platform: 'Website',
    },
    {
      id: 5,
      title: 'Music Video Production',
      category: 'cinematic',
      image: 'https://via.placeholder.com/400x500?text=Music+Video',
      duration: '3:45',
      platform: 'YouTube',
    },
    {
      id: 6,
      title: 'Gaming Highlight Reel',
      category: 'transitions',
      image: 'https://via.placeholder.com/400x500?text=Gaming+Reel',
      duration: '1:30',
      platform: 'Twitch',
    },
  ];

  const categories = [
    { id: 'all', label: 'All Works' },
    { id: 'reels', label: 'Reels & Shorts' },
    { id: 'cinematic', label: 'Cinematic' },
    { id: 'transitions', label: 'Transitions' },
    { id: 'corporate', label: 'Corporate' },
  ];

  const filteredWorks = activeCategory === 'all' 
    ? works 
    : works.filter(work => work.category === activeCategory);

  return (
    <section className="my-edits" id="my-edits">
      <div className="edits-container">
        <div className="edits-header">
          <h2 className="edits-title">My Works</h2>
          <p className="edits-subtitle">
            Explore our portfolio of stunning video edits crafted for creators and brands worldwide
          </p>
        </div>

        <div className="category-filter">
          {categories.map(category => (
            <button
              key={category.id}
              className={`filter-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="portfolio-grid">
          {filteredWorks.map((work, index) => (
            <div
              key={work.id}
              className={`portfolio-card ${hoveredId === work.id ? 'hovered' : ''}`}
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s backwards`,
              }}
              onMouseEnter={() => setHoveredId(work.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="card-image-container">
                <img
                  src={work.image}
                  alt={work.title}
                  className="card-image"
                />
                
                <div className="play-overlay">
                  <div className="play-button">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>

                <div className="image-gradient"></div>

                <div className="platform-badge">{work.platform}</div>
              </div>

              <div className="card-content">
                <h3 className="card-title">{work.title}</h3>
                <div className="card-meta">
                  <span className="duration">⏱ {work.duration}</span>
                  <span className="category-tag">{work.category}</span>
                </div>
              </div>

              <div className="card-hover-info">
                <p className="hover-text">Click to view full video</p>
              </div>
            </div>
          ))}
        </div>

        <div className="view-more-container">
          <button className="btn btn-primary btn-large view-more-btn">
            <span>View More Works</span>
            <span className="btn-icon">🎬</span>
          </button>
        </div>
      </div>
    </section>
  );
}