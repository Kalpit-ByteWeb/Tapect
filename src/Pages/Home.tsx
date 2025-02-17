import CompanySlider from "../components/layouts/CompanySlider";
import FeatureCardSection from "../components/layouts/FeatureCardSection";
import FeatureSection from "../components/layouts/FeatureSection";
import HeroBanner from "../components/layouts/HeroBanner";
import ProductShowCase from "../components/layouts/ProductShowCase";

interface ProductDataType {
  ProductImageUrl: string;
  ProductImageAlt: string;
  ProductName: string;
  ProductPrice: string;
  ButtonLabel: string;
  ButtonIcon: string;
  ButtonUrl: string;
}

// Define Productdatas array here
const Productdatas: ProductDataType[] = [
  {
    ProductImageUrl: "/Home/TapectRedCard.png",
    ProductImageAlt: "Tapect Red Card",
    ProductName: "Tapect PVC Cards",
    ProductPrice: "$29.00",
    ButtonLabel: "Buy Now",
    ButtonIcon: "/Icons/ButtonIconWhite.svg",
    ButtonUrl: "#",
  },
  {
    ProductImageUrl: "/Home/MetalCard.png",
    ProductImageAlt: "Tapect Metal Card",
    ProductName: "Tapect Metal Cards",
    ProductPrice: "$39.00",
    ButtonLabel: "Buy Now",
    ButtonIcon: "/Icons/ButtonIconWhite.svg",
    ButtonUrl: "#",
  },
  {
    ProductImageUrl: "/Home/WoodenCard.png",
    ProductImageAlt: "Tapect Wooden Card",
    ProductName: "Tapect Wooden Cards",
    ProductPrice: "$49.00",
    ButtonLabel: "Buy Now",
    ButtonIcon: "/Icons/ButtonIconWhite.svg",
    ButtonUrl: "#",
  },
];

const Home = () => {
  return (
    <>
      <HeroBanner
        classname="HeroBanner h-[900px]"
        Title="Upgrade to the Future of Networking with"
        TitleHighlight="Digital Business Cards"
        Description="Step into the future of networking with Tapect's digital business cards. Instantly share contact details, reduce paper waste, and enjoy seamless, eco-friendly connections with just a tap."
        ButtonLabel="Get Started Now"
        ButtonUrl="/"
        ButtonIcon="/Icons/ButtonIcon.svg"
        BannerImageUrl="/Home/DummyBanner.svg"
        BannerImageAlt="Hero Banner"
      />
      <CompanySlider />
      <FeatureSection
        title="One Tap, Endless Possibilities to"
        titleHighlight="Share Everything"
        description="Make a lasting impression with Tapect, the digital business card that revolutionizes networking. With just one tap, effortlessly share your business and contact information, social media links, and more. No app required."
        imageUrl="/Home/One-Tap-Endless-Possibilities-to-Share-Everything.svg"
        imageAlt="Image"
        buttonLabel="Get Started Now"
        buttonUrl="#"
        buttonIcon="/Icons/ButtonIconWhite.svg"
        layout="Horizontal"
      />

      {/* Container for the Vertical Feature Sections */}
      <div className="container mx-auto gap-6 flex flex-row">
        <div className="w-3/5">
          <FeatureSection
            title="One Tap, Endless Possibilities to"
            titleHighlight="Share Everything"
            description="Make a lasting impression with Tapect, the digital business card that revolutionizes networking. With just one tap, effortlessly share your business and contact information, social media links, and more. No app required."
            imageUrl="/Home/Customize-Your-Card-Your-Way.png"
            imageAlt="Image"
            layout="Vertical"
          />
        </div>
        <div className="w-2/5">
          <FeatureSection
            title="One Tap, Endless Possibilities to"
            titleHighlight="Share Everything"
            description="Make a lasting impression with Tapect, the digital business card that revolutionizes networking. With just one tap, effortlessly share your business and contact information, social media links, and more. No app required."
            imageUrl="/Home/The-only-business-card-you'll-ever-need.svg"
            imageAlt="Image"
            layout="Vertical"
          />
        </div>
      </div>
      <ProductShowCase
        Title="Explore Our Cutting-Edge Tapect Cards"
        TitleHighlight="Tapect Cards"
        Description="Discover the perfect Tapect card that matches your style and networking needs. From sleek PVC to premium metal and sustainable wood, make a lasting impression with every connection."
        Productdatas={Productdatas} // Pass the Productdatas array as a prop
        ViewProductBtnUrl="#"
        ViewProductBtnLabel="View More Products"
        ViewProductBtnIconUrl="/Icons/ButtonIcon.svg"
      />
      <FeatureCardSection />
    </>
  );
};

export default Home;
