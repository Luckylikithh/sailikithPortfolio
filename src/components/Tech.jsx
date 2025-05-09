import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import {  textVariant } from "../utils/motion";


const Tech = () => {
  return (
<>
    <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
        Building with the Best in Tech
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
        My Tech Stack.
        </h2>
      </motion.div>
    {/* <div className='flex flex-row flex-wrap justify-center gap-10 mt-2'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas   icon={technology.icon} />
        </div>
      ))}
    </div> */}
    </>
  );
 
};

export default SectionWrapper(Tech, "");
