import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { useEffect, useState } from "react";

const Hero = () => {
  const isMobile = window.innerWidth <= 768;
  const initialText = "Hi, I'm Abhi";
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let index = 0;

    const typingInterval = setInterval(() => {
      if (index <= initialText.length) {
        setDisplayText(initialText.substring(0, index));
        index += 1;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        {/* <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#3bb341]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div> */}

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            <span className="text-[#54af42]">{displayText}</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            React JS <br className="sm:block hidden" />
            Developer
          </p>
        </div>
      </div>

      {!isMobile && <ComputersCanvas />}

      {/* <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-green-500 flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-green-600 mb-1"
            />
          </div>
        </a>
      </div> */}
    </section>
  );
};

export default Hero;
