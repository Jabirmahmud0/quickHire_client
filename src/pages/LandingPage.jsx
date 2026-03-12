import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import CompanyStrip from '../components/CompanyStrip';
import CategorySection from '../components/CategorySection';
import CTABanner from '../components/CTABanner';
import FeaturedJobs from '../components/FeaturedJobs';
import LatestJobs from '../components/LatestJobs';
import Footer from '../components/Footer';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <CompanyStrip />
      <CategorySection />
      <CTABanner />
      <FeaturedJobs />
      <LatestJobs />
      <Footer />
    </div>
  );
};

export default LandingPage;
