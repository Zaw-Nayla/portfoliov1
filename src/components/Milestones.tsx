import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import { milestones } from "../data";
import { styles } from "../style";
import { fadeIn, textVariant } from "../utils/motion";
import ImagesCarousel from "./Carousel";
import { SectionWrapper } from "../hoc";

const ProjectCard = ({
  index,
  name,
  description,
  tech,
  images
}:{index:number,name:string,description:string,tech:string[],images:string[]}) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("show");
    }
  }, [controls, inView]);

  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={fadeIn("up", "spring", 0, 0.75)}
      className={`w-full group p-2 md:p-0 mt-[-2px] flex flex-col md:flex-row ${isEven ? "md:flex-row" : "md:flex-row-reverse"} gap-5`}
    >
        <ImagesCarousel images={images}/>
    

      <div className={`w-full md:w-2/5 md:px-6 lg:px-10 flex flex-col justify-center ${isEven ? "text-left md:text-left" : "text-left md:text-right"}`}>
        <h3 className={`${styles.titleText} lg:text-xl xl:text-2xl 2xl:text-3xl`}>{name}</h3>
        <p className='mt-4 text-slate-500 group-hover:text-secondary text-sm sm:text-xs md:text-sm lg:text-md xl:text-lg 2xl:text-xl'>{description} </p>
        {/* <p className='mt-4 text-slate-500'>Tech: <span className="text-secondary">{tech}</span></p> */}
        <div className={`flex flex-wrap ${isEven?"":"md:justify-end"}`}>
                  {tech.map((text, index) => (
                    <div
                      key={index}
                      className="border w-fit border-white/[.2] rounded-lg bg-primary px-2 py-1 mr-2 mt-2  text-secondary  text-sm sm:text-xs md:text-sm lg:text-md"  >
                      {text}
                    </div>   ))}
                </div>
      </div>
    </motion.div>
  );
};

const Milestones = () => {
  return (
    <div className='text-center md:text-left px-5 md:pl-16 md:pr-28 lg:px-28'>
      <motion.div variants={textVariant()} className="flex justify-items-start items-center ">
      <h2 className={`${styles.sectionText}`}><span className='text-slate-500'>02.</span>Things I've worked</h2> <div className="w-[25%] h-[1px] bg-gray-500"></div>
      </motion.div>
      

      <div className='mt-10 flex flex-col gap-10 md:gap-20'>
        {milestones.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Milestones,'milestones');