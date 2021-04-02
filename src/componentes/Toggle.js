import React,{useState} from 'react';
import {motion} from 'framer-motion';


const Toggle = ({children,title})=>{

   const [toggle,setToggle]=useState(false);
  return (

     <div onClick={()=>setToggle(!toggle)} className="question">
      <motion.h4 layout>{title}</motion.h4>
       {toggle ?children:""}
       <div className="faq-line"></div>
    </div>


  );


};



export default Toggle