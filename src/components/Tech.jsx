import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";

const Tech = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {

    const mediaQuery1 = window.matchMedia("(max-width: 768px)");


    setIsMobile(mediaQuery1.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery1.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery1.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  if (isMobile) {
    return (
      <div>
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText} dark:text-neutral-900`}>Appart from advanced Python, C & C++</p>
          <h2 className={`${styles.sectionHeadText} mb-10 dark:text-neutral-900`}>Technologies.</h2>
        </motion.div>
        <div className="flex flex-row flex-wrap justify-center gap-10">
          {technologies.map((tech) => (
            <img
              className="animate-spin-mid ease-in-out blacky-gradient p-3 rounded-full h-16 w-16"
              src={tech.icon}
              alt={tech.name}
              key={tech.name}
            />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} dark:text-neutral-900`}>Appart from advanced Python, C & C++</p>
          <h2 className={`${styles.sectionHeadText} mb-10 dark:text-neutral-900`}>Technologies.</h2>
        </motion.div>
        <div className="flex flex-row flex-wrap justify-center gap-10">
          {technologies.map((tech) => (
            <div className="w-28 h-28 dark:text-black" key={tech.name}>
              <BallCanvas icon={tech.icon} />
              <h2 className="text-[12px] text-center tracking-wider">{tech.name}</h2>
            </div>
          ))}
        </div>
      </div>
    );
  }
};

export default SectionWrapper(Tech, "");
