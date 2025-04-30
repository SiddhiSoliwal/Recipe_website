import React, { useEffect, useRef } from 'react';
import { FaMusic, FaUser, FaUtensils, FaHeart } from 'react-icons/fa';
import { Eye } from "lucide-react";
import { FiSearch } from "react-icons/fi";
const Home = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    const playAudio = () => {
      if (audioRef.current) {
        audioRef.current.play().catch((error) => console.log("Autoplay Blocked:", error));
      }
    };

    document.addEventListener("click", playAudio, { once: true });

    return () => document.removeEventListener("click", playAudio);
  }, []);


  const recipes = [
    {
      title: "Spicy Vermicelli Noodles Salad",
      img: "https://images.pexels.com/photos/5409027/pexels-photo-5409027.jpeg?auto=compress&cs=tinysrgb&w=600", // Replace with actual image URL
      views: "100+",
    },
    {
      title: "Shahi Panner",
      img: "https://images.pexels.com/photos/13788765/pexels-photo-13788765.jpeg?auto=compress&cs=tinysrgb&w=600", // Replace with actual image URL
      views: "500+",
    },
    {
      title: "Sour & Spicy Momos",
      img: "https://media.istockphoto.com/id/488222396/photo/pan-fried-pot-stickers-with-soy-sauce.jpg?b=1&s=612x612&w=0&k=20&c=pIUerU3pBMWpZW2xJLUlDLnvlok2myo8USwRLsUxY2M=", // Replace with actual image URL
      views: "200+",
    },
    {
      title: "Mexican Tacos Flat Pizza",
      img: "https://images.pexels.com/photos/162744/tomatoes-tomato-quiche-red-yellow-162744.jpeg?auto=compress&cs=tinysrgb&w=600", // Replace with actual image URL
      views: "350+",
    },
    {
      title: "Chesse Cake",
      img: "https://images.pexels.com/photos/29831238/pexels-photo-29831238/free-photo-of-delicious-baked-cheesecake-with-fresh-berries.jpeg?auto=compress&cs=tinysrgb&w=600", // Replace with actual image URL
      views: "450+",
    }
  ];
  
 
    const sliderRef = useRef(null);
  
    useEffect(() => {
      const interval = setInterval(() => {
        if (sliderRef.current) {
          sliderRef.current.scrollBy({ left: 320, behavior: "smooth" });
          if (
            sliderRef.current.scrollLeft >=
            sliderRef.current.scrollWidth - sliderRef.current.clientWidth
          ) {
            sliderRef.current.scrollLeft = 0;
          }
        }
      }, 3000);
      return () => clearInterval(interval);
    }, []);
  return (
    <>
      {/* Main Contact Page */}
      <div className="relative w-full h-screen flex items-center justify-center bg-white overflow-hidden">
        {/* Half Circle Yellow Background */}
        <div className="absolute left-0 top-0 w-1/2 h-full flex items-center justify-start">
          <div className="w-[500px] h-[500px] bg-yellow-500 rounded-full translate-x-[-40%]"></div>
        </div>

        {/* Content Section */}
        <div className="relative z-10 flex items-center w-3/4">
          {/* Rotating Image */}
          <div className="w-1/2 flex justify-center items-center">
            <img
              src="https://images.pexels.com/photos/8992835/pexels-photo-8992835.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt="Breakfast"
              className="w-96 h-96 rounded-full shadow-xl rotate-animation object-cover"
            />
          </div>

          {/* Text Content */}
          <div className="w-1/2 text-left">
            <h3 className="text-2xl text-gray-600">Do you eat</h3>
            <h1 className="text-7xl font-bold">
              Adventure of <span className="text-yellow-500">Delicious</span>
            </h1>
            <h3 className="text-2xl text-gray-500 tracking-widest">at any time</h3>
            <p className="mt-4 text-gray-700">
              Unlock the world of variety culinary recipe and unleash your inner chef the easy way with CulinaryDelight.
            </p>
            <div className="flex gap-4 mt-6">
              <button className="px-6 py-3 bg-yellow-500 text-white font-bold rounded-full shadow-md hover:bg-yellow-600 transition">
                Explore now
              </button>
              <button className="px-6 py-3 bg-black text-white font-bold rounded-full shadow-md hover:bg-gray-800 transition">
                All Recipe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Feature & Recipe Section in One Line */}
      <div className="w-full min-h-screen flex items-center justify-center bg-white px-6 md:px-20">
        <div className="max-w-7xl w-full flex items-center justify-between gap-6">
          {/* Feature Section */}
          <div className="flex space-x-6">
            <div className="p-6 bg-transparent border border-black rounded-lg shadow-md text-center">
              <FaUser className="text-3xl mx-auto" />
              <h3 className="text-xl font-bold mt-4">User-Centered</h3>
              <p className="text-gray-600 mt-2">
                Your feedback shapes our platform, ensuring a seamless and satisfying culinary journey.
              </p>
            </div>
            <div className="p-6 bg-gray-100 border border-black rounded-lg shadow-md text-center">
              <FaUtensils className="text-3xl mx-auto" />
              <h3 className="text-xl font-bold mt-4">Diverse Recipes</h3>
              <p className="text-gray-600 mt-2">
                We celebrate diverse culinary traditions from around the world, inspiring you today.
              </p>
            </div>
            <div className="p-6 bg-gray-100 border border-black rounded-lg shadow-md text-center">
              <FaHeart className="text-3xl mx-auto" />
              <h3 className="text-xl font-bold mt-4">Fun Community</h3>
              <p className="text-gray-600 mt-2">
                We foster a vibrant foodie community where joy comes with sharing recipes with us.
              </p>
            </div>
          </div>

          {/* Featured Recipe Section */}
          <div className="flex items-center bg-white p-6 rounded-lg shadow-lg border border-gray-200 relative">
            {/* Recipe Image */}
            <div className="relative w-40 h-40">
              <img
                src="https://images.pexels.com/photos/3743537/pexels-photo-3743537.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt="Featured Recipe"
                className="w-full h-full rounded-lg object-cover shadow-md"
              />
            </div>
            {/* Recipe Details */}
            <div className="ml-6">
              <span className="text-yellow-500 font-bold">FEATURED</span>
              <h2 className="text-2xl font-bold mt-2 text-yellow-500">Calisbury Steak and Asparagus</h2>
              <button className="mt-4 px-6 py-3 bg-black text-white font-bold rounded-full shadow-md hover:bg-gray-800 transition">
                See Recipe
              </button>
            </div>
            {/* Music Wave Icon */}
            <div className="absolute bottom-3 left-3">
              <FaMusic className="text-black text-2xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Audio Player */}
           <div>
        <audio ref={audioRef} loop>
          <source src="https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Komiku/It's_time_for_adventure_/Komiku_-_12_-_Battle_Theme.mp3" type="audio/mp3" />
        </audio>
      </div>


      <div className="min-h-screen bg-white flex flex-col items-center px-6 py-12">
      <h1 className="text-6xl font-bold text-center mb-4">
        Become a true <span className="text-yellow-500">chef</span> with our recipes.
      </h1>
      <p className="text-gray-500 text-center mb-8 max-w-xl">
        We are a home to variety of recipes worldwide for you to learn.
      </p>
      
      <div className="grid grid-cols-4 gap-4 max-w-5xl w-full items-end">
        {/* First Box - Tallest */}
        <div className="relative bg-white rounded-xl overflow-hidden shadow-lg h-72">
          <img src="https://images.pexels.com/photos/6331142/pexels-photo-6331142.jpeg?auto=compress&cs=tinysrgb&w=600," alt="Cooking" className="w-full h-full object-cover rounded-xl" />
          <div className="absolute top-3 left-3 bg-black text-white text-xs px-3 py-1 rounded-full">Step #1</div>
        </div>
        {/* Second Box - Slightly Shorter */}
        <div className="bg-yellow-500 text-white p-6 rounded-xl shadow-lg h-64 flex flex-col justify-between">
          <p className="text-lg font-semibold">"Cooking has never been this easy!"</p>
          <div className="flex items-center gap-2">
            <img src="https://media.istockphoto.com/id/1293903541/photo/young-woman-stock-photo.jpg?b=1&s=612x612&w=0&k=20&c=290NqqQDB6VU2MhvfgMclU4BO-unVRrewO6urisjCcE=" alt="Chef" className="w-10 h-10 rounded-full" />
            <div>
              <p className="text-sm font-medium">Marsha Rianty</p>
              <p className="text-xs">Master Chef 2023</p>
            </div>
          </div>
        </div>
        {/* Third Box - Medium Height */}
        <div className="relative bg-white rounded-xl oknifeverflow-hidden shadow-lg h-56">
          <img src="https://images.pexels.com/photos/6996311/pexels-photo-6996311.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Live Cooking" className="w-full h-full object-cover rounded-xl" />
          <div className="absolute top-3 left-3 bg-red-500 text-white text-xs px-3 py-1 rounded-full">LIVE</div>
        </div>
        {/* Fourth Box - Shortest */}
        <div className="bg-gradient-to-r from-yellow-400 to-red-500 p-6 rounded-xl shadow-lg h-48 flex flex-col justify-between text-white relative overflow-hidden">
          <div className="absolute -top-8 -right-8 bg-white opacity-20 w-24 h-24 rounded-full"></div>
          <div className="absolute -bottom-8 -left-8 bg-white opacity-20 w-16 h-16 rounded-full"></div>
          <div className="space-y-2 relative z-10">
            <p className="font-semibold text-lg">🔥 Achievement</p>
            <p className="text-sm">Cook 2 foods today</p>
          </div>
          <div className="space-y-2 mt-4 relative z-10">
            <p className="font-semibold text-lg">🍽 Today's Recipe</p>
            <p className="text-sm">Spaghetti Bolognese</p>
          </div>
        </div>
      </div>
    </div>

  
    <div className="min-h-screen bg-yellow-100 flex items-center px-6 py-12 relative overflow-hidden">
      {/* Background Image */}
      <img 
        src="https://images.pexels.com/photos/18955555/pexels-photo-18955555/free-photo-of-variety-of-desserts-in-glass-cups.jpeg?auto=compress&cs=tinysrgb&w=1600" 
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
            Delicious  <span className="text-yellow-500">Pan</span> Cake
          </h2>
          <p className="text-gray-600 mt-4 text-lg">
          Pancakes are the quintessential breakfast delight, a fluffy and golden treasure that brings joy to every bite. Made from a simple batter of flour, eggs, milk, and a dash of sugar, these circular wonders are cooked to perfection on a sizzling griddle. Whether you enjoy them plain, drizzled with warm maple syrup, or topped with fresh fruits and a dollop of whipped cream, pancakes cater to every palate. Their soft, spongy texture pairs beautifully with sweet or savory accompaniments, making them a versatile treat. Be it a cozy morning ritual or a special brunch indulgence, pancakes always have a way of flipping ordinary moments into extraordinary ones. 🥞✨
          </p>
          <div className="flex items-center gap-6 mt-6 text-gray-700 text-lg">
            <span className="flex items-center gap-2"><i className="fas fa-clock"></i> 45 minutes</span>
            <span className="flex items-center gap-2"><i className="fas fa-user-chef"></i> Chef Emily Parker</span>
          </div>
        </div>
        {/* Right Side Image */}
        <div className="w-1/2 flex justify-end">
          <img 
            src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600" 
            alt="Delicious Dish" 
            className="w-96 rounded-lg shadow-lg" 
          />
        </div>
      </div>
    </div>
 
    <div className="bg-white py-10">
      <h2 className="text-5xl font-bold text-center mb-6">
        Popular <span className="text-yellow-500">Recipes</span> Today
      </h2>
      <div className="overflow-hidden w-full relative px-6">
        <div
          ref={sliderRef}
          className="flex space-x-6 overflow-x-auto no-scrollbar scroll-smooth"
        >
          {recipes.map((recipe, index) => (
            <div
              key={index}
              className="relative w-80 h-96 rounded-2xl shadow-lg shrink-0 group overflow-hidden"
            >
              <div className="absolute inset-0 bg-yellow-200 opacity-0 group-hover:opacity-30 transition-all duration-300"></div>
              <img
                src={recipe.img}
                alt={recipe.title}
                className="w-full h-full object-cover rounded-2xl transition-all duration-300 group-hover:scale-110"
              />
              <div className="absolute top-5 left-5 right-5 font-bold text-xl text-black bg-white/80 px-3 py-1 rounded-lg transition-all duration-300 group-hover:text-brown-700">
                {recipe.title}
              </div>
              <div className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-black/70 px-4 py-1 rounded-full text-white flex items-center gap-2 text-sm transition-all duration-300 group-hover:bg-yellow-500">
                <Eye size={18} /> {recipe.views}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>


    <div className="w-full min-h-screen bg-white p-6">
      {/* Search Bar */}
      <div className="flex justify-center mb-6">
        <div className="relative w-1/2">
          <input
            type="text"
            placeholder="Enter your keywords..."
            className="w-full p-2 border rounded-lg shadow-sm text-center pr-10"
          />
          <FiSearch className="absolute right-3 top-2.5 text-gray-500 text-xl" />
        </div>
      </div>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-3 gap-6">
        {/* Left Sidebar */}
        <div>
          <h2 className="text-4xl font-semibold mb-4">Popular <span className="text-yellow-500">Blog</span></h2>
          <ul className="space-y-3">
            <li className="text-gray-700">🔸 Savoring Spices: A Long Journey through Bold Flavors of Spices</li>
            <li className="text-gray-700">🔸 Comfort Food Chronicles: Recipes for Every Mood</li>
            <li className="text-gray-700">🔸 The Art of Plating: Elevate Your Culinary Presentations with These Tips</li>
          </ul> <br /><br /><br /> <br /><br />
          <h2 className="text-4xl font-semibold mt-6 mb-4">Popular <span className="text-yellow-500">Tags</span></h2>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full">Featured Articles</span>
            <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full">Healthy Eating</span>
            <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full">Seasonal Recipes</span>
          </div> <br /> <br /><br /><br /> <br /><br /><br /> <br /><br />
          
          {/* Tips for Healthy Living */}
          <h3 className="text-4xl font-semibold mb-2">Tips for <span className="text-yellow-500"> Healthy Living</span></h3>
          <ul className="list-disc pl-4 text-gray-700 space-y-2">
            <li>Eat a balanced diet rich in nutrients</li>
            <li>Stay hydrated and drink plenty of water</li>
            <li>Exercise regularly for at least 30 minutes</li>
            <li>Get enough sleep and rest</li>
            <li>Manage stress with mindfulness techniques</li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="col-span-2">
          {/* Featured Article */}
          <div className="bg-yellow-100 p-6 rounded-xl shadow-md mb-6">
            <img src="https://media.istockphoto.com/id/1312861782/photo/vegan-food.jpg?s=612x612&w=0&k=20&c=eNdjhnC9dlvOIyIU3HNCOuQM6QA1mRIO85RRFBgx8aA=" alt="Featured Recipe" className="rounded-lg mb-4" />
            <h2 className="text-2xl font-bold">Savoring Summer: Fresh Recipes to Delight Your Taste Buds from Our Favorites</h2>
            <p className="text-gray-600">By Jane Doe - 21 March 2025</p>
          </div>

          {/* Latest Articles */}
          <h2 className="text-4xl font-semibold mb-4">Latest <span className="text-yellow-500">Articles</span></h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-100 p-4 rounded-lg hover:bg-yellow-100 transition">
              <img src="https://media.istockphoto.com/id/2135788104/photo/chilli-garlic-noodles.jpg?b=1&s=612x612&w=0&k=20&c=CCd5gy1SWbPrJSA5J9XE3jMTOHq8qjkbw1BmPnmGDEQ=" alt="Article" className="rounded-lg mb-2 w-full object-cover" />
              <h3 className="font-bold">Global Culinary Adventures from Around the World</h3>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg hover:bg-yellow-100 transition">
              <img src="https://images.pexels.com/photos/793759/pexels-photo-793759.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Article" className="rounded-lg mb-2 w-full object-cover" />
              <h3 className="font-bold">How to Choose The Best Spices for Your Cooking</h3>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg hover:bg-yellow-100 transition">
              <img src="https://images.pexels.com/photos/2233729/pexels-photo-2233729.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Article" className="rounded-lg mb-2 w-full object-cover" />
              <h3 className="font-bold">Delicious Vegan Dishes for a Healthy Lifestyle</h3>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg hover:bg-yellow-100 transition">
              <img src="https://images.pexels.com/photos/269245/pexels-photo-269245.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Article" className="rounded-lg mb-2 w-full object-cover" />
              <h3 className="font-bold">Tips for Perfectly Cooked Pasta Every Time</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Home;
