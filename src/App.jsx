import { useEffect, useState } from 'react';
import './app.scss';
import Navbar from './components/navbar/navbar';

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
      <section><Navbar color={Color} /></section>
      <section>portfolio</section>
      <section>packages</section>
      <section>teams</section>
      <section>informations</section>
    </div>
  );
};

export default App;
