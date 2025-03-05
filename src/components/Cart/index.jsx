import React from "react";
import Layout from "../Layout";
import ShoppingCart from "./Cart";
import CustomHeader from "../Customheader/CustomHeader";

function CartPage() {
  return (
    <Layout>
      <div>
        <CustomHeader title="Cart" breadcrumbs={["Home", "Cart"]} />
        <ShoppingCart />
      </div>
    </Layout>
  );
}

export default CartPage;
