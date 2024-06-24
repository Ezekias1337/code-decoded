// Library Imports
import React from "react";
import { motion, Variants } from "framer-motion";

const pathVariants1: Variants = {
  initial: {
    opacity: 1,
    pathLength: 1,
    transform: "translateX(-10px)",
  },
  animate: {
    opacity: 0,
    pathLength: 0,
    transform: "translateX(0px)",
    transition: {
      duration: 3,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "mirror",
    },
  },
};

const pathVariants2: Variants = {
  initial: {
    opacity: 0.5,
    pathLength: 0.5,
    transform: "translateX(-20px)",
  },
  animate: {
    opacity: 1,
    pathLength: 1,
    transform: "translateX(0px)",
    transition: {
      duration: 4,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "mirror",
    },
  },
};

const pathVariants3: Variants = {
  initial: {
    opacity: 0,
    pathLength: 0,
    transform: "translateX(-30px)",
  },
  animate: {
    opacity: 1,
    pathLength: 1,
    transform: "translateX(0px)",
    transition: {
      duration: 5,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "mirror",
    },
  },
};

const pathVariants4: Variants = {
    initial: {
      opacity: 1,
      pathLength: 1,
      transform: "translateX(0px)",
    },
    animate: {
      opacity: 0,
      pathLength: 0,
      transform: "translateX(10px)", // Adjusted from -10px to 10px
      transition: {
        duration: 3,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "mirror",
      },
    },
  };
  
  const pathVariants5: Variants = {
    initial: {
      opacity: 0.5,
      pathLength: 0.5,
      transform: "translateX(0px)",
    },
    animate: {
      opacity: 0,
      pathLength: 0,
      transform: "translateX(20px)", // Adjusted from -20px to 20px
      transition: {
        duration: 4,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "mirror",
      },
    },
  };
  
  const pathVariants6: Variants = {
    initial: {
      opacity: 1,
      pathLength: 1,
      transform: "translateX(0px)",
    },
    animate: {
      opacity: 0,
      pathLength: 0,
      transform: "translateX(30px)", // Adjusted from -30px to 30px
      transition: {
        duration: 5,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "mirror",
      },
    },
  };

const BlobScene: React.FC = () => (
  <motion.svg
    id="blob-scene-visual"
    viewBox="0 0 960 540"
    width="100%"
    height="100%"
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    preserveAspectRatio="xMidYMid slice"
  >
    <rect x="0" y="0" width="960" height="540" fill="#040a15"></rect>
    <defs>
      <linearGradient id="grad1_0" x1="43.8%" y1="0%" x2="100%" y2="100%">
        <stop
          offset="14.444444444444446%"
          stopColor="#4276cf"
          stopOpacity="1"
        ></stop>
        <stop
          offset="85.55555555555554%"
          stopColor="#4276cf"
          stopOpacity="1"
        ></stop>
      </linearGradient>
    </defs>
    <defs>
      <linearGradient id="grad1_1" x1="43.8%" y1="0%" x2="100%" y2="100%">
        <stop
          offset="14.444444444444446%"
          stopColor="#4276cf"
          stopOpacity="1"
        ></stop>
        <stop
          offset="85.55555555555554%"
          stopColor="#203f6b"
          stopOpacity="1"
        ></stop>
      </linearGradient>
    </defs>
    <defs>
      <linearGradient id="grad1_2" x1="43.8%" y1="0%" x2="100%" y2="100%">
        <stop
          offset="14.444444444444446%"
          stopColor="#040a15"
          stopOpacity="1"
        ></stop>
        <stop
          offset="85.55555555555554%"
          stopColor="#203f6b"
          stopOpacity="1"
        ></stop>
      </linearGradient>
    </defs>
    <defs>
      <linearGradient id="grad2_0" x1="0%" y1="0%" x2="56.3%" y2="100%">
        <stop
          offset="14.444444444444446%"
          stopColor="#4276cf"
          stopOpacity="1"
        ></stop>
        <stop
          offset="85.55555555555554%"
          stopColor="#4276cf"
          stopOpacity="1"
        ></stop>
      </linearGradient>
    </defs>
    <defs>
      <linearGradient id="grad2_1" x1="0%" y1="0%" x2="56.3%" y2="100%">
        <stop
          offset="14.444444444444446%"
          stopColor="#203f6b"
          stopOpacity="1"
        ></stop>
        <stop
          offset="85.55555555555554%"
          stopColor="#4276cf"
          stopOpacity="1"
        ></stop>
      </linearGradient>
    </defs>
    <defs>
      <linearGradient id="grad2_2" x1="0%" y1="0%" x2="56.3%" y2="100%">
        <stop
          offset="14.444444444444446%"
          stopColor="#203f6b"
          stopOpacity="1"
        ></stop>
        <stop
          offset="85.55555555555554%"
          stopColor="#040a15"
          stopOpacity="1"
        ></stop>
      </linearGradient>
    </defs>
    <g transform="translate(960, 0)">
      <motion.path
        d="M0 486C-60.1 457.4 -120.1 428.8 -162.6 392.6C-205.1 356.5 -230.1 312.8 -281.4 281.4C-332.8 250 -410.5 230.8 -449 186C-487.5 141.1 -486.8 70.6 -486 0L0 0Z"
        fill="#15253d"
        variants={pathVariants4}
        initial="initial"
        animate="animate"
      ></motion.path>
      <motion.path
        d="M0 324C-40 304.9 -80.1 285.9 -108.4 261.8C-136.8 237.7 -153.4 208.6 -187.6 187.6C-221.8 166.7 -273.7 153.9 -299.3 124C-325 94.1 -324.5 47 -324 0L0 0Z"
        fill="#2f5a9c"
        variants={pathVariants5}
        initial="initial"
        animate="animate"
      ></motion.path>
      <motion.path
        d="M0 162C-20 152.5 -40 142.9 -54.2 130.9C-68.4 118.8 -76.7 104.3 -93.8 93.8C-110.9 83.3 -136.8 76.9 -149.7 62C-162.5 47 -162.3 23.5 -162 0L0 0Z"
        fill="#4276cf"
        variants={pathVariants6}
        initial="initial"
        animate="animate"
      ></motion.path>
    </g>
    <g transform="translate(0, 540)">
      <motion.path
        d="M0 -486C70.2 -481.2 140.4 -476.3 180.6 -436.1C220.8 -395.8 231 -320.2 277.9 -277.9C324.7 -235.6 408.2 -226.7 449 -186C489.8 -145.2 487.9 -72.6 486 0L0 0Z"
        fill="#15253d"
        variants={pathVariants1}
        initial="initial"
        animate="animate"
      ></motion.path>
      <motion.path
        d="M0 -324C46.8 -320.8 93.6 -317.5 120.4 -290.7C147.2 -263.9 154 -213.4 185.3 -185.3C216.5 -157.1 272.1 -151.2 299.3 -124C326.5 -96.8 325.3 -48.4 324 0L0 0Z"
        fill="#2f5a9c"
        variants={pathVariants2}
        initial="initial"
        animate="animate"
      ></motion.path>
      <motion.path
        d="M0 -162C23.4 -160.4 46.8 -158.8 60.2 -145.4C73.6 -131.9 77 -106.7 92.6 -92.6C108.2 -78.5 136.1 -75.6 149.7 -62C163.3 -48.4 162.6 -24.2 162 0L0 0Z"
        fill="#4276cf"
        variants={pathVariants3}
        initial="initial"
        animate="animate"
      ></motion.path>
    </g>
  </motion.svg>
);

export default BlobScene;
