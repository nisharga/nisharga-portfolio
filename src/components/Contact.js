import React, { useRef } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "./../variants";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_iv3sklk",
        "template_vpk2b97",
        form.current,
        "S-SdcdHAmQ5gaW6Eo"
      )
      .then(
        (result) => {
          if (result.status === 200) {
            alert("Nisharga will follow up with you ASAP!!");
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section className="pt-5 mt-20 lg:section" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <motion.div
            className="flex-1 justify-center
            align-center"
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
          >
            <div className="">
              <h4
                className="text-xl
              uppercase text-accent font-medium
              mb-2 tracking-wide"
              >
                Get In Touch
              </h4>
              <h2
                className="text-[45px] lg:text-[90px]
              leading-none mb-12"
              >
                Let's work <br /> together
              </h2>
              <h4
                className="text-xl
              uppercase text-accent font-medium
              mb-2 tracking-wide"
              >
                Email: <b className="capitalize">Kabirnisharga@gmail.com</b>
              </h4>
              <h4
                className="text-xl
              uppercase text-accent font-medium
              mb-2 tracking-wide"
              >
                Phone: <b className="capitalize">+8801515601742</b>
                <span className="ml-2">(whatsapp also)</span>
              </h4>
              <h4
                className="text-xl
              uppercase text-accent font-medium
              mb-2 tracking-wide"
              >
                Discord: <b className="capitalize">Nisharga#3255</b>
              </h4>
            </div>
          </motion.div>
          <motion.div
            className="flex-1 border
          rounded-2xl flex flex-col
          gap-y-6 pb-24 p-6 items-start"
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
          >
            <form ref={form} onSubmit={sendEmail}>
              <input
                type="text"
                className="bg-transparent
            border-b py-3 outline-none w-full
            placeholder:text-white
            focus:border-accent transition-all"
                placeholder="Your Name"
                name="user_name"
              />
              <input
                type="text"
                className="bg-transparent
            border-b py-3 outline-none w-full
            placeholder:text-white
            focus:border-accent transition-all"
                placeholder="Your Email"
                name="user_email"
              />
              <textarea
                className="bg-transparent
            border-b py-3 outline-none w-full
            placeholder:text-white
            focus:border-accent transition-all
            resize-none mb-12"
                placeholder="Your Message"
                name="message"
              ></textarea>
              <input
                type="submit"
                value="Send message"
                className="btn btn-lg"
              />
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
