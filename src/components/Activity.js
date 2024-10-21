import React from 'react';
import '../styles/Activity.css';

const Activity = () => (
  <section id="activity">
    <h2>My Activity</h2>
    <div className="activity-grid">
      <div className="activity-card">
        <h3>Pinterest Boards</h3>
        <iframe src="https://www.pinterest.com/yourprofile/boards/embed/" width="100%" height="300" style={{ border: 'none' }}></iframe>
      </div>
      <div className="activity-card">
        <h3>Spotify Playlist</h3>
        <iframe style={{ borderRadius: '12px' }} src="https://open.spotify.com/embed/playlist/37i9dQZF1EP6YuccBxUcC1" width="100%" height="352" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
    </div>
  </section>
);

export default Activity;
