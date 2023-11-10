import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "./../variants";
import { FaGithub } from "react-icons/fa";

const services = [
  {
    name: "Book Catalog",
    description:
      "This project is a simple book catalog that involves complex design and JavaScript logic. It's built with React Redux Toolkit. It is created using raw Tailwind CSS for styling.",
    clientside: "https://simple-book-catalog.vercel.app/",
    serverside: "https://github.com/nisharga/Simple_Book_Catalog",
    link: "Full Code",
  },
  {
    name: "Bistro Boss Cafe",
    description:
      " Welcome to Bistro Boss! Our website features a dynamic interface using React, tailwind, and a host of powerful packages including React Query, Firebase, formik, carousel, skeleton Stripe, and more",
    link: "Full Code",
    clientside: "https://bistro-boss-cafe.netlify.app/",
    serverside: "https://github.com/nisharga/bistro-boss-client",
  },
  {
    name: "PC Builder",
    description:
      "PC Builder is a website where you can build your PC in just one minute. We use Next.js Ant Design and Redux Toolkit for managing our state.",
    clientside: "https://pc-builder-mu-one.vercel.app/",
    serverside: "https://github.com/nisharga/pc-builder",
    link: "Full Code",
  },
];

const Services = () => {
  return (
    <section id="services" className="section">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 bg-whatido
          lg:bg-bottom bg-no-repeat mix-blend-lighten
          mb-22 mt-7"
          >
            <h2 className="h2 text-accent mb-6">What I Do</h2>
            <h3 className="h3 max-w-[455px] mb-16">
              Works with both the front and back ends of a website or
              application. Also provide an end-to-end service.
            </h3>
            <a
              target="_blank"
              href="https://github.com/nisharga"
              rel="noreferrer"
            >
              <button className="btn btn-sm flex items-center">
                See my work <span className="ml-3">{<FaGithub />}</span>
              </button>
            </a>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 mt-7"
          >
            <div>
              {services.map((services, index) => {
                const { name, description, link, clientside, serverside } =
                  services;
                return (
                  <div
                    key={index}
                    className="border-b
                border-white/20
                h-[146px] mb-[38px] flex "
                  >
                    <div className="max-w-[476px]">
                      <h4
                        className="text-[20px] tracking-wider
                    font-primary font-semiblod mb-6"
                      >
                        {name}
                      </h4>
                      <p
                        className="font-secondary
                    leading-tight"
                      >
                        {description}
                      </p>
                    </div>
                    <div className="flex flex-col flex-1 items-end">
                      <a
                        href={clientside}
                        className="btn w-9 h-9
                        mb-[42px] flex justify-center items-center  
                      "
                        target="_blank"
                        rel="noreferrer"
                      >
                        <BsArrowUpRight />
                      </a>
                      <a
                        href={serverside}
                        className="text-gradient text-sm text-right"
                        target="_blank"
                        rel="noreferrer"
                      >
                        {link}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
