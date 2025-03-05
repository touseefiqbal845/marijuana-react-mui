import React from "react";
import { motion } from "framer-motion";
import TouseefRajput from "touseefiqbal";

const BlogSection = () => {
    const blogs = [
        {
            id: 1,
            image: "https://assets.epicurious.com/photos/5763132cff66dde1456dfed0/16:9/w_1920,c_limit/Mint_Leaves.jpg",
            date: "25 January 2018",
            title: "Lorem Ipsum Dolor Sit Consectetur Adipiscing Elit,",
            author: "John Dio",
            comments: 2,
        },
        {
            id: 2,
            image: "https://assets.epicurious.com/photos/5763132cff66dde1456dfed0/16:9/w_1920,c_limit/Mint_Leaves.jpg",
            date: "25 January 2018",
            title: "Lorem Ipsum Dolor Sit Consectetur Adipiscing Elit,",
            author: "John Dio",
            comments: 2,
        },
        {
            id: 3,
            image: "https://assets.epicurious.com/photos/5763132cff66dde1456dfed0/16:9/w_1920,c_limit/Mint_Leaves.jpg",
            date: "25 January 2018",
            title: "Lorem Ipsum Dolor Sit Consectetur Adipiscing Elit,",
            author: "John Dio",
            comments: 2,
        },
    ];

    const logos = [
        "https://themes.pixelstrap.com/multikart/assets/images/logos/8.png",
        "https://themes.pixelstrap.com/multikart/assets/images/logos/12.png",
        "https://themes.pixelstrap.com/multikart/assets/images/logos/10.png",
        "https://themes.pixelstrap.com/multikart/assets/images/logos/11.png",
        "https://themes.pixelstrap.com/multikart/assets/images/logos/12.png",
        "https://themes.pixelstrap.com/multikart/assets/images/logos/12.png",
    ];

    return (
        <>
            <div className="overflow-hidden px-8 py-8 bg-white">

                <div className="text-center">
                    <h4 className="text-secondary font-medium">Special offer</h4>
                    <h2 className="text-h2 text-heading font-bold mt-2">NEW PRODUCTS</h2>
                    <div className="w-20 border-t-4 border-secondary my-6 mx-auto"></div>


                </div>
                <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 cursor-pointer">
                    {blogs.map((blog) => (
                        <motion.div
                            key={blog.id}
                            className="bg-white shadow-lg rounded-lg overflow-hidden"
                            whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)" }}
                            transition={{ duration: 0.3 }}
                        >
                            <img src={blog.image} alt="Blog" className="w-full h-48 object-cover" />
                            <div className="p-4 text-center">
                                <h4 className="text-secondary font-medium">{blog.date}</h4>
                                <h4 className="text-heading  font-bold  tracking-wider mt-6">{blog.title}</h4>
                                <div className="w-20 border-t-4 border-secondary my-6 mx-auto"></div>
                                <p className="text-grayText text-p ">
                                    by: {blog.author}, {blog.comments} Comment
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>


            <div className="overflow-hidden bg-primary py-12">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 place-items-center">
                        {logos.map((src, index) => (
                            <motion.img
                                key={index}
                                src={src}
                                alt="Logo"
                                className="w-24 sm:w-28 md:w-32 h-auto object-contain cursor-pointer"
                                initial={{ opacity: 0.5, scale: 0.9 }}
                                animate={{ opacity: 0.5, scale: 1 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                whileHover={{ opacity: 1, scale: 1.1, transition: { duration: 0.2 } }}
                            />
                        ))}
                    </div>
                </div>
            </div>






        </>

    );
};

export default BlogSection;
