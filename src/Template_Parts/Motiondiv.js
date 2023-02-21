import React from "react";

const Motiondiv = ({ children }) => {
  return (
    <motion.div
      variants={fadeIn("up", 0.6)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.5 }}
      className="flex mx-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
    >
      {children}
    </motion.div>
  );
};

export default Motiondiv;
