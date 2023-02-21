import React from "react";
import { FaGithub, FaLinkedin, FaStackOverflow } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "./../variants";
const Social = () => {
  return (
    <motion.div
      variants={fadeIn("left", 0.3)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.3 }}
      className="flex text-[-20px] gap-x-6 max-w-max  lg:mx-0"
    >
      <a href="https://github.com/nisharga" target="_blank" rel="noreferrer">
        <FaGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/nisharga-kabir/"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://stackoverflow.com/users/11161196/nisharga"
        target="_blank"
        rel="noreferrer"
      >
        <FaStackOverflow />
      </a>
    </motion.div>
  );
};

export default Social;
