// import React from 'react';
// import { motion } from 'framer-motion';
// import { Award, Users, Globe, Heart } from 'lucide-react';

// const About = () => {
//   const stats = [
//     { icon: Users, label: 'Happy Users', value: '100K+' },
//     { icon: Globe, label: 'Countries', value: '50+' },
//     { icon: Award, label: 'Awards', value: '15+' },
//     { icon: Heart, label: 'Recipes', value: '5000+' }
//   ];

//   const team = [
//     {
//       name: 'Chef John Smith',
//       role: 'Head Chef',
//       image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80&w=400'
//     },
//     {
//       name: 'Sarah Williams',
//       role: 'Food Stylist',
//       image: 'https://images.unsplash.com/photo-1587241321921-91a834d6d191?auto=format&fit=crop&q=80&w=400'
//     },
//     {
//       name: 'Mike Johnson',
//       role: 'Recipe Developer',
//       image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400'
//     }
//   ];

//   return (
//     <>
//     <div className="pt-16">
//       {/* Hero Section */}
//       <motion.section
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         className="relative h-[90vh] bg-cover bg-center"
//         style={{
//           backgroundImage: 'url(https://images.pexels.com/photos/4551832/pexels-photo-4551832.jpeg?auto=compress&cs=tinysrgb&w=600)'
//         }}
//       >
//         <div className="absolute inset-0 bg-[#1e1d1d] opacity-20" />
//         <div className="relative h-full flex items-center justify-center text-center">
//           <div className="max-w-4xl px-4">
//             <motion.h1
//               initial={{ y: 20, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               className="text-5xl font-bold text-white mb-4"
//             >
//               Our Story
//             </motion.h1>
//             <motion.p
//               initial={{ y: 20, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ delay: 0.2 }}
//               className="text-xl text-[#C5705D]"
//             >
//               Bringing the joy of cooking to your kitchen since 2020
//             </motion.p>
//           </div>
//         </div>
//       </motion.section>

//       {/* Stats Section */}
//       <section className="py-16 bg-orange-50">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//             {stats.map((stat, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: index * 0.1 }}
//                 className="text-center"
//               >
//                 <motion.div
//                   whileHover={{ scale: 1.1 }}
//                   className="inline-block p-4 bg-white rounded-full shadow-lg mb-4"
//                 >
//                   <stat.icon className="w-8 h-8 text-orange-500" />
//                 </motion.div>
//                 <h3 className="text-3xl font-bold text-gray-800 mb-2">{stat.value}</h3>
//                 <p className="text-gray-600">{stat.label}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Team Section */}
//       <section className="py-16 bg-[#d7cfbe]">
//         <div className="max-w-7xl mx-auto px-4">
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             className="text-4xl font-bold text-center text-gray-800 mb-12"
//           >
//             Meet Our Team
//           </motion.h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {team.map((member, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: index * 0.1 }}
//                 whileHover={{ scale: 1.05 }}
//                 className="bg-white rounded-xl shadow-lg overflow-hidden"
//               >
//                 <img
//                   src={member.image}
//                   alt={member.name}
//                   className="w-full h-64 object-cover"
//                 />
//                 <div className="p-6 text-center">
//                   <h3 className="text-xl font-semibold text-gray-800 mb-2">{member.name}</h3>
//                   <p className="text-gray-600">{member.role}</p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>


//     <div>ssssssss</div>
//     </>
//   );
// };

// export default About;
import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Globe, Heart } from 'lucide-react';


