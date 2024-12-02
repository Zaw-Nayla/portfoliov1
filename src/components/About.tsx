
import { motion, useAnimation } from 'framer-motion';
import { useInView } from "react-intersection-observer";
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
import { styles } from '../style';
import { useEffect } from 'react';
import { cvpdf, profile } from '../assets';

const About = () => {

    const controls = useAnimation();
    const { ref, inView } = useInView({
        threshold: 0.1,
    });

    useEffect(() => {
        if (inView) {
            controls.start("show");
        }
    }, [controls, inView]);

    const downloadPdf = () => {
        fetch(cvpdf)
          .then((response) => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.blob(); 
          })
          .then((blob) => {
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = 'ZAWNAYLA.pdf'; 
            link.click(); 
            URL.revokeObjectURL(url); 
          })
          .catch((error) => {
            console.error('Error downloading the PDF:', error);
          });
      };


    const frontendlist = ["Angular", "React", "Next.Js", "Typescript"]
    const backendlist = ["Python", "Node.Js", "Prisma", "PostgreSQL"]
    const otherlist = ["AWS", "Vercel", "Docker", "Figma"]

    return (
        <div className='text-center md:text-left px-5 md:pl-16 md:pr-28 lg:px-28 mt-10'>
            <motion.div variants={textVariant()} className='flex items-center '>
                <h2 className={`${styles.sectionText}`}><span className='text-slate-500'>01. </span>About Me</h2> <div className="w-[25%] h-[1px] bg-gray-500"></div>
            </motion.div>

            <motion.div
                ref={ref}
                animate={controls}
                initial="hidden"
                variants={fadeIn("up", "spring", 0, 0.75)}
                className={`w-full p-2 md:mt-10 `} >
                <div className='flex flex-col  md:flex-row-reverse  gap-5 '>
                    <div className='relative flex flex-col w-full items-center md:w-2/5'>
                        <img className="object-contain w-[30%] sm:w-[50%]  md:w-[70%]"
                            key="profile"
                            src={profile}
                        />
                        <div onClick={downloadPdf} className="border border-white/[.2] rounded-lg bg-primary p-2 cursor-pointer ml-8 mt-4 text-secondary text-sm md:text-md xl:text-lg w-fit"  >
                            Download CV
                        </div>
                    </div>
                    <div className={`w-full md:w-3/5  md:pr-6 flex flex-col justify-center  text-left`}>
                        <span className={`${styles.defaultText} mt-2 leading-relaxed `} >
                            Hello! I'm <span className='text-secondary hover:text-tertiary'>Zaw Nay La</span>, a computer science enthusiast with a deep love for technology and problem-solving. So Far, I am  <span className='text-secondary'>a full stack developer with 3+ years</span> of hands-on experience.
                        </span>
                        <p className={`${styles.defaultText} mt-2 leading-relaxed`} >
                            <span className='text-secondary'> My main focus </span> these days  is on establishing a solid foundation in the programming field while
                            expanding my expertise in emerging languages and tools.
                        </p>
                        <p className={`${styles.defaultText} mt-2 leading-relaxed`} >
                            <span className='text-secondary'> My goal </span> is to combine this growing knowledge with practical experience to build a strong, versatile,
                            and future-proof skill set in technology.
                        </p>
                    </div>
                </div>
                <div className='w-full md:w-3/5'>
                    <p className={`${styles.defaultText} text-left mt-5 mb-2 leading-relaxed`} >
                        Technologies I've been working with:
                    </p>
                    <div className='flex justify-between '>
                        <ul className='custom-list'>
                            {/* <span className='font-semibold'>Front End</span> */}
                            {frontendlist.map((each) => <li key={each} className={`${styles.languageText}  rounded-lg bg-primary px-2 py-1 mt-2 `}>{each}</li>)}
                        </ul>
                        <ul className='custom-list' >
                            {/* <span className='font-semibold'>Back End</span> */}
                            {backendlist.map((each) => <li key={each} className={`${styles.languageText}  rounded-lg bg-primary px-2 py-1 mt-2 `}>{each}</li>)}
                        </ul>
                        <ul className='custom-list' >
                            {/* <span className='font-semibold'>Other Services</span> */}
                            {otherlist.map((each) => <li key={each} className={`${styles.languageText}  rounded-lg bg-primary px-2 py-1 mt-2 `}>{each}</li>)}
                        </ul>
                    </div>

                </div>
            </motion.div>
        </div>
    );
};

export default SectionWrapper(About, "aboutme");