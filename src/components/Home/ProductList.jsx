import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaHeart, FaShoppingCart, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const products = [
    {
        image: "https://cdn.mos.cms.futurecdn.net/fhLfnNSZdVKGXJgaURaVBP-1280-80.jpg.webp",
        name: "Black Mojito",
        price: "220.00",
        oldPrice: "230.00",
        rating: 4,
    },
    {
        image: "https://cdn.mos.cms.futurecdn.net/fhLfnNSZdVKGXJgaURaVBP-1280-80.jpg.webp",
        name: "White Cheery Glato",
        price: "350.00",
        rating: 4,
    },
    {
        image: "https://themes.pixelstrap.com/multikart/assets/images/marijuana/pro/24.jpg",
        name: "Almond Mochi",
        price: "225.50",
        rating: 4,
    },
];

const ProductCard = ({ product }) => {
    return (
        <Link to='/product'>

        <div className="relative group border rounded-lg overflow-hidden shadow-md hover:shadow-lg bg-white w-full sm:w-[350px]">
            <div className="relative w-full h-64">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="bg-white/90 text-secondary p-4 rounded-full transition duration-300 hover:bg-secondary hover:text-white">
                        <FaSearch size={15} />
                    </button>
                </div>

                <div className="absolute bottom-2 left-2 right-2 flex justify-around opacity-0 group-hover:opacity-100 translate-y-5 group-hover:translate-y-0 transition-all duration-300 ease-out">
                    <button className="bg-white/90 text-secondary p-4 rounded-full transition duration-300 hover:bg-secondary hover:text-white">
                        <FaHeart size={15} />
                    </button>
                    <button className="bg-white/90 text-secondary px-8 py-3 transition duration-300 hover:bg-secondary hover:text-white">
                        Add to Cart
                    </button>
                    <button className="bg-white/90 text-secondary p-4 rounded-full transition duration-300 hover:bg-secondary hover:text-white">
                        <FaShoppingCart size={15} />
                    </button>
                </div>
            </div>

            <div className="p-4 text-center">
                <div className="flex justify-center space-x-1 text-yellow-500 mb-2">
                    {[...Array(5)].map((_, i) => (
                        <span key={i} className={i < product.rating ? "text-yellow-500" : "text-gray-300"}>★</span>
                    ))}
                </div>

                <h3 className="text-lg font-semibold text-heading">{product.name}</h3>
                <p className="text-grayText">
                    <span className="text-black font-bold">${product.price}</span>
                    {product.oldPrice && (
                        <span className="text-gray-500 line-through ml-2">${product.oldPrice}</span>
                    )}
                </p>
            </div>
        </div>
        </Link>

    );
};

const ProductList = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            if (containerRef.current) {
                let productWidth = containerRef.current.firstChild.clientWidth + 24;
                containerRef.current.scrollBy({ left: productWidth, behavior: "smooth" });
                if (containerRef.current.scrollLeft + containerRef.current.clientWidth >= containerRef.current.scrollWidth) {
                    containerRef.current.scrollTo({ left: 0, behavior: "smooth" });
                }
            }
        }, 2500);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="overflow-hidden px-8 sm:px-16 lg:px-16 xl:px-72 py-8 bg-white">
            <div className="text-center">
                <h4 className="text-secondary font-medium">Special Offer</h4>
                <h2 className=" text-heading font-bold mt-2">NEW PRODUCTS</h2>
                <div className="w-20 border-t-4 border-secondary my-6 mx-auto"></div>
            </div>

            <motion.div
                ref={containerRef}
                className="flex space-x-6 overflow-x-auto scrollbar-hide scroll-smooth py-5 snap-x snap-mandatory"
            >
                {products.concat(products).map((product, index) => (
                    <motion.div
                        key={index}
                        className="snap-center flex-shrink-0 w-[100%] sm:w-[60%] md:w-[50%] lg:w-[350px]"
                    >
                        <ProductCard product={product} />
                    </motion.div>
                ))}
            </motion.div>

        </div>
    );
};

export default ProductList;
