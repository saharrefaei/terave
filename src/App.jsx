import React, { useEffect, useState } from 'react';
import './app.scss';
import Navbar from './components/navbar/navbar';
import WebsiteIntro from './components/websiteName/websiteintro';
import Portfolio from './components/Portfolio/portfolio';
import SideBar from './components/menu/sidebar/sidebar';
import Packages from './components/packages/packages'
const App = () => {
  const [color, setColor] = useState(true);
  const [open, setOpen] = useState(false); // State to manage the sidebar open/close

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY || document.documentElement.scrollTop;
      const threshold = 100;

      if (scrollPosition > threshold) {
        setColor(false);
      } else {
        setColor(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <Navbar color={color} setOpen={setOpen} /> {/* Pass setOpen to Navbar */}
      <SideBar open={open} setOpen={setOpen} /> {/* Pass open and setOpen to SideBar */}
      <section id="Homepage">
        <WebsiteIntro />
      </section>
      <section id="portfolio">
        <Portfolio />
      </section>
      <section id="packages"><Packages/></section>
      <section id="teams">teams</section>
      <section id="informations">informations</section>
    </div>
  );
};

export default App;
