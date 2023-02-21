import React from "react";
import CountUp from "react-countup";
import { InView, useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "./../variants";
import { FaLink, FaLinkedin } from "react-icons/fa";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        <div
          className="flex flex-col gap-y-10 lg:flex-row lg:items-center
        lg:gap-x-20 lg:gap-y-0 h-screen "
        >
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 bg-aboutimage 
            bg-contain bg-no-repeat h-[640px]
            mix-blend-lighten bg-top"
          ></motion.div>

          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="h2 text-accent">About Me</h2>
            <h3 className="h3 mb-4">
              As an enthusiastic and creative technologist with hands-on skills
            </h3>
            <p className="mb-6">
              I also work as a Freelance Web Developer for various clients which
              has given me a diverse experience on Web Development and has added
              more skills to my arsenal. I am confident that I could provide
              value to you and your customers as a member of your team.
            </p>
            <div class="flex gap-x-6 lg:gap-x-10 mb-12">
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {InView ? <CountUp start={0} end={3} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Years of <br /> Experience{" "}
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {InView ? <CountUp start={0} end={40} duration={4} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Projects <br /> Completed{" "}
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {InView ? <CountUp start={0} end={22} duration={4} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Satisfy <br /> Client{" "}
                </div>
              </div>
            </div>

            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.5 }}
              className="flex mx-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
            >
              <a
                href="https://www.linkedin.com/in/nisharga-kabir/"
                target="_blank"
                rel="noreferrer"
                className="text-gradient btn-link"
              >
                <button className="btn btn-lg flex items-center">
                  <span className="mr-3">Contact me</span> <FaLinkedin />
                </button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
