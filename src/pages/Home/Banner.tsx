import React from "react";
import profilePic from "../../assets/images/profile-picture.jpg";
import { motion } from "framer-motion";

const Banner = () => {
  const container = {
    hidden: {
      opacity: 0,
      x: "-100vh",
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 75,
      },
    },
  };

  const buttonAnimation = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 1,
        repeat: Infinity,
      },
    },
  };
  return (
    <motion.div
      className="flex justify-between items-center my-10"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <div className="">
        <h2 className="text-5xl">
          Hey! I am <span className="text-blue-500 italic text-3xl">raju</span>
        </h2>
        <p className="text-6xl font-bold text-blue-500 ">Product Designer</p>
        <p className="text-5xl">From Bangladesh</p>
        <div className="flex gap-3 mt-5">
          <motion.button
            className="text-xl bg-blue-500 py-2 px-4 rounded"
            variants={buttonAnimation}
            whileHover="hover"
          >
            Contact on
          </motion.button>
          <button className="text-xl bg-blue-500 py-2 px-4 rounded">Scheduled</button>
        </div>
      </div>
      <div className="border border-blue-400 p-2 relative">
        <div className="size-4 absolute top-0 left-0 bg-blue-600"></div>
        <div className="size-4 absolute top-0 right-0 bg-blue-600"></div>
        <div className="size-4 absolute bottom-0 left-0 bg-blue-600"></div>
        <div className="size-4 absolute bottom-0 right-0 bg-blue-600"></div>
        <img className="size-72" src={profilePic} alt="" />
      </div>
    </motion.div>
  );
};

export default Banner;
