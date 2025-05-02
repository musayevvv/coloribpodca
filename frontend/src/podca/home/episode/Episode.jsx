import React from "react";
import styles from "./Episode.module.css";
import { FiMenu } from "react-icons/fi";

const PodcastEpisode = () => {
  return (
    <div className={styles.heroSection}>
      <div className={styles.heroOverlay}></div>

      <header className={styles.header}>
        <div className={styles.logo}>Podca</div>
        <div className={styles.menuButton}>
          <FiMenu size={28} color="#fff" />
          <a href="/dashboard">DASHBOARD</a>
        </div>
      </header>

      <section className={styles.episodeContent}>
        <h1 className={styles.episodeTitle}>
          Episode 09: How To Create <br /> Web Page Using Bootstrap 4
        </h1>
        <p className={styles.episodeMeta}>By Mike Smith | 16 September 2017 | 1:30:20</p>
        <button className={styles.transcriptButton}>READ THE TRANSCRIPT</button>
      </section>

      <div className={styles.audioPlayerContainer}>
        <audio controls className={styles.audioPlayer}>
          <source src="#" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
    </div>
  );
};

export default PodcastEpisode;
