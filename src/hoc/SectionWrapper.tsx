import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motion";

const SectionWrapper = (Component:React.FC, idName:string) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className='px-0 2xl:px-60 py-2 md:py-10 2xl:py-16 max-w-full mx-auto relative z-0'
      >
        <span className='hash-span pb-24 md:pb-[100px]' id={idName}>
          &nbsp;
        </span>
        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;
