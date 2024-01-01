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
    </Head>
    <Header />
    <HeroSection />
    <FeaturesSection />
    {/* Add more sections or components as needed */}
    <Footer />
  </div>
);

export default Home;
