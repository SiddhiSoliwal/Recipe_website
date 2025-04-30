import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Users } from 'lucide-react';

const RecipeCard = ({ title, image, time, servings, difficulty }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden"
    >
      <div className="relative h-48">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 right-2 bg-orange-500 text-white px-2 py-1 rounded-full text-sm">
          {difficulty}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <div className="flex items-center space-x-4 text-gray-600">
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            <span>{time}</span>
          </div>
          <div className="flex items-center">
            <Users className="w-4 h-4 mr-1" />
            <span>{servings} servings</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default RecipeCard;