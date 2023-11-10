import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "./../variants";
import bistroImg from "../Images/bistro_boss.png";
import pcbuilder from "../Images/pc_builder.png";
import bookCatalog from "../Images/book_catalog.png";

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
              href="https://bistro-boss-cafe.netlify.app/"
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
                  src={bistroImg}
                  alt="bistroImg"
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
                  <span className="text-3xl text-white">Bistro Boss</span>
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
              href="https://pc-builder-mu-one.vercel.app/"
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
                  src={pcbuilder}
                  alt="pcbuilder"
                />
                <div
                  className="absolute -bottom-full
              left-12 group-hover:bottom-24 transition-all
              duration-500 z-50"
                >
                  <span className="text-gradient">TypeScript, NextJS</span>
                </div>
                <div
                  className="absolute -bottom-full
              left-12 group-hover:bottom-14 transition-all
              duration-700 z-50"
                >
                  <span className="text-3xl text-white">PC Builder</span>
                </div>
              </div>
            </a>
            <a
              href="https://simple-book-catalog.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="lg:mt-20 md:12"
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
                  src={bookCatalog}
                  alt="Book Catalog"
                />
                <div
                  className="absolute -bottom-full
              left-12 group-hover:bottom-24 transition-all
              duration-500 z-50"
                >
                  <span className="text-gradient">Redux ToolKit</span>
                </div>
                <div
                  className="absolute -bottom-full
              left-12 group-hover:bottom-14 transition-all
              duration-700 z-50"
                >
                  <span className="text-3xl text-white">Book Catalog</span>
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
