import HeroSection from "./HeroSection";
import BlogSection from "./BlogSection";
import ShopSection from "./ShopSection";
import WelcomeSection from "../Home/WelcomeSection";
import FeaturesSection from "../Home/FeaturedSection";
import ProductList from "../Home/ProductList";
import Layout from "../Layout";

function HomePage() {
  return (
    <Layout>
      <HeroSection />
      <WelcomeSection />
      <FeaturesSection />
      <ProductList />
      <ShopSection />
      <BlogSection />
    </Layout>
  );
}

export default HomePage;
