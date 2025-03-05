import React from "react";
import { Link } from "react-router-dom";

const WelcomeSection = () => {
    return (
        <section className="container mx-auto px-6 py-12 bg-white lg:mt-0 ">

            <div className="text-center">
                <h4 className="text-secondary font-medium">About Us</h4>
                <h2 className=" text-heading font-bold mt-2">WELCOME TO Marijuana STORE</h2>
                <div className="w-20 border-t-4 border-secondary my-6 mx-auto"></div>
                <p className="text-grayText text-p leading-normal mt-4 md:max-w-2xl mx-auto">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                    doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                    veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                <div className="relative w-full h-64 overflow-hidden rounded-lg">
                    <Link to="/product">
                        <img
                            src="https://themes.pixelstrap.com/multikart/assets/images/marijuana/banner/1.png"
                            alt="Banner 1"
                            className="w-full h-full object-fit transition-transform duration-300 hover:scale-105 hover:opacity-90 cursor-pointer"
                        />
                    </Link>

                </div>

                <div className="relative w-full h-64 overflow-hidden rounded-lg">
                    <Link to="/product">

                        <img
                            src="https://themes.pixelstrap.com/multikart/assets/images/marijuana/banner/2.png"
                            alt="Banner 2"

                            className="w-full h-full object-fit transition-transform duration-300 hover:scale-105 hover:opacity-90 cursor-pointer"
                        />
                    </Link>

                </div>
            </div>

        </section>
    );
};

export default WelcomeSection;
