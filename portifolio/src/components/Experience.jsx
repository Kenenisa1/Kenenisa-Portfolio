import { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { experiences } from "../constants";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience, VerticalTimelineElement }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#1d1836", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  const [TimelineComponents, setTimelineComponents] = useState(null);

  useEffect(() => {
    import('react-vertical-timeline-component')
      .then(module => {
        setTimelineComponents({
          VerticalTimeline: module.VerticalTimeline,
          VerticalTimelineElement: module.VerticalTimelineElement
        });
      })
      .catch(err => console.error('Failed to load timeline component', err));
  }, []);

  if (!TimelineComponents) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-white text-lg">Loading timeline...</div>
      </div>
    );
  }

  const { VerticalTimeline, VerticalTimelineElement } = TimelineComponents;

  return (
    <>
      {/* Only changed the header section - added text-center and justify-center */}
      <div className='flex justify-center items-center'>
        <motion.div variants={textVariant}>
          <p className={`${styles.heroSubText}`}>What languages I have learned so far!</p>
          <h2 className={`${styles.heroHeadText}`}>Educational Background</h2>
        </motion.div>
      </div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard 
              key={index} 
              experience={experience} 
              VerticalTimelineElement={VerticalTimelineElement} 
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Experience;