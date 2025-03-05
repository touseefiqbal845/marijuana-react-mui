import React from "react";
import ProductImageSlider from "./Product";
import CustomHeader from "../Customheader/CustomHeader";
import ProductDesccription from "./ProductDescription";
import Layout from "../Layout";
import ProductSelection from "./ProductSelection";
import TabsDescription from "./TabsDescription";

const ProductPage = () => {
  return (
    <>
      <Layout>
        <div>
          <CustomHeader title="Product" breadcrumbs={["Home", "Product"]} />
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="w-full lg:w-[40%] space-y-6">
                <ProductImageSlider />
              </div>
              <div className="w-full lg:w-[40%]">
                <div className="sticky top-20 mt-8 space-y-6">
                  <ProductDesccription />
                </div>
              </div>
              <div className="w-full lg:w-[40%]">
                <div className="sticky top-20 mt-8 space-y-6">
                  <ProductSelection />
                </div>
              </div>
            </div>
            <div className="mt-16 mb-16">
              <TabsDescription />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default ProductPage;
