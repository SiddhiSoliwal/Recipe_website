// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import RecipeCard from '../Component/RecipeCard';
// import { Search, Filter } from 'lucide-react';

// const Recipes = () => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [selectedCategory, setSelectedCategory] = useState('All');
//   const [youtubeResults, setYoutubeResults] = useState([]); // State for YouTube results

//   const categories = ['All', 'Breakfast', 'Lunch', 'Dinner', 'Desserts'];

//   const recipes = [
//     {
//       title: "Classic Italian Pasta",
//       image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&q=80&w=1920",
//       time: "30 mins",
//       servings: 4,
//       difficulty: "Easy"
//     },
//     {
//       title: "Grilled Salmon",
//       image: "https://images.unsplash.com/photo-1485921325833-c519f76c4927?auto=format&fit=crop&q=80&w=1920",
//       time: "25 mins",
//       servings: 2,
//       difficulty: "Medium"
//     },
//     {
//       title: "Chocolate Cake",
//       image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=1920",
//       time: "45 mins",
//       servings: 8,
//       difficulty: "Hard"
//     },
//   ];

//   const fetchYoutubeData = async () => {
//     const apiKey = 'AIzaSyC9OIOd-fL17bhyt1Noyd02CVEQGIkU7Nw'; // Replace with your actual YouTube API key
//     const query = searchQuery || 'recipes'; // Default search query
//     const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&key=${apiKey}`;

//     try {
//       const response = await fetch(url);
//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }
//       const data = await response.json();
//       console.log('YouTube API Response:', data);
//       setYoutubeResults(data.items || []);
//     } catch (error) {
//       console.error('Error fetching YouTube data:', error);
//       alert('Failed to fetch YouTube data. Please check your API key or internet connection.');
//     }
//   };

//   return (
//     <div className="pt-16">
//       {/* Search and Filter Section */}
//       <section className="bg-orange-50 py-16">
//         <div className="max-w-7xl mx-auto px-4">
//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="text-4xl font-bold text-center text-gray-800 mb-8"
//           >
//             Explore Our Recipes
//           </motion.h1>
          
//           <div className="flex flex-col md:flex-row gap-4 mb-8">
//             <motion.div whileHover={{ scale: 1.02 }} className="flex-1 relative">
//               <input
//                 type="text"
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 placeholder="Search recipes or YouTube videos..."
//                 className="w-full px-6 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
//               />
//               <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
//             </motion.div>
            
//             <motion.div whileHover={{ scale: 1.02 }} className="flex items-center gap-2 bg-white px-6 py-3 rounded-full border border-gray-300">
//               <Filter className="text-gray-400" />
//               <select
//                 value={selectedCategory}
//                 onChange={(e) => setSelectedCategory(e.target.value)}
//                 className="bg-transparent focus:outline-none"
//               >
//                 {categories.map((category) => (
//                   <option key={category} value={category}>{category}</option>
//                 ))}
//               </select>
//             </motion.div>

//             <button
//               className="bg-orange-500 text-white px-6 py-3 rounded-full"
//               onClick={fetchYoutubeData}
//             >
//               Search YouTube
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Recipes Grid */}
//       <section className="py-16">
//         <div className="max-w-7xl mx-auto px-4">
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
//           >
//             {recipes.map((recipe, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: index * 0.1 }}
//               >
//                 <RecipeCard {...recipe} />
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* YouTube Results */}
//       <section className="py-16">
//         <div className="max-w-7xl mx-auto px-4">
//           <motion.h2
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             className="text-3xl font-bold text-gray-800 mb-4"
//           >
//             YouTube Video Results
//           </motion.h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {youtubeResults.map((video, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: index * 0.1 }}
//               >
//                 <div className="bg-white border border-gray-300 rounded-lg shadow-md overflow-hidden">
//                   <img
//                     src={video.snippet.thumbnails.high.url}
//                     alt={video.snippet.title}
//                     className="w-full h-48 object-cover"
//                   />
//                   <div className="p-4">
//                     <h3 className="font-bold text-lg">{video.snippet.title}</h3>
//                     <p className="text-gray-500">{video.snippet.channelTitle}</p>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Recipes;

// import React, { useState, useEffect } from 'react';
// import { Search, Filter, ChefHat } from 'lucide-react';

// // Highlight: Replace with your YouTube API key
// const YOUTUBE_API_KEY = 'AIzaSyC9OIOd-fL17bhyt1Noyd02CVEQGIkU7Nw';

// interface Video {
//   id: string;
//   title: string;
//   thumbnail: string;
//   channelTitle: string;
// }

// interface Category {
//   name: string;
//   query: string;
//   active: boolean;
// }

