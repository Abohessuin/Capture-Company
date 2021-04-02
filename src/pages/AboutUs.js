import React from "react";
import AboutSection from "../componentes/AboutSection";
import ServiceSection from "../componentes/ServiceSection";
import FqaSection from "../componentes/FqaSection";
import Wave from "../componentes/Wave";
import { motion } from "framer-motion";
import { pageAnimations } from "../animation";
import ScrollTop from "../componentes/ScrollTop";
const AboutUs = () => {
  return (
    <motion.div
      variants={pageAnimations}
      exit="exit"
      initial="hidden"
      animate="show"
    >
      <AboutSection />
      <ServiceSection/>
      <FqaSection />
      <Wave/>
      <ScrollTop/>
    </motion.div>
    
  );
};

export default AboutUs;
