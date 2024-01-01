// components/FeaturesSection.js
import React from 'react';
import Image from 'next/image';
import styles from '../styles/FeaturesSection.module.css';
import f1 from '../public/assets/breach.png';
import f2 from '../public/assets/password.png';
import f3 from '../public/assets/earth.png';

const FeaturesSection = () => (
  <section className={styles.features}>
    <div className={styles.card}>
      <Image src={f1} alt="Feature 1" width={60} height={60} />
      <h3>Email Breached</h3>
      <p>Stay informed about potential email breaches with the Email Breached.</p>
    </div>
    <div className={styles.card}>
      <Image src={f2} alt="Feature 2" width={60} height={60} />
      <h3>Password Breach</h3>
      <p>Security ensures you are promptly informed of any vulnerabilities.</p>
    </div>
    <div className={styles.card}>
      <Image src={f3} alt="Feature 3" width={60} height={60} />
      <h3>Live Threat Map</h3>
      <p>Visualize the global threat landscape with the Live Threat Map</p>
    </div>
  </section>
);

export default FeaturesSection;
