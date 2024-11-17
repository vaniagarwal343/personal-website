import React, { useEffect } from 'react';
import styles from './Activity.module.css';

const Activity = () => {
  useEffect(() => {
    if (!window.PIN) {
      const pinterestScript = document.createElement('script');
      pinterestScript.setAttribute('async', '');
      pinterestScript.setAttribute('defer', '');
      pinterestScript.src = '//assets.pinterest.com/js/pinit.js';
      document.body.appendChild(pinterestScript);
    }
  }, []);

  return (
    <section id="activity" className="container">
      <h2>outside of class, i love: </h2>
      <div className={styles.activityGrid}>
        {/* Pinterest Embed */}
        <div className={styles.activityCard}>
          <h3>my pinterest wishlist</h3>
          <a
            data-pin-do="embedBoard"
            data-pin-board-width="300"
            data-pin-scale-height="250"
            data-pin-scale-width="80"
            href="https://www.pinterest.com/vagar343/my-shopping-spree/"
          >
            View my Pinterest board
          </a>
        </div>

        {/* Instagram Embed via SnapWidget */}
        <div className={styles.activityCard}>
          <h3>my instagram</h3>
          <iframe
            src="https://snapwidget.com/embed/1083848"
            className="snapwidget-widget"
            allowTransparency="true"
            frameBorder="0"
            scrolling="no"
            style={{
              border: 'none',
              overflow: 'hidden',
              width: '100%',
              height: '450px',
            }}
            title="Instagram Posts"
          ></iframe>
        </div>

        {/* TikTok Profile Workaround */}
        <div className={styles.activityCard}>
          <h3>my tiktok</h3>
          <a
            href="https://www.tiktok.com/@vaniagarwal558"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', display: 'block', textAlign: 'center' }}
          >
            <img
              src="https://via.placeholder.com/400x300?text=TikTok+Profile"
              alt="TikTok Profile"
              style={{
                borderRadius: '8px',
                maxWidth: '100%',
                marginBottom: '10px',
              }}
            />
            <p style={{ fontWeight: 'bold', color: '#000', fontSize: '1rem' }}>
              Visit My TikTok Profile
            </p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Activity;
