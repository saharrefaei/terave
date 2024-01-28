import "./Navbar.scss";
import { motion , useInView } from "framer-motion";
export default function Navbar({ color }) {
  const navbarClassName = color ? "Navbar-red" : "Navbar-blue";

  return (
    <div className={`Navbar ${navbarClassName}`}>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          evart logo{" "}
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
