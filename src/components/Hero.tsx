import { useRef } from "react";
import { crater, mountain3, mountain4, planet, spaceman, stars, sun } from "../assets";
import Position from "./Position";
import {
  motion,
  useScroll,
  useTransform,
  MotionValue
} from "framer-motion";

const Hero = () => {
  function useParallax(value: MotionValue<number>, movingpercentage: string) {
      return useTransform(value, [0, 1], ["0%",movingpercentage]);
    }
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({target:ref,offset:["start start","end start"]});
  const imgy = useParallax(scrollYProgress, "100%");
  const texty = useParallax(scrollYProgress, "50%");
  const montain1y = useParallax(scrollYProgress, "20%")
  const montain2y = useParallax(scrollYProgress, "10%")
  return (
    <section className="parallax" ref={ref}>
      <motion.div style={{y:texty}} className='parallax__content absolute  top-[2%] md:top-[5%] lg:top-[10%] w-full mx-auto pl-[5vw]  z-10 transform-none'>
          <h1 className='font-medium text-white text-[20px] xs:text-[30px] sm:text-[20px] md:text-[30px] lg:text-[60px] 2xl:text-[140px] leading-[80px] 2xl:leading-[140px]'>
           Zaw Nay La
          </h1>
          <Position />
      </motion.div>

      <motion.img style={{y:imgy}} className="myspaceman"  src={spaceman} alt="" />
      <img className="parallax__stars" src={stars} alt="" />
      <img className="parallax__planets" src={planet} alt="" />
      <motion.img style={{y:montain1y}} className="parallax__mountain1" src={mountain3} alt="" />
      <motion.img style={{y:montain2y}} className="parallax__mountain2" src={mountain4} alt="" />
      <img className="parallax__crater" src={crater} alt="" />
      <img className="parallax__sun" src={sun} alt="" />

      {/* <SpacemanCanvas scrollContainer={scrollContainer} /> */}
      {/* </div> */}
    </section>
  );
};

export default Hero;
// export default SectionWrapper(Hero, "portfolio");