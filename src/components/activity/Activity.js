import React, { useEffect } from 'react';
import styles from './Activity.module.css';

const Activity = () => {
  useEffect(() => {
    // Ensure Pinterest and Instagram embed scripts are loaded
    if (!window.PIN) {
      const pinterestScript = document.createElement('script');
      pinterestScript.setAttribute('async', '');
      pinterestScript.setAttribute('defer', '');
      pinterestScript.src = '//assets.pinterest.com/js/pinit.js';
      document.body.appendChild(pinterestScript);
    }

    if (!window.instgrm) {
      const instagramScript = document.createElement('script');
      instagramScript.async = true;
      instagramScript.src = '//www.instagram.com/embed.js';
      document.body.appendChild(instagramScript);
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
            data-pin-board-width="400"
            data-pin-scale-height="300"
            data-pin-scale-width="80"
            href="https://www.pinterest.com/vagar343/my-shopping-spree/"
            className={styles.srOnly}
          >
            View my Pinterest board
          </a>
        </div>

        {/* Instagram Embed */}
        <div className={styles.activityCard}>
          <h3>my instagram</h3>
          <blockquote
            className="instagram-media"
            data-instgrm-permalink="https://www.instagram.com/vaniagrwall/?utm_source=ig_embed&amp;utm_campaign=loading"
            data-instgrm-version="14"
            style={{
              background: '#FFF',
              border: 0,
              borderRadius: '3px',
              boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
              margin: '1px',
              maxWidth: '540px',
              minWidth: '326px',
              padding: 0,
              width: '99.375%',
            }}
          >
            <div style={{ padding: '16px' }}>
              <a
                href="https://www.instagram.com/vaniagrwall/?utm_source=ig_embed&amp;utm_campaign=loading"
                style={{ textAlign: 'center', textDecoration: 'none', width: '100%' }}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Instagram Profile
              </a>
            </div>
          </blockquote>
        </div>

        {/* TikTok Embed */}
        <div className={styles.activityCard}>
          <h3>my tiktok</h3>
          <iframe
            src="https://www.tiktok.com/embed/vaniagarwal558"
            title="TikTok Embed"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            style={{
              width: '100%',
              height: '400px',
              borderRadius: '8px',
              border: 'none',
              overflow: 'hidden',
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Activity;
