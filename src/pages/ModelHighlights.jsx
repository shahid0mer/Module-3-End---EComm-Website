import React from "react";

const ModelHighlights = () => {
  return (
    <div>
      <section className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-10">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {["Sneakers", "Headphones", "Smartwatch"].map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition"
              >
                <div className="h-40 bg-gray-200 mb-4 rounded"></div>
                <h3 className="text-xl font-semibold">{item}</h3>
                <p className="text-gray-600 mt-2">$99.99</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ModelHighlights;
