import { motion } from "framer-motion";
import { useState } from "react";
import { experiences } from "../data";
import { SectionWrapper } from "../hoc";
import { styles } from "../style";
import { textVariant } from "../utils/motion";
const ExperienceCard = ({ experience, isActive, onClick }: { experience: any, isActive: boolean,  onClick: () => void }) => {
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer group px-5 md:pb-5 max-w-xl relative sm:text-left mb-6 text-center`} >
      {(isActive) && (
        <div className=" absolute left-0 top-0 bottom-4 w-1 rounded-sm bg-tertiary sm:block hidden"></div>
      )}
      <p className={`text-lg lg:text-xl xl:text-2xl group-hover:text-secondary  sm:pl-8 ${isActive ? "text-secondary" : "text-slate-500" }`} >
        {experience.title}
      </p>

      <p className={`sm:pl-8 text-sm sm:text-xs md:text-sm lg:text-md xl:text-lg 2xl:text-xl group-hover:text-secondary ${isActive ? "text-secondary" : "text-slate-500"}`}>
        {experience.date}
      </p>
      {/* <p
        className={` mb-5 text-sm sm:text-xs md:text-sm lg:text-md xl:text-lg 2xl:text-xl sm:font-medium sm:pl-8 ${isActive ? "text-white" : "text-slate-600"
          }`}
      >
        {experience.company_name}
      </p> */}
    </div>
  );
};

const ExperienceDetails = ({ experience }: { experience: any }) => {
  return (
    <div className="">
      <ul className="max-w-7xl md:w-[50vw] list-none space-y-8 border-4  rounded-xl lg:rounded-3xl p-6">
        {experience.details.map((detail: any, index: number) => (
          <li
            key={`experience-detail-${index}`}
            className="text-slate-500 hover:text-secondary text-sm sm:text-xs md:text-sm lg:text-md xl:text-lg 2xl:text-xllg:leading-[30px]"
            dangerouslySetInnerHTML={{ __html: detail }}
          />
        ))}
      </ul>
    </div>
  );
};

const Experience = () => {
  const [selectedJob, setSelectedJob] = useState(experiences[0]);

  return (
    <div className="text-center md:text-left px-5 md:pl-16 md:pr-28 lg:px-28">
      <motion.div variants={textVariant(0)} className="flex items-center">
      <h2 className={`${styles.sectionText} `}><span className='text-slate-500'>03. </span>Where I've worked</h2> <div className="w-[25%] h-[1px] bg-gray-500"></div>
      </motion.div>

      <div className="relative mt-10 lg:m-0 lg:p-20 flex flex-col items-center sm:flex-row sm:items-start">
        <div className="flex flex-col z-10 sm:w-full">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
              onClick={() => setSelectedJob(experience)}
              isActive={selectedJob === experience}
            />
          ))}
        </div>

        <div className="flex justify-end z-10 sm:block">
          <ExperienceDetails experience={selectedJob} />
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Experience, "experience");