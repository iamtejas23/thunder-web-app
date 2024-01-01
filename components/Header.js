// components/Header.js
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Header.module.css';
import git from '../public/assets/github-logo.png';
import logo from '../public/assets/logo.png';

const Header = () => (
    <header className={styles.header}>
      <nav className={styles.navbar}>
      <div className="logo">
      <Image src={logo} alt="GitHub" width={26} height={26} />
        <Link href="/about" className={styles.logo}> Thunder Security</Link>
      </div>
        <div className={styles.desktopMenuListItem}>
        
        </div>

        <a href="https://github.com/iamtejas23/thunder" className={styles.navLink}>
          <Image src={git} alt="GitHub" width={24} height={24} />
        </a>
        {/* Add more links for other pages */}
      </nav>
    </header>
  );

export default Header;
