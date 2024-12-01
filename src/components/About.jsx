import { motion } from "framer-motion";
import Tilt from "react-tilt";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => (
  <div className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className="w-full green-pink-gradient pb-[2px] pr-[2px] rounded-[23px] shadow-card"
    >
      <Tilt
        options={{
          max: 15,
          scale: 1,
          speed: 50,
        }}
        className="bg-tertiary rounded-[20px] py-10 px-12 min-h-[280px] flex flex-col items-center justify-between"
      >
        <img src={icon} alt={title} className="w-16 object-contain" />
        <h3 className="text-neutral-300 text-[20px] font-bold text-center">
          {title}
        </h3>
      </Tilt>
    </motion.div>
  </div>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} dark:text-neutral-800`}>Introduction</p>
        <h2 className={`${styles.sectionHeadText} dark:text-neutral-800`}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-[#d0cecf] text-[17px] max-w-3xl leading-[30px] dark:text-neutral-800"
      >
       I am a Software Developer with a strong focus on Artificial Intelligence, Data Science, and Deep Learning. 
       My expertise lies in leveraging advanced frameworks like TensorFlow and PyTorch to design and implement scalable, robust AI-driven solutions. 
       I develop machine learning models tailored to complex problem-solving, whether for predictive analytics, image and speech recognition, natural language processing, or reinforcement learning.
      </motion.p>

      <div className="mt-20 flex justify-center flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
