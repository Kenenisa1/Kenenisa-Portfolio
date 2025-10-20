import { useState, useEffect } from 'react';
import imgs from '../assets/my.jpg'
import { motion, AnimatePresence } from 'framer-motion'
import { styles } from '../styles'
import { fadeIn } from '../utils/motion'
import { testimonials } from '../constants'

const FeedbackCard = ({ testm }) => (
  <div className='bg-black-200 border-2 border-amber-700 p-5 rounded-4xl xs:w-[250px] w-full max-w-md'>
    <img
      src={imgs}
      alt={`feedback_by-${testm.name}`}
      className='w-20 h-20 rounded-full justify-center items-center text-center m-auto object-cover'
    />
    
    <p className='text-center text-white font-black text-[48px]'>"</p>

    <div className='mt-1'>
      <p className='text-white tracking-wider text-[18px] text-center'>{testm.testimonial}</p>

      <div className='mt-7 flex gap-1 justify-center items-center'>
        <div className='flex-1 flex flex-col items-center'>
          <p className='text-white font-medium text-[16px]'>
            <span className='blue-text-gradient'>@</span> {testm.name}
          </p>
          <p className='mt-1 text-secondary text-[12px]'>
            {testm.designation} of {testm.company}
          </p>
        </div>
      </div>
    </div>
  </div>
);

const Feedbacks = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // 0: right, 1: left

  // Animation variants for slide effect
  const scaleSlideVariants = {
  enter: (direction ) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
    scale: 0.5
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  },
  exit: (direction ) => ({
    x: direction > 0 ? -300 : 300,
    opacity: 0,
    scale: 0.5,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  })
};


  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1); // Right direction for auto-advance
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  };

  const goToTestimonial = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  return (
    <div className='mt-12 bg-black-100 rounded-[20px]'> 
      <div className={`${styles.padding} bg-tertiary ml-20 rounded-2xl min-h-[300px]`}>
        <motion.div variants={fadeIn("right", "spring", 0.2, 1)}>
          <p className={`${styles.heroSubText}`}>What others say</p>
          <h2 className={`${styles.heroHeadText}`}>Testimonials</h2>
        </motion.div>
      </div>

      {/* Testimonial Carousel */}
      <div className={`${styles.paddingX} flex flex-col items-center mt-5 pb-14`}>
        
        {/* Main Testimonial Display with Animation */}
        <div className='relative w-full h-96 flex justify-center items-center mb-8 overflow-hidden'>
          <AnimatePresence mode='wait' custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={scaleSlideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className='absolute'
            >
              <FeedbackCard testm={testimonials[currentIndex]} />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Pagination Dots */}
        <div className='flex gap-3 mt-4'>
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-amber-700 scale-125' 
                  : 'bg-gray-600 hover:bg-gray-400'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className='flex gap-4 mt-6'>
          <button
            onClick={prevTestimonial}
            className='px-6 py-2 bg-black-200 text-white rounded-lg hover:bg-amber-700 transition-colors border border-amber-700'
          >
            Previous
          </button>
          <button
            onClick={nextTestimonial}
            className='px-6 py-2 bg-black-200 text-white rounded-lg hover:bg-amber-700 transition-colors border border-amber-700'
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Feedbacks;