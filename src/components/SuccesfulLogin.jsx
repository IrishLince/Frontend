import React from 'react';
import { motion } from 'framer-motion';
import Header from './Header';
import { Link } from 'react-router-dom';
import backgroundImage from '../assets/CoverPreviehomepage.png';
import { useTypingEffect } from './useTypingEffect';

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const SuccessfulLogin = () => {
  const typedText = useTypingEffect("It's a gift that lasts a lifetime.", 50);

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <Header isLoggedIn={true} />
      <motion.div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: "easeInOut" }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full min-h-[calc(100vh-4rem)] flex items-center sm:justify-end justify-center">
        <motion.div 
          className="text-[#f9f9f9] max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl text-center sm:text-right"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            variants={textVariants}
          >
            Donate Blood, Save Lives
          </motion.h1>
          <motion.p 
            className="text-lg sm:text-xl mb-6"
            variants={textVariants}
          >
            When you donate blood, you're not just donating a pint;
            you're giving someone a chance to live,
            recover, and continue to make memories.
          </motion.p>
          <motion.p 
            className="text-xl sm:text-2xl font-semibold mb-8 min-h-[2em]"
            variants={textVariants}
          >
            {typedText}
          </motion.p>
          <motion.div
            variants={textVariants}
          >
            <Link
              to="/donate"
              className="inline-block bg-[#f9f9f9] text-red-800 hover:bg-gray-100 hover:text-red-700 px-6 sm:px-8 py-2 sm:py-3 rounded-full text-base sm:text-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105"
            >
              DONATE NOW
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default SuccessfulLogin;

