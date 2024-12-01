import { SectionWrapper } from "../hoc";
import { AiFillLinkedin, AiFillGithub, AiFillExperiment  } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="text-center flex w-full flex-col items-center gap-6 dark:text-neutral-900">
      <div className="w-full flex items-center justify-center gap-2">
        Antoine Martinet
      </div>
      <div className="w-full flex justify-center gap-8">
        <AiFillLinkedin
          size={30}
          className="cursor-pointer hover:opacity-80"
          onClick={() => window.open("https://www.linkedin.com/in/antoine-martinet-6522a324b/")}
          />
        <AiFillGithub
          size={30}
          className="cursor-pointer hover:opacity-80"
          onClick={() => window.open("https://github.com/Infinityy1001")}
        />
        <AiFillExperiment 
          size = {30}
          className= "cursor-pointer hover:opacity-80"
          onClick={() => window.open("https://infinityy1001.github.io/CMD/src/index.html")}
        />

      </div>
    </div>
  )
}

export default SectionWrapper(Footer, '');
