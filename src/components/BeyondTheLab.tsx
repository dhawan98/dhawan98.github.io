// src/components/BeyondTheLabGallery.tsx
import React from 'react';
import AnimatedSection from './AnimatedSection';
import { motion } from 'framer-motion';

const imagePaths = [
  '/climbing.jpg',
  '/photo.png',
  '/guitar.JPG',
  '/skydiving1.jpeg',
  '/skydiving5.jpg', // extra images won't be shown in the mosaic
];

const BeyondTheLabGallery: React.FC = () => {
  return (
    <AnimatedSection id="beyond" title="Beyond the Lab">
      <div className="relative w-full max-w-4xl mx-auto" style={{ height: '600px' }}>
        {/* Image 1 */}
        <motion.div
          className="absolute overflow-hidden rounded-lg shadow-xl"
          style={{ top: '10%', left: '5%', width: '45%', height: '45%' }}
          animate={{ rotate: [0, 5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          whileHover={{ scale: 1.1 }}
        >
          <img src={imagePaths[0]} alt="Adventure 1" className="w-full h-full object-cover" />
        </motion.div>
        {/* Image 2 */}
        <motion.div
          className="absolute overflow-hidden rounded-lg shadow-xl"
          style={{ top: '15%', right: '5%', width: '40%', height: '40%' }}
          animate={{ rotate: [0, -5, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          whileHover={{ scale: 1.1 }}
        >
          <img src={imagePaths[1]} alt="Adventure 2" className="w-full h-full object-cover" />
        </motion.div>
        {/* Image 3 */}
        <motion.div
          className="absolute overflow-hidden rounded-lg shadow-xl"
          style={{ bottom: '10%', left: '10%', width: '35%', height: '35%' }}
          animate={{ rotate: [0, 3, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          whileHover={{ scale: 1.1 }}
        >
          <img src={imagePaths[2]} alt="Adventure 3" className="w-full h-full object-cover" />
        </motion.div>
        {/* Image 4 */}
        <motion.div
          className="absolute overflow-hidden rounded-lg shadow-xl"
          style={{ bottom: '5%', right: '15%', width: '50%', height: '50%' }}
          animate={{ rotate: [0, -3, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          whileHover={{ scale: 1.1 }}
        >
          <img src={imagePaths[3]} alt="Adventure 4" className="w-full h-full object-cover" />
        </motion.div>
      </div>
    </AnimatedSection>
  );
};

export default BeyondTheLabGallery;
