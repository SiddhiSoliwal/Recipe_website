import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">CulinaryDelight</h3>
            <p className="text-gray-400">
              Discover the joy of cooking with our collection of recipes from around the world.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/about" className="text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="/recipes" className="text-gray-400 hover:text-white">Recipes</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Categories</h4>
            <ul className="space-y-2">
              <li><a href="/recipes/breakfast" className="text-gray-400 hover:text-white">Breakfast</a></li>
              <li><a href="/recipes/lunch" className="text-gray-400 hover:text-white">Lunch</a></li>
              <li><a href="/recipes/dinner" className="text-gray-400 hover:text-white">Dinner</a></li>
              <li><a href="/recipes/desserts" className="text-gray-400 hover:text-white">Desserts</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.2 }}
                className="text-gray-400 hover:text-white"
              >
                <Facebook />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.2 }}
                className="text-gray-400 hover:text-white"
              >
                <Twitter />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.2 }}
                className="text-gray-400 hover:text-white"
              >
                <Instagram />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.2 }}
                className="text-gray-400 hover:text-white"
              >
                <Mail />
              </motion.a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} CulinaryDelight. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;