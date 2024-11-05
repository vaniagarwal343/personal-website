import React, { useEffect } from 'react';
import styles from './Activity.module.css';

const Activity = () => {
  useEffect(() => {
    // Ensure Pinterest's pinit.js script is loaded
    if (!window.PIN) {
      const script = document.createElement("script");
      script.setAttribute("async", "");
      script.setAttribute("defer", "");
      script.src = "//assets.pinterest.com/js/pinit.js";
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section id="activity" className="container">
      <h2>outside of class, i love: </h2>
      <div className={styles.activityGrid}>
        <div className={styles.activityCard}>
          <h3>my current wishlist</h3>
          <a
            data-pin-do="embedBoard"
            data-pin-board-width="400"
            data-pin-scale-height="300"
            data-pin-scale-width="80"
            href="https://www.pinterest.com/vagar343/my-shopping-spree/"
            className={styles.srOnly}
          >
            View my Pinterest board
          </a>
        </div>
        <div className={styles.activityCard}>
          <h3>my current daylist</h3>
          <iframe
            src="https://open.spotify.com/embed/playlist/37i9dQZF1EP6YuccBxUcC1"
            title="Spotify Playlist"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            style={{ width: '400', height: '300', border: 'none' }}
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Activity;