const About = () => {
  
  const stats = [
    { value: "1 Million+", label: "Registered Flavoriz Users" },
    { value: "5,000+", label: "Verified Chefs in Community" },
    { value: "98%", label: "User Satisfaction Rate" },
    { value: "10,000+", label: "Officially Published Recipes" },
  ];
  const Card = ({ icon, title, subtitle }) => (
    <div className="flex items-center p-4 bg-white rounded-lg shadow-md space-x-4">
      <div className="flex items-center justify-center w-12 h-12 bg-yellow-100 rounded-full">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold text-gray-900">{title}</h3>
        <p className="text-gray-500 text-sm">{subtitle}</p>
      </div>
    </div>
  );
  const team = [
    {
      title: "Gordon Ramsay",
      img: "https://images.pexels.com/photos/4590935/pexels-photo-4590935.jpeg?auto=compress&cs=tinysrgb&w=600",
      views: "100+",
    },
    {
      title: "Jamie Oliver",
      img: "https://images.pexels.com/photos/6050294/pexels-photo-6050294.jpeg?auto=compress&cs=tinysrgb&w=600",
      views: "500+",
    },
    {
      title: "Julia Child",
      img: "https://images.pexels.com/photos/6957817/pexels-photo-6957817.jpeg?auto=compress&cs=tinysrgb&w=600",
      views: "200+",
    },
    {
      title: "Alice Waters",
      img: "https://images.pexels.com/photos/26733054/pexels-photo-26733054/free-photo-of-a-chef-preparing-a-dish-in-a-restaurant.jpeg?auto=compress&cs=tinysrgb&w=600",
      views: "350+",
    },
 
  ];
  return (
    <>
      <div className="pt-15 relative">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="relative h-[50vh] bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)',
          }}
        >
          <div className="absolute inset-0 bg-[#1e1d1d] opacity-20" />
          <div className="relative h-full flex items-center justify-center text-center">
            <div className="max-w-8xl px-8">
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-5xl font-bold text-black mb-4"
              >
                Our Story
              </motion.h1>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-[#202020]"
              >
                Bringing the joy of cooking to your kitchen since 2020
              </motion.p>
            </div>
          </div>
        </motion.section>

        <div className="min-h-screen bg-white flex flex-col items-center px-6 py-12">
      <h1 className="text-6xl font-bold text-center mb-4">
        Become a true <span className="text-yellow-500">chef</span> with our recipes.
      </h1>
      <p className="text-gray-500 text-center mb-8 max-w-xl">
        We are a home to variety of recipes worldwide for you to learn.
       
      </p>
      
      <div className="grid grid-cols-4 gap-4 max-w-7xl w-full items-end">
        {/* First Box - Tallest */}
        <div className="relative bg-white rounded-xl overflow-hidden shadow-lg h-170">
          <img src="https://images.pexels.com/photos/4152466/pexels-photo-4152466.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load," alt="Cooking" className="w-full h-full object-cover rounded-xl" />
          <div className="absolute top-3 left-3 bg-black text-white text-xs px-3 py-1 rounded-full">Step #1</div>
          
        </div>
        {/* Second Box - Slightly Shorter */}
        <div className="max-w-sm mx-auto space-y-4 p-8 bg-blue-100">
      <Card icon={<span>🏆</span>} title="Achievement" subtitle="Cook 2 foods today" />
      <Card icon={<span>👨‍🍳</span>} title="Live Now" subtitle="Chef Mark Johnson" />
      <Card icon={<span>🍽</span>} title="Today's Recipe" subtitle="Spaghetti Bolognese" />
      <Card icon={<span>✍️</span>} title="Get Started" subtitle="Share your recipe" />
    </div>
       
        {/* Fourth Box - Shortest */}
       
    <div className="bg-yellow-500 text-white p-10 rounded-2xl h-100 max-w-80 relative shadow-lg">
      <p className="text-2xl font-semibold leading-tight">
        "Flavoriz has always helped my cooking."
      </p>
      <div className="flex items-center mt-5">
        <img
          src="https://images.pexels.com/photos/7705377/pexels-photo-7705377.jpeg?auto=compress&cs=tinysrgb&w=600" // Replace with actual image URL
          alt="Alyssia Tan"
          className="w-10 h-10 rounded-full"
        />
        <div className="ml-3">
          <p className="font-bold">Alyssia Tan</p>
          <p className="text-sm opacity-75">Master Chef 2022</p>
        </div>
      </div>
      <button className="absolute top-4 right-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 21l-1.45-1.317C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.183L12 21z"
          />
        </svg>
      </button>
    </div>
         {/* Third Box - Medium Height */}
         <div className="relative bg-white rounded-xl oknifeverflow-hidden shadow-lg h-120">
          <img src="https://media.istockphoto.com/id/1226530968/photo/a-female-chef-in-a-white-uniform-and-a-black-apron-in-the-restaurant-kitchen-cooking-a-salad.jpg?s=612x612&w=0&k=20&c=JJZsXsB--KFWhIoPIzAde3QcwMkz6svuiDiaYzSvS-A=" alt="Live Cooking" className="w-full h-full object-cover rounded-xl" />
          <div className="absolute top-3 left-3 bg-red-500 text-white text-xs px-3 py-1 rounded-full">LIVE</div>
        </div>
      </div>
    </div>

        {/* Stats Section */}
        <div className="bg-white rounded-lg shadow-md p-10 flex justify-around items-center text-center ">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col">
              <span className="text-4xl font-bold text-yellow-500">{stat.value}</span>
              <span className="text-gray-600">{stat.label}</span>
            </div>
          ))}
        </div>

        <div className="text-center py-10 bg-amber-50">
      <h2 className="text-6xl font-bold">
        The Flavor <span className="text-yellow-500">Chefs</span> and Team
      </h2>
      <div className="flex flex-wrap justify-center gap-8 mt-8">
        {team.map((member, index) => (
          <div key={index} className="bg-white shadow-lg rounded-xl p-6 text-center w-64">
            <img
              src={member.img}  // Corrected from member.image
              alt={member.title}
              className="w-60 h-60 object-cover rounded-xl mx-auto"
            />
            <h3 className="text-xl font-semibold mt-4">{member.title}</h3>
            <p className="text-gray-600">Views: {member.views}</p>
          </div>
        ))}
      </div>
    </div>
       
    
      </div>
      
      <div className="min-h-screen bg-yellow-100 flex items-center px-6 py-12 relative overflow-hidden">
      {/* Background Image */}
      <img 
        src="https://images.pexels.com/photos/4252772/pexels-photo-4252772.jpeg?auto=compress&cs=tinysrgb&w=600" 
        alt="Food Background" 
        className="absolute inset-0 w-full h-full object-cover opacity-20" 
      />
      
      {/* Decorative Circles */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-600 opacity-30 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-yellow-700 opacity-30 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-white opacity-10 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl w-full flex items-center bg-white bg-opacity-80 p-10 rounded-xl shadow-lg relative z-10">
        <div className="w-1/2">
          <h2 className="text-5xl font-bold text-gray-800">
            Why <span className="text-yellow-500">CulinaryDelight</span> ?
          </h2>
          <p className="text-gray-600 mt-4 text-lg">
          CulinaryDelight is your ultimate culinary companion, designed to bring the joy of cooking right to your fingertips. As a recipe website, it goes beyond the ordinary by providing not just written instructions but also engaging and easy-to-follow videos for every recipe you search. Whether you're a beginner eager to explore the art of cooking or an experienced chef looking for inspiration, CulinaryDelight ensures that you have everything you need to create mouthwatering dishes. With its visually rich content and step-by-step video guides, this platform turns your kitchen into a hub of creativity and flavor, making every meal an unforgettable experience!
          </p>
          
        </div>
        {/* Right Side Image */}
        <div className="w-1/2 flex justify-end">
          <img 
            src="https://images.pexels.com/photos/3769739/pexels-photo-3769739.jpeg?auto=compress&cs=tinysrgb&w=600" 
            alt="Delicious Dish" 
            className="w-96 rounded-lg shadow-lg" 
          />
        </div>
      </div>
    </div>
    
    <div className="flex flex-col md:flex-row gap-6 p-6 bg-white">
      {/* Main Heading */}
      <h1 className="text-4xl font-bold text-black mb-6">
        Culinary <span className="text-yellow-500">Journal</span>
      </h1>
      
      {/* Left Section */}
      <div className="md:w-2/3 bg-yellow-100 p-6 rounded-xl shadow-md">
        <video
          src="https://videos.pexels.com/video-files/10641437/10641437-sd_360_640_25fps.mp4" 
          autoPlay 
          loop 
          muted 
          className="w-full h-64 object-cover rounded-xl"
        />
        <h2 className="text-2xl font-bold mt-4">
          Savoring Summer: Fresh Recipes to Delight Your Taste Buds from Our Favorites
        </h2>
        <div className="flex items-center gap-4 mt-2 text-gray-600">
          <span className="font-semibold">Joanne Roosevelt</span>
          <span>|</span>
          <span>16 July 2023</span>
        </div>
      </div>

      {/* Right Section */}
      <div className="md:w-1/3 flex flex-col gap-4">
        <button className="self-end bg-black text-white px-4 py-2 rounded-lg">See All Articles</button>
        
        <div className="bg-yellow-100 p-4 rounded-xl shadow-md flex gap-4">
          <img
            src="https://images.pexels.com/photos/3219483/pexels-photo-3219483.jpeg?auto=compress&cs=tinysrgb&w=200"
            alt="Story Article"
            className="w-20 h-20 object-cover rounded-lg"
          />
          <div>
            <span className="text-yellow-500 font-semibold">STORY</span>
            <h3 className="text-lg font-semibold">Global Culinary Adventures From Around the World</h3>
            <p className="text-sm text-gray-500">Monica Richard - 10 May 2023</p>
          </div>
        </div>

        <div className="bg-yellow-100 p-4 rounded-xl shadow-md flex gap-4">
          <img
            src="https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=200"
            alt="Tips Article"
            className="w-20 h-20 object-cover rounded-lg"
          />
          <div>
            <span className="text-yellow-500 font-semibold">TIPS</span>
            <h3 className="text-lg font-semibold">How to Choose the Best Spices for Your Cooking</h3>
            <p className="text-sm text-gray-500">Laura Sylvester - 8 March 2023</p>
          </div>
        </div>
      </div>
    </div>
    
    </>
  );
};

export default About;