// function App() {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [videos, setVideos] = useState<Video[]>([]);
//   const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);
//   const [loading, setLoading] = useState(false);
//   const [categories, setCategories] = useState<Category[]>([
//     { name: 'All Types', query: '', active: true },
//     { name: 'Appetizers', query: 'appetizer', active: false },
//     { name: 'Main Courses', query: 'main course', active: false },
//     { name: 'Salads & Sides', query: 'salad side dish', active: false },
//     { name: 'Vegetarian Delights', query: 'vegetarian', active: false },
//     { name: 'Desserts & Sweets', query: 'dessert', active: false },
//     { name: 'Healthy Eats', query: 'healthy', active: false },
//     { name: 'Quick & Easy Supper', query: 'quick easy dinner', active: false },
//   ]);

//   const ingredients = [
//     'Chicken', 'Beef', 'Fish', 'Vegetables', 'Pasta',
//     'Rice', 'Eggs', 'Cheese', 'Chocolate', 'Fruits'
//   ];

//   const searchVideos = async (customQuery?: string) => {
//     setLoading(true);
//     try {
//       const activeCategory = categories.find(c => c.active);
//       let query = customQuery || searchQuery || '';
      
//       // Add category to query if not "All Types"
//       if (activeCategory && activeCategory.name !== 'All Types') {
//         query = ${query} ${activeCategory.query};
//       }
      
//       // Add "recipe" to query
//       query = ${query} recipe;
      
//       // Add ingredients if selected
//       if (selectedIngredients.length > 0) {
//         query += ` with ${selectedIngredients.join(' ')}`;
//       }

//       const response = await fetch(
//       https:www.googleapis.com/youtube/v3/search?part=snippet&maxResults=9&q=${encodeURIComponent(query.trim())}&type=video&key=${YOUTUBE_API_KEY}
//       );
      
//       const data = await response.json();
      
//       const formattedVideos = data.items.map((item: any) => ({
//         id: item.id.videoId,
//         title: item.snippet.title,
//         thumbnail: item.snippet.thumbnails.medium.url,
//         channelTitle: item.snippet.channelTitle,
//       }));
      
//       setVideos(formattedVideos);
//     } catch (error) {
//       console.error('Error fetching videos:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const toggleIngredient = (ingredient: string) => {
//     setSelectedIngredients(prev =>
//       prev.includes(ingredient)
//         ? prev.filter(i => i !== ingredient)
//         : [...prev, ingredient]
//     );
//   };

//   const handleCategoryClick = (clickedCategory: string) => {
//     setCategories(prev => prev.map(category => ({
//       ...category,
//       active: category.name === clickedCategory
//     })));
    
//     const category = categories.find(c => c.name === clickedCategory);
//     if (category) {
//       searchVideos(category.query);
//     }
//   };

//   useEffect(() => {
//     const debounce = setTimeout(() => {
//       searchVideos();
//     }, 500);
//     return () => clearTimeout(debounce);
//   }, [searchQuery, selectedIngredients]);

//   // Initial load of videos
//   useEffect(() => {
//     searchVideos();
//   }, []);

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Hero Banner */}
//       <div className="relative h-[300px] overflow-hidden">
//         <img
//           src="https://images.unsplash.com/photo-1543353071-873f17a7a088?auto=format&fit=crop&w=2000&q=80"
//           alt="Delicious food"
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-black bg-opacity-50" />
//         <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
//           <h1 className="text-4xl md:text-5xl font-bold mb-4">Explore</h1>
//           <p className="text-2xl md:text-3xl">
//             <span className="text-orange-400 font-semibold">Culinary</span> Insights
//           </p>
//         </div>
//       </div>

//       {/* Header */}
//       <header className="bg-white shadow-sm sticky top-0 z-10">
//         <div className="max-w-7xl mx-auto px-4 py-6">
//           <div className="flex items-center gap-2">
//             <ChefHat className="w-8 h-8 text-orange-500" />
//             <h2 className="text-2xl font-bold text-gray-900">Recipe Video Search</h2>
//           </div>
//         </div>
//       </header>

//       {/* Main Content */}
//       <main className="max-w-7xl mx-auto px-4 py-8">
//         {/* What to Cook Section */}
//         <div className="mb-8">
//           <h2 className="text-2xl font-semibold mb-4">What to <span className="text-orange-500">Cook</span>?</h2>
//           <div className="flex flex-wrap gap-3">
//             {categories.map((category) => (
//               <button
//                 key={category.name}
//                 onClick={() => handleCategoryClick(category.name)}
//                 className={`px-4 py-2 rounded-full text-sm transition-colors ${
//                   category.active
//                     ? 'bg-gray-900 text-white'
//                     : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                 }`}
//               >
//                 {category.name}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Search Bar */}
//         <div className="relative mb-8">
//           <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//             <Search className="h-5 w-5 text-gray-400" />
//           </div>
//           <input
//             type="text"
//             className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
//             placeholder="Search for recipes..."
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//           />
//         </div>

