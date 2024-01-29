import "./Navbar.scss";
import { motion  } from "framer-motion";
import classNames from 'classnames';
import LOGO from '../../images/logo.png'
export default function Navbar({ color }) {
  const navbarClassName = classNames('Navbar', {
    'Navbar-top': color,
    'Navbar-down': !color,
  });

  return (
    <div className={navbarClassName}>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img src={LOGO} style={{width:'27%'}}/>
        </motion.span>
        <div className="social">
          <motion.a
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <a href="https://www.linkedin.com/in/sahar-refaei-585830214">
              language
            </a>
          </motion.a>
          <motion.a
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <a href="https://github.com/saharrefaei">MENUE</a>
          </motion.a>
        </div>
      </div>
    </div>
  );
}
