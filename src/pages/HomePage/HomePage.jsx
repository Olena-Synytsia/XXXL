import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromTop } from "../../motion/motion.js";

import s from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={s.container}>
      <motion.h2
        initial="hidden"
        animate="visible"
        variants={slideInFromTop(1)}
        className={s.text}
      >
        Phone Book is a modern application that will help you easily organize
        and store all your contacts in one place. Thanks to the intuitive
        interface, you can quickly add, edit and delete contacts.
      </motion.h2>
      <motion.img
        initial="hidden"
        animate="visible"
        variants={slideInFromLeft(1)}
        className={s.img_home}
        src="https://cdn.pixabay.com/photo/2014/04/03/10/28/telephone-310544_1280.png"
        alt="phone"
      />
    </div>
  );
};
export default HomePage;
