import { motion } from "framer-motion";
import { styles } from '../styles';
import { BrainCanvas } from './canvas';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] mx-auto flex flex-row items-start gap-5 max-w-7xl`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-white opacity-60 dark:bg-black"/>
          <div className="w-1 sm:h-80 h-40 opacity-60 bg-gradient-to-b from-white dark:from-black"/>
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} dark:text-neutral-800`}>
            Hi, I'm
            <span className="text-purple-600 dark:text-neutral-900"> Antoine</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100 dark:text-neutral-800`}>
          Software Developer specializing in AI, Data Science, and Deep Learning, with expertise in frameworks like TensorFlow and PyTorch to build scalable AI-driven solutions.

          </p>
        </div>
      </div>
      {/* Clavier d'ordinateur */}
      <BrainCanvas /> 
      <div className="absolute bottom-52 w-full flex justify-center">
      </div>
      <div className="absolute xs:bottom-10 bottom-28 w-full flex justify-center items-center">
        <a href="#about">
        
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-white opacity-60 flex justify-center items-start p-2 dark:border-neutral-900">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                repeatType: "loop",

              }}
              className='w-3 h-3 opacity-60 rounded-full bg-white mb-1 dark:bg-black'
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero;