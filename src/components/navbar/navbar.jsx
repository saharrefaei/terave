import React from 'react';
import { motion } from 'framer-motion';
import classNames from 'classnames';
import LOGO from '../../images/logo.png';
import PublicIcon from '@mui/icons-material/Public';
import MenuIcon from '@mui/icons-material/Menu';
import './Navbar.scss'
export default function Navbar({ color, setOpen }) {
  const navbarClassName = classNames('Navbar', {
    'Navbar-top': color,
    'Navbar-down': !color,
  });

  const handleClick = (e) => {
    e.preventDefault();
    setOpen((prev) => !prev);
  };

  return (
    <div className={navbarClassName}>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img src={LOGO} style={{ width: '27%' }} alt="Logo" />
        </motion.span>
        <div className="social">
          <motion.a
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <PublicIcon />
          </motion.a>
          <motion.a
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <button onClick={handleClick} style={{background:'none' , border:'none'}}>
            <MenuIcon style={{ color: 'white' }} />
            </button>
          </motion.a>
        </div>
      </div>
    </div>
  );
}
