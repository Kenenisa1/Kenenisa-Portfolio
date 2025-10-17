import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant, staggerContainer } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.2, 0.75)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Tilt className="w-full max-w-[280px]">
        <motion.div
          className="w-full p-[1px] rounded-[20px] violet-gradient shadow-card"
          whileHover={{
            boxShadow: "0 0 25px rgba(139, 92, 246, 0.3)"
          }}
        >
          <div
            options={{
              max: 45,
              scale: 1,
              speed: 450,
            }}
            className="bg-tertiary rounded-[20px] py-8 px-6 min-h-[300px] flex justify-center items-center flex-col gap-6 transition-all duration-300 hover:bg-[#2a2252]"
          >
            <motion.img 
              src={icon} 
              alt={title} 
              className="w-20 h-20 object-contain"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            />
            <h3 className="text-white text-[22px] font-bold text-center leading-tight">
              {title}
            </h3>
          </div>
        </motion.div>
      </Tilt>
    </motion.div>
  );
};

const About = () => {
  return (
    <motion.div 
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="w-full min-h-screen flex items-center justify-center py-20 px-4"
      id="about"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Header Section */}
        <motion.div 
          variants={textVariant()} 
          className="mb-16"
        >
          <motion.p 
            variants={fadeIn("right", "spring", 0.1, 1)}
            className={styles.sectionSubText}
          >
            Introduction
          </motion.p>
          <motion.h2 
            variants={fadeIn("right", "spring", 0.2, 1)}
            className={styles.sectionHeadText}
          >
            Overview
          </motion.h2>
        </motion.div>

        {/* Description */}
        <motion.div
          variants={fadeIn("up", "spring", 0.3, 1)}
          className="flex justify-center"
        >
          <p className="text-secondary text-[18px] max-w-4xl leading-[32px] text-center">
            I'm a skilled software developer with experience in JavaScript and
            frameworks like React, Node.js. I'm a quick learner and collaborate
            closely with clients to create efficient, scalable, and user-friendly
            solutions that solve real-world problems. Let's work together to bring
            your ideas to life!
          </p>
        </motion.div>

        {/* Services Cards */}
        <motion.div 
          variants={staggerContainer()}
          className="mt-20 flex flex-wrap justify-center gap-8"
        >
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;