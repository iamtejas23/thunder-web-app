// pages/index.js
import Head from 'next/head';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import FeaturesSection from '../components/FeaturesSection';

const Home = () => (
  <div>
    <Head>
    <title>Thunder Security</title>
    <meta name="title" content="Thunder Security"/>
    <meta name="description" content="Open-source Cybersecurity Project, Be Aware With Threats. The app features multiple screens to keep you informed and educated about the state of your online security."/>
    <meta name="keywords" content="thunder, security, ThunderSecurity, Thunder, thunder storm, thunder vpn, cyber security, cyber, cyber hunter, password breaches, breaches, map, opensource"/>
    <meta name="robots" content="index, follow"/>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <meta name="language" content="English"/>
    <meta name="revisit-after" content="1 days"/>

    <meta name="google-site-verification" content="LCYVaxVs9EabVUupIoOm14lpD2ybI8E8PzB-5W_JUUQ" />
    </Head>
    <Header />
    <HeroSection />
    <FeaturesSection />
    {/* Add more sections or components as needed */}
    <Footer />
  </div>
);

export default Home;
