import React, { useState } from "react";
import { Heart, Plus } from "lucide-react";

const categories = ["All", "Pizza", "Noodles", "Burger", "Sushi"];

const foodItems = [
  {
    id: 1,
    name: "Beef Burger",
    desc: "Cheesy Mozarella",
    price: "$10.99",
    category: "Burger",
    img: "https://i.ibb.co/QMdSNYq/burger.png",
  },
  {
    id: 2,
    name: "Chopsticks Vegetables",
    desc: "Plate with chopsticks vegetables",
    price: "$10.99",
    category: "Noodles",
    img: "https://i.ibb.co/gvGhH5F/noodles.png",
  },
  {
    id: 3,
    name: "Fresh Sushi Set Table",
    desc: "Plate with sushi",
    price: "$10.99",
    category: "Sushi",
    img: "https://i.ibb.co/NK2cwYC/sushi.png",
  },
  {
    id: 4,
    name: "Pizza Filled",
    desc: "Pizza filled with tomatoes salami",
    price: "$10.99",
    category: "Pizza",
    img: "https://i.ibb.co/5Rjc7FF/pizza.png",
  },
  {
    id: 5,
    name: "Mexican Food",
    desc: "Delicious mexican food",
    price: "$10.99",
    category: "Burger",
    img: "https://i.ibb.co/nmhVXbH/mexican.png",
  },
  {
    id: 6,
    name: "Delicious Meal Go",
    desc: "Fresh, tasty meals on the go",
    price: "$10.99",
    category: "Pizza",
    img: "https://i.ibb.co/5M9qMWG/curry.png",
  },
  {
    id: 7,
    name: "Chicken",
    desc: "Tender meat enjoyed in countless",
    price: "$10.99",
    category: "Burger",
    img: "https://i.ibb.co/vJkC9nn/chicken.png",
  },
  {
    id: 8,
    name: "Noodles",
    desc: "Noodles are thin dough strands",
    price: "$10.99",
    category: "Noodles",
    img: "https://i.ibb.co/XJcpMwV/noodles2.png",
  },
];

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredItems =
    selectedCategory === "All"
      ? foodItems
      : foodItems.filter((item) => item.category === selectedCategory);

  return (
    <section className="min-h-screen bg-[#fef7f1] p-10">
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-900">Popular Items</h2>
        <p className="text-gray-500 mt-2">
          Savor rich flavors and delightful bites—every taste tells a story.
          Discover bold twists, new favorites, and unforgettable moments.
        </p>
      </div>

      {/* Categories */}
      <div className="flex justify-center gap-4 mb-8 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-5 py-2 rounded-full border transition ${
              selectedCategory === cat
                ? "bg-green-600 text-white border-green-600"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Food Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow-sm hover:shadow-md transition relative p-4"
          >
            {/* Favorite Icon */}
            <button className="absolute top-4 right-4 text-gray-400 hover:text-red-500">
              <Heart size={20} />
            </button>

            {/* Image */}
            <img
              src={item.img}
              alt={item.name}
              className="w-28 h-28 object-contain mx-auto"
            />

            {/* Info */}
            <div className="mt-4 text-center">
              <h3 className="font-semibold text-gray-900">{item.name}</h3>
              <p className="text-gray-500 text-sm">{item.desc}</p>
              <div className="flex justify-between items-center mt-4">
                <span className="font-bold text-gray-900">{item.price}</span>
                <button className="bg-orange-500 hover:bg-orange-600 text-white p-2 rounded-full">
                  <Plus size={18} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;