//         {/* Ingredients Filter */}
//         <div className="mb-8">
//           <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
//             <Filter className="w-5 h-5" />
//             Filter by Ingredients
//           </h2>
//           <div className="flex flex-wrap gap-2">
//             {ingredients.map((ingredient) => (
//               <button
//                 key={ingredient}
//                 onClick={() => toggleIngredient(ingredient)}
//                 className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
//                   ${selectedIngredients.includes(ingredient)
//                     ? 'bg-orange-500 text-white'
//                     : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
//                   }`}
//               >
//                 {ingredient}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Videos Grid */}
//         {loading ? (
//           <div className="flex justify-center items-center h-64">
//             <div className="animate-spin rounded-full h-12 w-12 border-4 border-orange-500 border-t-transparent"></div>
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {videos.map((video) => (
//               <a
//                 key={video.id}
//                 href={`https://www.youtube.com/watch?v=${video.id}`}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
//               >
//                 <img
//                   src={video.thumbnail}
//                   alt={video.title}
//                   className="w-full aspect-video object-cover"
//                 />
//                 <div className="p-4">
//                   <h3 className="font-medium text-gray-900 mb-1 line-clamp-2">
//                     {video.title}
//                   </h3>
//                   <p className="text-sm text-gray-500">{video.channelTitle}</p>
//                 </div>
//               </a>
//             ))}
//           </div>
//         )}

//         {videos.length === 0 && !loading && (
//           <div className="text-center text-gray-500 mt-8">
//             No videos found. Try a different search term or category.
//           </div>
//         )}
//       </main>
//     </div>
//   );
// }

// export default App; 

















import React, { useState } from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion

const YouTubePlayer = () => {
  const [selectedVideo, setSelectedVideo] = useState(null); // State to store selected video ID
  const [youtubeResults, setYoutubeResults] = useState([]); // State for YouTube API results
  const [searchQuery, setSearchQuery] = useState(''); // Search query
  const [loading, setLoading] = useState(false); // Loading state for API calls
  const [selectedRecipe, setSelectedRecipe] = useState(""); // State for selected recipe

  const apiKey = 'AIzaSyC9OIOd-fL17bhyt1Noyd02CVEQGIkU7Nw'; // Replace with your actual YouTube API key

  // Fetch videos from the YouTube Data API
  const fetchYouTubeVideos = async () => {
    if (!searchQuery) {
      alert('Please enter a search query.');
      return;
    }
    setLoading(true);
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchQuery}&type=video&maxResults=5&key=${apiKey}`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      console.log('YouTube API Response:', data);
      setYoutubeResults(data.items || []); // Ensure it won't fail if items is undefined
    } catch (error) {
      console.error('Error fetching YouTube data:', error);
      alert('Failed to fetch YouTube data. Please check your API key or internet connection.');
    } finally {
      setLoading(false);
    }
  };

  const recipes = {
    Panner: "To make a delicious paneer sabji, start by heating oil in a pan and adding a teaspoon of cumin seeds until they begin to splutter. Then, add finely chopped onions, garlic, and ginger; sauté them until the onions turn golden brown. Next, incorporate chopped tomatoes along with spices like turmeric, red chili powder, coriander powder, and salt, cooking the mixture until it transforms into a thick, fragrant base. Add the paneer cubes to the gravy and allow them to soak up the flavors over a few minutes. Finally, garnish with fresh coriander leaves and serve the sabji hot with your favorite bread or rice.",
    Aloo: "To make aloo ki sabji, start by boiling potatoes until they are soft and cut them into cubes. In a pan, heat a little oil and add cumin seeds until they splutter. Then, add finely chopped onions, green chilies, and a pinch of salt, cooking until the onions turn slightly golden. Mix in ginger, garlic, turmeric, red chili powder, and coriander powder, and let the spices bloom for a minute. Finally, add the potato cubes, stir well to coat them in the spices, let the flavors blend on low heat, and garnish with fresh coriander before serving.",
    Bhindi: "Start by washing and slicing fresh okra into rounds. Heat oil in a pan and add a few cumin seeds until they start to sizzle, then add finely chopped onions and sauté until soft. Add the okra along with turmeric, red chili powder, salt, and a little chopped garlic, stirring gently to combine and avoid mushy okra. Continue cooking on medium heat until the okra is tender and the spices are well blended. A light squeeze of lemon juice or a sprinkle of amchur (dry mango powder) at the end can add a refreshing tang before serving..",
    "Sev Tamatar ": "For sev tamatar, boil tomatoes until they are soft, peel them if desired, and roughly mash them in a bowl. In a pan, heat oil and add cumin seeds and a pinch of asafoetida (hing) along with finely chopped garlic until they sizzle. Add the tomato mash to the pan along with salt and red chili powder, cooking until the mixture thickens into a chunky sauce. Remove from heat, and just before serving, sprinkle a generous handful of crispy sev and a pinch of chaat masala to add texture and tang. Enjoy it as a vibrant side dish or snack.",
    Chole: "Soak chickpeas overnight and boil them until they are soft (or use canned chickpeas for a quicker option). In a pan, heat oil and fry cumin seeds, chopped onions, ginger, and garlic until the onions are translucent. Add chopped tomatoes along with turmeric, garam masala, coriander, and red chili powder and cook until the oil begins to separate. Stir in the chickpeas and let the curry simmer so that all the spices blend together, creating a thick, flavorful gravy. Garnish with fresh cilantro, and serve with rice or warm bhature.",
    Bhel: "Bhel is a popular Indian street snack celebrated for its tangy, spicy, and crunchy flavors. To make bhel, start with a generous bowl of puffed rice as the base. Add finely chopped onions, tomatoes, and boiled potatoes to provide texture, then toss in roasted peanuts and crisp sev for an extra crunch. Drizzle over tangy tamarind and fresh coriander-mint chutneys, and finish with a sprinkle of chaat masala, salt, and a squeeze of lemon juice. Mix everything well just before serving to ensure every bite bursts with a perfect balance of flavors and textures.",
    Chocolate: "For a simple chocolate dessert, chop your favorite dark chocolate into pieces and melt it gently using a double boiler with a splash of heavy cream. Stir continuously until the mixture is smooth and shiny. If you like it sweeter, add a bit of sugar and a pinch of salt to balance the rich chocolate flavor. Once melted, let the mixture cool slightly before drizzling over ice cream, cake, or fresh fruits. This quick preparation creates a delectable treat perfect for any occasion.",
   
  };

  return (
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
              className="text-4xl font-bold text-black mb-4"
            >
              Help you to make Delicious Food
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

      {/* Recipe Filter Section */}
      <RecipeFilter recipes={recipes} setSelectedRecipe={setSelectedRecipe} selectedRecipe={selectedRecipe} />

      {/* YouTube Video Search Section */}
      <div className="min-h-screen bg-yellow-100 p-6">
        <h1 className="text-6xl font-bold text-center mb-4">
          <br />
          Search, <span className="text-yellow-500">And the Answer</span> will find you!
        </h1> <br />
        <div className="flex items-center justify-center gap-4 mb-6">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search YouTube videos..."
            className="px-4 py-2 border border-black-300 rounded-md w-1/2 focus:ring-2 focus:ring-black-900 focus:outline-none"
          />
          <button onClick={fetchYouTubeVideos} className="bg-yellow-500 text-white px-7 py-2 rounded-md">
            Search
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {loading ? (
            <p className="text-center col-span-full">Loading...</p>
          ) : (
            youtubeResults.map((video) => (
              <button
                key={video.id.videoId}
                onClick={() => setSelectedVideo(video.id.videoId)}
                className="bg-white border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition"
              >
                <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="font-bold text-lg">{video.snippet.title}</h3>
                  <p className="text-sm text-gray-500">{video.snippet.channelTitle}</p>
                </div>
              </button>
            ))
          )}
        </div>

        {selectedVideo && (
          <div className="flex justify-center">
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${selectedVideo}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg shadow-lg"
            ></iframe>
          </div>
        )}
      </div>
    </div>
  );
};

const RecipeFilter = ({ recipes, setSelectedRecipe, selectedRecipe }) => (
  <div className="p-6 bg-[#fff] min-h-screen">
    <center> <h2 className="text-5xl font-bold text-gray-800"> <br />
            Recipe   <span className="text-yellow-500">Filter</span> For You
          </h2></center> <br /><br /><br />
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {Object.keys(recipes).map((recipeKey) => (
        <button
          key={recipeKey}
          onClick={() => setSelectedRecipe(recipeKey)}
          className={`px-4 py-2 rounded-lg ${selectedRecipe === recipeKey ? 'bg-yellow-500 text-white' : 'bg-white text-black'} border border-black-300 shadow-md`}
        >
          {recipeKey}
        </button>
      ))}
    </div>

    {selectedRecipe && (
      <div className="mt-6 bg-yellow p-4 rounded-lg shadow-md">
        <h2 className="text-4xl font-bold mb-2">{selectedRecipe}</h2>
        <p>{recipes[selectedRecipe]}</p>
      </div>
    )}
  </div>
);

export default YouTubePlayer;

