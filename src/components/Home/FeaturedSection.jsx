import React from 'react'

const FeatureCard = ({ icon, title, description }) => {
    return (
        <div className="bg-white shadow-lg rounded-lg p-6 text-center border border-gray-200 transition-transform duration-300 hover:scale-105">
            <div className="flex justify-center mb-4">

                <svg
                    className="w-12 h-12 text-secondary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d={"M5 13l4 4L19 7"}
                    ></path>
                </svg>
            </div>
            <h4 className=" font-bold text-heading">{title}</h4>
            <p className="text-grayText text-p mt-2">{description}</p>
        </div>
    );
};

const FeaturesSection = () => {
    const features = [
        {
            icon: "M5 13l4 4L19 7",
            title: "19+ Only",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem blanditiis cupiditate deleniti",
        },
        {
            icon: "https://themes.pixelstrap.com/multikart/assets/images/marijuana/icon/2.png",
            title: "30g Limit",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem blanditiis cupiditate deleniti",
        },
        {
            icon: "https://themes.pixelstrap.com/multikart/assets/images/marijuana/icon/3.png",
            title: "Trusted Source",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem blanditiis cupiditate deleniti",
        },
    ];

    return (
        <div className="bg-primary py-12">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <FeatureCard key={index} {...feature} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FeaturesSection;
