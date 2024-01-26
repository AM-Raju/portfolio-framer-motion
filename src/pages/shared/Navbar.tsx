import { motion } from "framer-motion";

const Navbar = () => {
  const navAnimation = {
    hidden: {
      y: -70,
    },
    visible: {
      y: -0,
      transition: {
        delay: 0.3,
        type: "spring",
        stiffness: 120,
      },
    },
  };

  const navListAnimation = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.1,
        type: "spring",
        stiffness: 120,
      },
    },
  };
  return (
    <motion.nav className="mt-10" variants={navAnimation} initial="hidden" animate="visible">
      <div className="flex justify-center items-center gap-5">
        <motion.a variants={navListAnimation} whileHover="hover" href="">
          My Work
        </motion.a>
        <motion.a variants={navListAnimation} whileHover="hover" href="">
          About Me
        </motion.a>
        <motion.a variants={navListAnimation} whileHover="hover" href="">
          Resume
        </motion.a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
