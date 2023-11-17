import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[2px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-white text-[17px] max-w-3xl leading-[30px]"
      >
        Hello! I'm a React JS developer based in Kottayam, Kerala, with three
        years of experience and a B.Voc IT degree from CMS College, Kottayam. My
        academic focus on React and related technologies laid the foundation for
        my professional journey. In my career, I've worked on dynamic projects,
        enhancing user interfaces and optimizing application performance. I
        thrive in cross-functional teams, adapting to evolving project
        requirements seamlessly. Check out my portfolio for a glimpse of my
        React JS proficiency in projects showcasing not just technical skills
        but also problem-solving and innovative thinking. I'm dedicated to
        continuous learning, keeping up with industry trends. My skill set
        includes (REACT JS, NODE, MONGOO DB, REDUX ect..), supported by
        certifications and ongoing learning initiatives. My portfolio reflects
        my commitment to creating seamless, visually appealing web experiences.
        As a React JS developer, I'm committed to excellence and excited about
        potential collaborations in the ever-evolving world of web develop
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
