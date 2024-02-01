import React from "react";
import { motion } from "framer-motion";
import Links from "../Links/Link";
import "./sideBar.scss";
// i change the side bar
export default function SideBar({ open, setOpen }) {
  const variants = {
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 20,
      },
    },
    closed: {
      x: "100%",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  return (
    <motion.div className="SideBar" animate={open ? "open" : "closed"}>
      <motion.div className="background" variants={variants}>
        <Links />
      </motion.div>
    </motion.div>
  );
}
