import React from 'react';
import { motion } from 'framer-motion';
import IntroSlider from '../Component/IntroSlider';
import RecipeCard from '../Component/RecipeCard';
import { Search, Star } from 'lucide-react';


  

const Home = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const featuredRecipes = [
    {
      title: "Classic Italian Pasta",
      image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&q=80&w=1920",
      time: "30 mins",
      servings: 4,
      difficulty: "Easy"
    },
    {
      title: "Grilled Salmon",
      image: "https://images.unsplash.com/photo-1485921325833-c519f76c4927?auto=format&fit=crop&q=80&w=1920",
      time: "25 mins",
      servings: 2,
      difficulty: "Medium"
    },
    {
      title: "Chocolate Cake",
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=1920",
      time: "45 mins",
      servings: 8,
      difficulty: "Hard"
    }
  ];

  const recipes = [
    {
      title: "Fresh and Healthy Salad",
      calories: "60 calories",
      time: "5 mins",
      portion: "3 persons",
      img: "https://images.pexels.com/photos/3030716/pexels-photo-3030716.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "Delicious Spicy Beef Noodles",
      calories: "150 calories",
      time: "18 mins",
      portion: "2 persons",
      img: "https://images.pexels.com/photos/5409020/pexels-photo-5409020.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "pasta",
      calories: "120 calories",
      time: "45 mins",
      portion: "3 persons",
      img: "https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    // {
    //   title: "Healthy Fruit Smoothie",
    //   calories: "110 calories",
    //   time: "12 mins",
    //   portion: "3 persons",
    //   img: "https://images.pexels.com/photos/12049998/pexels-photo-12049998.jpeg?auto=compress&cs=tinysrgb&w=600",
    // },
  ];
  
  
  const categories = [
    {
      title: "MEDITERRANEAN",
      image: "https://toriavey.com/images/2022/05/explore_mediterranean.svg", // Replace with actual image URL
    },
    {
      title: "SPECIAL DIETS",
      image: "https://toriavey.com/images/2022/04/homepage-special-diets.jpeg", // Replace with actual image URL
    },
    {
      title: "JEWISH CUISINE",
      image: "https://toriavey.com/images/2022/04/homepage-jewish-cuisine.jpg", // Replace with actual image URL
    },
    {
      title: "SEASONAL + HOLIDAY",
      image: "https://toriavey.com/images/2022/04/homepage-seasonal-holiday.jpg", // Replace with actual image URL
    },
  ];





 

  return (
    <>
    <div>



      
      <IntroSlider />

      <div className="min-h-screen flex flex-col items-center justify-center bg-white p-6">
      {/* Header */}
      <header className="w-full flex flex-row justify-between items-center py-6 bg-[#F8EDE3] text-black text-xl font-bold text-center px-6">
        <span className="text-2xl font-extrabold">learn how to cook mediterranean</span>
        <button className="bg-[#C5705D] text-white px-6 py-2 rounded-md">SIGN UP →</button>
      </header>

      {/* Content Section */}
      <div className="relative flex flex-col md:flex-row items-center bg-white shadow-none p-6 rounded-lg max-w-4xl w-full mt-6">
        {/* Text Box */}
        <div className="border-2 border-yellow-500 p-10 text-center w-full md:w-1/2 bg-white">
          <h2 className="text-3xl font-bold mb-4">WELCOME</h2>
          <p className="text-gray-700 mb-4 text-lg">
            My name is Tori Avey, I'm so glad you're here! On my site I explore Mediterranean
            cuisine and culture. I am passionate about sharing authentic, flavorful recipes with you.
          </p>
          <button className="bg-yellow-700 text-white px-6 py-3 rounded-md text-lg">LEARN MORE →</button>
        </div>

        {/* Video Section */}
        <div className="w-full md:w-1/2 flex justify-center relative md:-ml-10 md:-mr-6">
          <video
            className="w-[400px] h-[250px] rounded-lg shadow-lg"
            src="https://videos.pexels.com/video-files/3195370/3195370-sd_640_360_25fps.mp4"  // Change to your video URL
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      </div>
    </div>


    <div className="relative w-full min-h-screen bg-white flex flex-col items-center justify-center p-8">
      {/* Top Horizontal Lines */}
      <div className="w-full border-t-2 border-black mb-2"></div>
      <div className="w-full border-t-2 border-black mb-2"></div>
      
      {/* Main Container */}
      <div className="flex flex-col md:flex-row items-center w-full max-w-6xl p-6">
        {/* Left Section */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left p-4">
          <img src="https://toriavey.com/images/2022/04/submark.svg" alt="Logo" className="w-35 h-35 mb-2" />
          <p className="text-lg text-gray-600">- get curious about -</p>
          <h1 className="text-3xl font-bold text-[#C5705D] mt-2">CULINARY DELIGHT</h1>
        </div>

        {/* Right Section - Food Grid */}
        <div className="flex-1 grid grid-cols-3 gap-4 p-4">
          <div className="text-center">
            <img src="https://toriavey.com/images/2012/09/IMG_7530.jpg" alt="Food 1" className="w-40 h-40 rounded-lg shadow-md" />
            <p className="mt-2 text-sm">Pomegranate Glazed Salmon</p>
          </div>
          <div className="text-center">
            <img src="https://toriavey.com/images/2011/09/TOA57_8-1-292x292.jpg" alt="Food 2" className="w-40 h-40 rounded-lg shadow-md" />
            <p className="mt-2 text-sm">Date Honey Nut Cake</p>
          </div>
          <div className="text-center">
            <img src="https://toriavey.com/images/2014/05/IMG_2270-2-292x219.jpg" alt="Food 3" className="w-40 h-40 rounded-lg shadow-md" />
            <p className="mt-2 text-sm">Roasted Vegetable Moussaka</p>
          </div>
        </div>
      </div>

      {/* Bottom Horizontal Lines */}
      <div className="w-full border-t-2 border-black mt-2"></div>
      <div className="w-full border-t-2 border-black mt-2"></div>
    </div>
    <div className="w-full py-10 text-center bg-white relative">
      <div className="flex justify-between items-center px-10 mb-6 bg-[#F8EDE3] py-3">
        <div className="flex items-center gap-2">
          {/* <img src="https://via.placeholder.com/40" alt="icon" className="w-8 h-8" /> */}
          <h1 className="text-2xl font-bold">EXPLORE</h1>
        </div>
        <button className="px-4 py-2 bg-[#C5705D] text-white rounded-md text-sm font-bold">
          All RECIPE &rarr;
        </button>
      </div>
      
      <div className="flex justify-center gap-8 mb-10">
        {categories.map((category, index) => (
          <div key={index} className="text-center">
            <div className="w-50 h-50 mx-auto rounded-full overflow-hidden animate-[spin_15s_linear_infinite]">
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="mt-2 text-sm font-medium">
              {category.title} <span className="text-red-500">&rarr;</span>
            </p>
          </div>
        ))}
      </div>

      <div className="absolute left-0 right-0 top-[75%] border-t border-black-300"></div>

      <div className="relative z-10 border p-8 max-w-lg mx-auto shadow-lg bg-white w-full">
        <p className="text-sm text-gray-500">- deep dive into -</p>
        <h3 className="text-2xl font-bold">MEDITERRANEAN COOKING</h3>
        <p className="text-gray-600 mt-2 text-sm">
          Take a delicious journey through the Mediterranean with Tori and her
          global team of culinary experts.
        </p>
        <button className="mt-6 px-4 py-2 bg-yellow-600 text-white rounded-md text-sm">
          LEARN MORE &rarr;
        </button>
      </div>
    </div> 

    <div className="w-full py-10 flex justify-center bg-white relative">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center bg-yellow-700 p-6 shadow-lg w-full relative">
        <div className="md:w-1/2 text-left px-6 text-white">
          <h3 className="text-2xl font-bold">ABOUT TORI</h3>
          <p className="mt-4 text-sm leading-relaxed">
            I share exciting recipes and food history from the Mediterranean and around the world. I was introduced
            to global cuisine by my grandparents, who spent their retirement years traveling the Mediterranean in a VW
            camper bus with a kerosene-fueled kitchenette.
          </p>
          <button className="mt-6 px-6 py-3 bg-white text-yellow-700 rounded-md text-sm flex items-center gap-2 hover:bg-gray-200 transition">
            LEARN MORE <span>&rarr;</span>
          </button>
        </div>
        <div className="w-full md:w-1/2 flex justify-center relative md:-ml-10 md:-mr-6">
          <video
            className="w-[390px] h-[200px] rounded-lg shadow-lg"
            src="https://videos.pexels.com/video-files/8844495/8844495-sd_960_506_24fps.mp4"  // Change to your video URL
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      </div>
    </div>
    
    <div className="w-full py-10 flex flex-col items-center bg-white relative">
      <h3 className="text-2xl font-bold text-center mb-6">AS SEEN ON</h3>
      <div className="flex flex-wrap justify-center items-center gap-10 w-full max-w-5xl">
        <img src="https://toriavey.com/images/2022/04/cooking-channel.png" alt="Cooking Channel" className="h-40" />
        <img src="https://toriavey.com/images/2022/04/pbs-food.png" alt="PBS Food" className="h-40" />
        <img src="https://toriavey.com/images/2022/04/bon-appetit.png" alt="Bon Appétit" className="h-40" />
        <img src="https://toriavey.com/images/2022/04/hallmark.png" alt="Hallmark Channel" className="h-40" />
        <img src="https://toriavey.com/images/2022/04/new-york-times.png" alt="New York Times" className="h-40" />
      </div>
      <button className="mt-6 px-6 py-3 text-black rounded-md text-xl flex items-center gap-2 hover:text-yellow-600 transition bg-yellow ">
        MORE <span>&rarr;</span>
      </button>
    </div>

    <div className="w-full py-10 flex flex-col items-center bg-white relative">
      {/* <h3 className="text-2xl font-bold text-center mb-6">AS SEEN ON</h3>
      <div className="flex flex-wrap justify-center items-center gap-10 w-full max-w-5xl">
        <img src="https://via.placeholder.com/100x50" alt="Cooking Channel" className="h-10" />
        <img src="https://via.placeholder.com/100x50" alt="PBS Food" className="h-10" />
        <img src="https://via.placeholder.com/100x50" alt="Bon Appétit" className="h-10" />
        <img src="https://via.placeholder.com/100x50" alt="Hallmark Channel" className="h-10" />
        <img src="https://via.placeholder.com/100x50" alt="New York Times" className="h-10" />
      </div>
      <button className="mt-6 px-6 py-3 text-black rounded-md text-sm flex items-center gap-2 hover:text-gray-600 transition">
        MORE <span>&rarr;</span>
      </button>
       */}
      <h3 className="text-5xl font-bold text-center mt-10">MOST RECENT</h3>
      <div className="flex flex-wrap justify-center items-center gap-6 mt-6">
      <img src="https://toriavey.com/images/2013/07/IMG_0255-740x555.jpeg" alt="Dish 6" className="h-60 w-50 border-4 border-yellow-500 font-bold animate-rotate-border" /> 
        <img src="https://toriavey.com/images/2013/07/IMG_1429-740x555.jpeg" alt="Dish 2" className="h-60 w-50 border-4 border-yellow-500 font-bold animate-rotate-border" />
        <img src="https://toriavey.com/images/2013/07/IMG_0243-740x555.jpeg" alt="Dish 3" className="h-60 w-50 border-4 border-yellow-500 font-bold animate-rotate-border" />
        <img src="https://toriavey.com/images/2013/07/IMG_0105-740x555.jpeg" alt="Dish 4" className="h-60 w-50 border-4 border-yellow-500 font-bold animate-rotate-border" />
        <img src="https://toriavey.com/images/2011/01/TOA109_18-1-740x555.jpeg" alt="Dish 5" className="h-60 w-50 border-4 border-yellow-500 font-bold animate-rotate-border" />
        <img src="https://toriavey.com/images/2023/05/IMG_1472-1-740x555.jpeg" alt="Dish 6" className="h-60 w-50 border-4 border-yellow-500 font-bold animate-rotate-border" />
      </div>
      <button className="mt-6 px-6 py-3 bg-yellow-600 text-white rounded-md text-sm flex items-center gap-2 hover:bg-yellow-700 transition">
        ALL RECIPES <span>&rarr;</span>
      </button>
    </div>



      <section className="py-16 px-4 max-w-10xl mx-auto bg-[#fff]">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-White-800 mb-4"
          >
            Find Your Perfect Recipe
          </motion.h2>
          <motion.div 
            className="max-w-xl mx-auto relative "
            whileHover={{ scale: 1.02 }}
          >
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search recipes or ingredients..."
              className="w-full px-6 py-3 rounded-full border bg-white border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 "
            />
            <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {featuredRecipes.map((recipe, index) => (
            <RecipeCard key={index} {...recipe} />
          ))}
        </motion.div>
      </section>

      {/* New Section with Two Images and Text */}
      <section className="py-16 bg-orange-50 flex flex-col items-center text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-gray-800 mb-12"
        >
          Recipes
        </motion.h2>
        <div className="flex flex-wrap justify-center items-center gap-8 relative">
          <motion.img
            src="https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Healthy Food"
            className="w-60 h-60 rounded-full object-cover border-2 border-gray-300"
            whileHover={{ scale: 1.1, borderWidth: "6px" }}
          />
          <div className="max-w-lg text-left">
            <h3 className="text-2xl font-semibold text-gray-800">Health is the most precious</h3>
            <p className="text-gray-600 mt-4">
              While it is important to have naturally occurring sugars in your diet, many foods contain harmful added sugars that contain no nutritional value.
            </p>
          </div>
          <motion.img
            src="https://images.pexels.com/photos/4198930/pexels-photo-4198930.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Healthy Food 2 (Add your image here)"
            className="w-40 h-40 rounded-full object-cover border-2 border-gray-300 absolute bottom-[-50px] right-[-20%]"
            whileHover={{ scale: 1.1, borderWidth: "6px" }}
          />
        </div>
      </section>
    </div>

    <div className="flex flex-col items-center justify-center py-10 bg-white">
      <h3 className="text-sm font-semibold text-yellow-600 tracking-widest mb-4">
        AS SEEN IN
      </h3>
      <div className="flex flex-wrap justify-center gap-8 px-4">
      <img
  src="https://images.seeklogo.com/logo-png/28/1/buzzfeed-logo-png_seeklogo-287219.png?v=1956677854869088888"
  alt="BuzzFeed"
  className="h-28 w-28 grayscale opacity-70"
/>

        <img
          src="https://images.squarespace-cdn.com/content/v1/561d135be4b027869ede51cb/1589833537951-YSKF28CEUFH4LQUAEW8Y/pw-logo-black.png"
          alt="PureWow"
           className="h-28 w-28 grayscale opacity-70"
        />
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAflBMVEX///8AAADu7u6qqqr4+Pje3t5hYWGVlZV1dXW5ubnJycn7+/vn5+dpaWnZ2dnl5eVFRUVUVFSFhYUmJiby8vJxcXEuLi7BwcHV1dUZGRk7OzszMzOSkpJbW1tjY2MPDw9BQUGenp6xsbESEhKHh4d9fX1PT08fHx8oKCijo6NoRlyAAAAFEElEQVR4nO2Z2WKiMBSGAcEdUKsIUkXc2r7/Cw6eEzELSbV15mb+76rNYcmX5ZBEzwMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4HmhxMR9QWfYM0KTQOdHFZtMoyRJonTZHV6mkSMqM1gNWxYHszLje/hcr03J8BpZjaSSfDvXmD4oJbNezPwr2e4rMaNJHZfXaBnXHVGVrS+TrfV4Tw5Xl5EeDyjwLpWMK18jfdKuecZWekixCDW/3cc9+rH7xrGvVqY6uAwbBtrb2HAg1674reGyVu+fKWMxHBzV8FGvk9PQLyK3of/1CsNk1GCMl5vCSrtfMVzq0YahazqS4dt16mR89arLsL9axRcxcPLvDI96BUzDM5VbUlcsbqs2l1mmGwZtlxw/s3awbh3ZjG7YhU3GS7hxSjUvkGGVTCZhsN5wg31jGKyvDKj8RH+bg2jhMBwIv8U4mqbJ+qQanoXTvJcnSX64deiw81F3w5j+DCnrFGPT0OehG5Hip9JepiEzpnLbQHQY8o1+3HZ88D6/Gx7EuG0rmQrH3iOGor/UWsmGXLFKaQK3oZF6vze8cJ/IMytvB8GUo7E0zsKaivbWdCYbrml4Owx7ZrVfbbh2ziuuwEZNLDxwa8urFEOaAZ9qMv3HhuGQIrkZIS7mIGqqQKVZ96xWDKd7aj41/ndG6YmiHYGUpvrcctuUx6ieub6crUKG2yjPk8Om60LZMKfcvVFe8JzhVMADKxX/SQ9cOxuG84y+KPHSt2vxe9cdN8OqKAr+ihV6TuLsQ9M4n9MlJyX+lOFyJqAq+eKfvXQVdUdhW4e9X6MfZmfREnbVcUNreKfWp3j7xV9duA0u6hXPGfqdSK1K82Bjy4vU9aW5kKc1wu4xQ3+vVUpfte21Fnyx4dlpSGmoNPMslfcfNPQrNe1qhn395X+jDzNtbdxC/pmlD52Gs0Ov4WvI41CZybLh5jw27n+xIS/ZzNdI0cIyD2OXoQhODrSULeVkSYYZ7yKNNP2sYXgWm2n6Lvm3rbUkNKKA7es9MnvgCufS8wOGty+LnE/ZMOINd0dCfvH3MKE2ziy38ct2+l6ppmLbGlg1TH29NcjwLRCbvl+O0hbrmibYOms774pOqfkr2x5RNQyNRmLDqWinmZEDXr0utb2H4WGqZVPeXZy67+juwy5D0Xw7vVavNgx4MdCXJfK2PgHXQs7oIS0D/Mx6WqMacuY8S69uDXN+tXaI8frdk9gAb9teTBf7e4/yqk7eH4oTAevWQjVc80mGkWmuhmJRqG2uXm8Y7rjK/pn3+M03sJTG7ElEmz1+FOWj2x7ftqDx1O/hmc89KnmE3A0n3Fp79YP7ckMvKUWt23Ma2fB+EFWUZXtOc3Ec5xlrGu1A4G7oBbz56P9ib3FjUG4aLDs6PiyRkA2bb6pZ49h1rG4aquevkqE34tM2Zcj/zHAZpWlkbfdkp9ZIXcWF9Ycark7Os33jvLRWW1Y2FJNAmYo/M/yGSS1341E/845i+cx7+8yZdzF71y/nNY0wDHlp8yGfX7oMqx8aNo/txZ/05M9t3bF5T+odzdCsP7Bt7VvSSMZcti+p/NavU75MblMqMOdBSOUP/DRkY5kmV37/2xMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/F/8AXRmRGD9akZCAAAAAElFTkSuQmCC"
          alt="Brit+Co"
           className="h-28 w-28 grayscale opacity-70"
        />
        <img
          src="data:image/png;base64,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"
          alt="PopSugar"
       className="h-28 w-30 grayscale opacity-70"
        />
        <img
          src="data:image/png;base64,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"
          alt="The Everygirl"
           className="h-28 w-30 grayscale opacity-70"
        />
        <img
          src="data:image/png;base64,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"
          alt="Kitchn"
     className="h-28 w-30 grayscale opacity-70"
        />
      </div>
    </div>

   
    <div
      className="min-h-screen flex flex-col items-center text-center p-20 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://media.istockphoto.com/id/1015632352/photo/top-view-of-food-composition-with-various-seasonal-ripe-vegetables-isolated-on-white.jpg?s=612x612&w=0&k=20&c=rXd_qT0Wooo4ivfkuChEc1oVrLMrwgXD4jWBGiuXGTk=')",
        backgroundSize: "cover",
      }}
    >
      <h1 className="text-6xl font-extrabold text-gray-900 mb-6">
        Simple and Tasty Recipes
      </h1>
      <p className="text-gray-700 text-lg max-w-3xl mx-auto mb-12">
        Discover delicious and easy-to-make recipes to satisfy your taste buds.
      </p>

      {/* Cards */}
      <div className="flex justify-center gap-12 flex-wrap w-full max-w-6xl">
        {recipes.map((recipe, index) => (
          <div
            key={index}
            className="bg-white/20 backdrop-blur-lg p-8 rounded-xl shadow-lg w-72 transition-all duration-300 hover:border-2 hover:border-[#C5705D]"
          >
            <div className="w-28 h-28 mx-auto rounded-full shadow-xl transform hover:scale-110 transition-all duration-300">
              <img
                src={recipe.img}
                alt={recipe.title}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <h2 className="text-xl font-semibold mt-6">{recipe.title}</h2>
            <p className="text-gray-600 text-md mt-2">{recipe.calories}</p>
            <div className="flex justify-between text-gray-700 text-md mt-4">
              <span>⏳ {recipe.time}</span>
              <span>👨‍👩‍👧 {recipe.portion}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
    

    </>
  );
};

export default Home;


//  contact 
import React, { useState, useEffect } from "react";

const ContactPage = () => {
  const [showImage, setShowImage] = useState(false);

  // Show the image after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowImage(true);
    }, 5000); // 5-second delay

    return () => clearTimeout(timer); // Clean up the timer
  }, []);

  return (
    <div>
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
            src="https://images.pexels.com/photos/11906476/pexels-photo-11906476.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Breakfast"
            className="w-96 h-96 rounded-full shadow-xl rotate-animation object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="w-1/2 text-left">
          <h3 className="text-xl text-gray-600">Do you eat</h3>
          <h1 className="text-6xl font-bold">Breakfast</h1>
          <h3 className="text-2xl text-gray-500 tracking-widest">at any time</h3>
          <p className="mt-4 text-gray-700">
            Remember the days when you let your child have some chocolate if he finished his cereal? Now, chocolate is one of the cereals.
          </p>
          <button className="mt-6 px-6 py-3 bg-yellow-500 text-white font-bold rounded-full shadow-md hover:bg-yellow-600 transition">
            Book Now
          </button>
        </div>
      </div>
    </div>

      {/* Contact2 Page */}
      <div className="bg-white min-h-screen flex flex-col items-center justify-center p-8">
        <h1 className="text-4xl font-bold text-black">HAVE ANY QUESTIONS</h1>
        <p className="text-gray-600 text-center max-w-2xl mt-2 font-bold">
          Want to know about any of our ingredients or suppliers? Or maybe you
          just want to say Aloha? Send us a message below and we'll get right
          back to you.
        </p>

        {/* Contact Form */}
        <div className="bg-white w-full max-w-2xl mt-6">
          <form className="flex flex-col gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label className="text-gray-700 font-semibold">Email</label>
                <input
                  type="email"
                  placeholder="Enter a valid email address"
                  className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-gray-700 font-semibold">Name</label>
                <input
                  type="text"
                  placeholder="Enter your Name"
                  className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label className="text-gray-700 font-semibold">Message</label>
              <textarea
                placeholder="Enter your message"
                className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 min-h-[120px]"
              ></textarea>
            </div>

            <button className="bg-red-500 text-white py-3 rounded-md font-semibold hover:bg-green-600 transition">
              SUBMIT
            </button>
          </form>
        </div>
      </div>

      {/* "We Are Open" Section */}
      <div className="bg-[#D0B8A8] min-h-[300px] flex flex-col items-center justify-center p-10 text-center">
        <h1 className="text-4xl font-bold text-black">WE ARE OPEN</h1>
        <p className="text-gray-700 mt-2 max-w0-xl font-bold">
          We bring you the flavor of the ocean, but are located in the heart of
          downtown.
          <br />
          <strong>Delivery within 25 km in any direction.</strong>
        </p>
        <div className="mt-4 text-lg font-bold">
          <p>Mon - Wed 9:00 am - 5:00 pm</p>
          <p>Thu - Fri 9:00 am - 8:30 pm</p>
          <p>Saturday 9:00 am - 10:00 pm</p>
          <p className="font-semibold">Sunday Closed</p>
        </div>
      </div>

      {/* Contacts Page */}
      <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-100">
        <h1 className="text-4xl font-bold text-center">CONTACTS</h1>

        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-9xl mt-7">
          <div className="md:w-1/2 text-gray-700 text-right font-bold">
            <p>
              Use our contact form for all information requests or contact us
              directly using the contact information below.
            </p>
            <p className="mt-4">
              Feel free to get in touch with us via email or phone.
            </p>
          </div>

          {/* Right Side - Image (5-second Delay) */}
          <div className="md:w-1/2 flex flex-col items-center mt-6 md:mt-0">
            {showImage && (
              <img
                src="https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Food Bowl"
                className="w-78 h-78 object-cover rounded-full transition-opacity duration-300 ease-in-out"
                onError={(e) => {
                  e.target.src = "fallback-image-url.jpg"; // Fallback
                }}
              />
            )}
            {showImage && (
              <p className="mt-4 text-gray-600 font-bold">
                Enjoy fresh and organic meals every day!
              </p>
            )}
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default ContactPage;
