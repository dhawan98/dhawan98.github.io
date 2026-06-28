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

const captions = ["Rock climbing", "Portrait", "Playing guitar", "Skydiving"];

const BeyondTheLabGallery: React.FC = () => {
  return (
    <AnimatedSection id="beyond" title="Beyond the Lab">
      <div className="max-w-4xl mx-auto grid grid-cols-2 gap-4">
        {/* Left column — tall then short */}
        <div className="flex flex-col gap-4">
          <motion.div
            className="overflow-hidden rounded-xl shadow-md"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={imagePaths[0]}
              alt={captions[0]}
              className="w-full h-72 object-cover"
            />
          </motion.div>
          <motion.div
            className="overflow-hidden rounded-xl shadow-md"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={imagePaths[2]}
              alt={captions[2]}
              className="w-full h-52 object-cover"
            />
          </motion.div>
        </div>
        {/* Right column — short then tall */}
        <div className="flex flex-col gap-4">
          <motion.div
            className="overflow-hidden rounded-xl shadow-md"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={imagePaths[1]}
              alt={captions[1]}
              className="w-full h-52 object-cover"
            />
          </motion.div>
          <motion.div
            className="overflow-hidden rounded-xl shadow-md"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={imagePaths[3]}
              alt={captions[3]}
              className="w-full h-72 object-cover"
            />
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default BeyondTheLabGallery;
