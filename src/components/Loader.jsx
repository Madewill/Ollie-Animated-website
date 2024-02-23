import React, { useEffect } from "react";
import { motion, } from "framer-motion";
import Image from "./Image";

// Variants
const container = {
  show: {
    transition: {
      staggerChildren: 0.35,  
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 200
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [.6, .01, -.05, .95],
      duration: 1.6,
    }
  },
  exit: {
    opacity: 0,
    y: -200,
    transition: {
      ease: "easeInOut",
      duration: 0.8,
    },
  },
};

const itemMain = {
  hidden: {opacity: 0, y: 200},
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.6,
    }
  }
}

const Loader = ({ setLoading }) => {
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setLoading(false);
  //   }, 4000);
  //   return () => clearTimeout(timer);
  // });

  return (
    <div className='loader'>
      <motion.div className='loader-inner' 
      variants={container}
      initial="hidden"
      animate="show"
      exit="exit"
      onAnimationComplete={() => setLoading(false)}
      >
        <ImageBlock id='image-1' variants={item} />
        <motion.div className='transition-image' variants={itemMain}>
          <motion.img
            src='/images/image-2.jpg'
            alt='random alt'
            layoutId="main-image-1"
          />
        </motion.div>
        <ImageBlock id='image-3' variants={item}/>
        <ImageBlock id='image-4' variants={item}/>
        <ImageBlock id='image-5' variants={item}/>
      </motion.div>
    </div>
  );
};

export const ImageBlock = ({ id, variants }) => {
  return (
    <motion.div className={`image-block ${id}`}
    // animate={{
    //   scale: .5,
    //   transition: {
    //     duration: 1,
    //   },
    // }}
    variants={variants}
    >
      <Image
        src={`/images/${id}.webp`}
        fallback={`/images/${id}.jpg`}
        alt={id}
      />
    </motion.div>
  );
};
export default Loader;
