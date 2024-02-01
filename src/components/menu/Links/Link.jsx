import React from 'react';
import { motion } from 'framer-motion';

export default function Links() {
  const variants = {
    open: {
      transition: {
        staggerChildren: 0.14,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };
  const itemvariants = {
    open: {
      y: 0,
    },
    closed: {
      y: 50,
      opacity: 0,
    },
  };
  const Items = ["Homepage", "portfolio", "packages", "contacts"];
  return (
    <motion.div className="links" variants={variants}>
      {Items.map((item) => (
        <motion.a href={`#${item}`} key={item} variants={itemvariants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
}
