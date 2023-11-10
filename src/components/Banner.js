import { motion } from "framer-motion";
import React from "react";

import { TypeAnimation } from "react-type-animation";
import Image from "../Images/avater.png";
import { fadeIn } from "./../variants";
import Social from "../Template_Parts/Social.js";
import Resume from "../Images/Nisharga_Kabir_Full_Stack_Developer.pdf";
import { Link } from "react-scroll";
const Banner = () => {
  return (
    <section className="section min-h-[78vh] flex items-center" id="home">
      <div className="container mx-auto">
        <div
          className="flex flex-col gap-y-8
         lg:flex-row lg:items-center lg:gap-x-12"
        >
          <div className="flex-1 font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="lg:text-[55px] text-[35px] text-bold 
              leading-[0.8] lg:text[110px]"
            >
              Nisharga <span>Kabir</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[36px] lg:text-[60px]
            font-secondary font-semibold uppercase loading-[1]"
            >
              <h1 className="text-white mr-4 lg:py-6 py-4">I am a</h1>
              <TypeAnimation
                sequence={[
                  "Developer",
                  2000,
                  "Designer",
                  2000,
                  "Entrepreneur",
                  2000,
                ]}
                speed={50}
                className="text-accent"
                repeat={Infinity}
              ></TypeAnimation>
            </motion.div>
            <div className="">
              <motion.p
                className="mb-8 max-w-lg mx-auto lg:mx-0"
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
              >
                I am well-versed in all aspects of React development, from
                setting up the environment to creating components to using React
                with Redux. I am also familiar with TypeScript, Node, Express,
                MongoDB FireBase, JSX And much more. I am also familiar with
                Product Management tools such as JIRA.
              </motion.p>
              <motion.div
                variants={fadeIn("up", 0.6)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.5 }}
                className="flex mx-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
              >
                <a href={Resume}>
                  <button className="btn btn-lg">My Resume</button>
                </a>

                <Link
                  to="contact"
                  activeClass="active"
                  smooth={true}
                  spy={true}
                  className="text-gradient btn-link cursor-pointer"
                >
                  Contact Me
                </Link>
              </motion.div>
              <Social />
            </div>
          </div>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]"
          >
            <img src={Image} alt="avater" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
