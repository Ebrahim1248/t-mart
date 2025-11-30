import axios from "axios";
import React, { useEffect, useState } from "react";

function Blog() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get("https://dummyjson.com/products?limit=6")
      .then((res) => {
        setItems(res.data?.products || []);
      }).catch((err) => {
        console.error("Failed to fetch products:", err);
        setItems([]); // ensure items stays an array
      });
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8 text-center">T-Mart Blog</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="border rounded-lg overflow-hidden shadow bg-white"
          >
            <img
              src={item.thumbnail}
              alt={item.title}
              className="w-full lg:h-48 object-cover"
            />

            <div className="p-4">
              <h2 className="text-lg font-semibold">{item.title}</h2>

              <p className="text-gray-600 mt-2">
                {item.description.substring(0, 80)}...
              </p>

              <p className="text-sm text-gray-500 mt-3">
                Price: ${item.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog
