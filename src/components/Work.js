import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "./../variants";
import img1 from "../Images/glu-gun.png";
import img2 from "../Images/pure-power.png";
import img3 from "../Images/convension-center.png";
import { FaGithub } from "react-icons/fa";
const Work = () => {
  return (
    <div className="section mt-12 lg:pt-40 " id="work">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0"
          >
            <div>
              <h2
                className="h2 leading-tight
              text-accent"
              >
                MY latest <br /> Work
              </h2>
              <p className="max-w-sm mb-8">
                Self-motivated team player with MERN Stack and Firebase
                expertise, seeking a position as a Junior Web Developer where I
                can apply my advanced knowledge of web development with my
                leadership abilities to meet company needs and exceed their
                expectations.
              </p>
              {/* <button className="btn btn-sm">View All Projects</button> */}
              <a
                target="_blank"
                href="https://github.com/nisharga"
                rel="noreferrer"
              >
                <button className="btn btn-sm flex items-center">
                  View All Projects <span className="ml-3">{<FaGithub />}</span>
                </button>
              </a>
            </div>
            <a
              href="https://pure-power.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <div
                className="group relative overflow-hidden
            border-2 border-white/50 rounded-xl"
              >
                <div
                  className="group-hover:bg-black/70 w-full
              h-full absolute
               z-40 transition-all duration-300"
                ></div>
                <img
                  className="group-hover: scale-125
              transition-all duration-500"
                  src={img2}
                  alt="img2"
                />
                <div
                  className="absolute -bottom-full
              left-12 group-hover:bottom-24 transition-all
              duration-500 z-50"
                >
                  <span className="text-gradient">Full Stack</span>
                </div>
                <div
                  className="absolute -bottom-full
              left-12 group-hover:bottom-14 transition-all
              duration-700 z-50"
                >
                  <span className="text-3xl text-white">Pure-Power</span>
                </div>
              </div>
            </a>
          </motion.div>
          <motion.div
            variants={fadeIn("right", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-10 mt-4"
          >
            <a
              href="https://glue-gun.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <div
                className="group relative overflow-hidden
            border-2 border-white/50 rounded-xl"
              >
                <div
                  className="group-hover:bg-black/70 w-full
              h-full absolute
               z-40 transition-all duration-300"
                ></div>
                <img
                  className="group-hover: scale-125
              transition-all duration-500"
                  src={img1}
                  alt="img1"
                />
                <div
                  className="absolute -bottom-full
              left-12 group-hover:bottom-24 transition-all
              duration-500 z-50"
                >
                  <span className="text-gradient">Full Stack</span>
                </div>
                <div
                  className="absolute -bottom-full
              left-12 group-hover:bottom-14 transition-all
              duration-700 z-50"
                >
                  <span className="text-3xl text-white">Glue-Gun</span>
                </div>
              </div>
            </a>
            <a
              href="https://kabir-convention-center.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <div
                className="group relative overflow-hidden
            border-2 border-white/50 rounded-xl mt-4"
              >
                <div
                  className="group-hover:bg-black/70 w-full
              h-full absolute
               z-40 transition-all duration-300"
                ></div>
                <img
                  className="group-hover: scale-125
              transition-all duration-500"
                  src={img3}
                  alt="img3"
                />
                <div
                  className="absolute -bottom-full
              left-12 group-hover:bottom-24 transition-all
              duration-500 z-50"
                >
                  <span className="text-gradient">FrontEnd Design</span>
                </div>
                <div
                  className="absolute -bottom-full
              left-12 group-hover:bottom-14 transition-all
              duration-700 z-50"
                >
                  <span className="text-3xl text-white">Convention-Center</span>
                </div>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Work;
