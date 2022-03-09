import React from 'react'
import { motion } from 'framer-motion';
export const Modal = ({currImg, setCurrImg}) => {
  const handleClick = (e) => {
    e.target.classList.contains('backdrop') && setCurrImg(null);
  }

  return (
    <motion.div className="backdrop" onClick={handleClick}
      initial={{opacity: 0}}
      animate={{opacity: 1}}
    >
      <motion.img  src={currImg} alt="enlarged pic" 
        initial={{y: '-100vh'}} 
        animate={{y: 0}}
      />  
    </motion.div>
  )
}