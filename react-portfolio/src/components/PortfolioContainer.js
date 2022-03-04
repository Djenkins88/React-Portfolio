import React, { useState } from 'react';
import NavTabs from '../components/NavTabs';
import Intro from '../components/pages/Intro/Intro';
import About from '../components/pages/About/About';
import Works from '../components/pages/Works/Works';
import Contact from '../components/pages/Contact/Contact';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Intro');

  const renderPage = () => {
    if (currentPage === 'Intro') {
      return <Intro />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Works'){
        return <Works />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}
