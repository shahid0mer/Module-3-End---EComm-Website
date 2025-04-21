import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addProductToCart } from "../features/cart/cartSlice";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatchVal = useDispatch()

  useEffect(() => {
    const fetchData = async function getData() {
      try {
        setLoading(true);
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  console.log(products);

  if (loading) {
    return (
      <div className="container mx-auto p-4 flex items-center justify-center min-h-dvh w-[100%]">
        <div className="text-center">
          <div
            className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-black border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status"
          >
            <span className=" !absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Loading...
            </span>
          </div>
          <p className="mt-2  !text-black">Loading products...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap justify-center  pt-20 -z-20 mt-20">
      {products.map((product) => (
        <Link
          to={`/products/${product.id}`}
          key={product.id}
          className=" flex gap-10   justify-center p-4 items-stretch hover:shadow-l hover:scale-105 transition duration-300 "
        >
          <div className="max-w-sm w-full bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all ">
            <div className="relative mt-2.5">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-54 object-contain "
              />
              <span className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                Sale
              </span>
            </div>

            <div className="p-5 space-y-4">
              <div>
                <h3 className="text-xl font-bold text-gray-900 line-clamp-1">
                  {product.title}
                </h3>
                <p className="text-gray-500 mt-1 line-clamp-2">
                  {product.description}
                </p>
              </div>

              <div className="flex justify-between items-center">
                <div className="space-y-1">
                  <p className="text-2xl font-bold text-gray-900">
                    ${product.price}
                  </p>
                  <p className="text-sm text-gray-500 line-through">$69.99</p>
                </div>

                <div className="flex items-center gap-1">
                  <div className="text-yellow-400"></div>
                  <div className="text-gray-300"></div>
                  <span className="text-sm text-gray-600 ml-1"></span>
                </div>
              </div>

              <button className="!w-full !bg-cyan-600 !hover:bg-cyan-700 active:scale-90  !text-white !font-medium !py-3 !rounded-lg !transition-all !outline-none"
              onClick={(event) => {
                event.preventDefault()
                event.stopPropagation()
                dispatchVal(addProductToCart(product))
              }}>
                Add to Cart
              </button>
              <button className="!w-full !bg-cyan-600 !hover:bg-cyan-700 active:scale-90  !text-white !font-medium !py-3 !rounded-lg !transition-all !outline-none">
                Buy Now
              </button>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Products;
