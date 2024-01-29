import { useEffect, useState } from 'react';
import './app.scss';
import Navbar from './components/navbar/navbar';
import WebsiteIntro from './components/websiteName/websiteintro'
import Portfolio from './components/Portfolio/portfolio';
const App = () => {
  const [Color, setColor] = useState(true);

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
       <Navbar color={Color} />
      <section id="Home">
    
      <WebsiteIntro />
      </section>
      <section id="portfolio">
      <Portfolio/>
      </section>
      <section id="packages">
      packages
      </section>
      <section id="teams">
      teams
      </section>
      <section id="informations">
      informations
      </section>
    </div>
  );
};

export default App;
