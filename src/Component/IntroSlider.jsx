import React from 'react';
import { motion } from 'framer-motion';

const slides = [
  {
    title: "Welcome to CulinaryDelight",
    description: "Discover the art of cooking with our curated recipes",
    video: "https://videos.pexels.com/video-files/7470642/7470642-hd_1920_1080_25fps.mp4"
  },
  {
    title: "Explore Global Cuisines",
    description: "From Italian to Asian, find recipes from around the world",
    video: "https://videos.pexels.com/video-files/5865851/5865851-uhd_2560_1440_25fps.mp4"  },
  {
    title: "Cook Like a Pro",
    description: "Learn techniques from experienced chefs",
    video: "https://videos.pexels.com/video-files/6824325/6824325-uhd_2560_1440_25fps.mp4 "  },
  
];

const IntroSlider = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: index === currentSlide ? 1 : 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0">
            {slide.image ? (
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 bg-opacity-50" />
              </div>
            ) : (
              <video
                className="absolute inset-0 w-full h-full object-cover"
                src={slide.video}
                autoPlay
                muted
                loop
              />
            )}
          </div>
          <div className="relative h-full flex items-center justify-center text-center">
            <div className="max-w-4xl px-4">
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-5xl font-bold text-white mb-4"
              >
                {slide.title}
              </motion.h1>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="text-xl text-white"
              >
                {slide.description}
              </motion.p>
            </div>
          </div>
        </motion.div>
      ))}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default IntroSlider;
