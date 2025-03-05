import React from "react";
import Layout from "../Layout";
import ShippingAddress from "./ShippingAddress";
import BillingAddress from "./BillingAddress";
import DeliveryOptions from "./DeliveryOptions";
import PaymentOption from "./PaymentOptions";
import SummaryOrder from "./SummryOrder";
import BillingSummary from "./BillingSummary";
import CustomHeader from "../Customheader/CustomHeader";

const CheckoutPage = () => {
  return (
    <Layout>
      <div>
        <CustomHeader title="Checkout" breadcrumbs={["Home", "Checkout"]} />
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="w-full lg:w-[60%] space-y-6">
              <ShippingAddress />
              <BillingAddress />
              <DeliveryOptions />
              <PaymentOption />
            </div>
            <div className="w-full lg:w-[40%]">
              <div className="sticky top-20 mt-8 space-y-6">
                <SummaryOrder />
                <BillingSummary />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CheckoutPage;
