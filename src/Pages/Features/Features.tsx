import FAQSection from "../../components/layouts/FAQSection";
import HeroBanner from "../../components/layouts/HeroBanner";
import OrderingExperience from "../../components/layouts/OrderingExperience";
import ProductShowCase from "../../components/layouts/ProductShowCase";
import TapectLayout from "../../components/layouts/TapectLayout";
import { Productdatas, IconListdatas, faqData } from "./FeaturesPageData";

const Features = () => {
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
      <div className="container mx-auto space-y-120 pt-120 pb-8">
        <TapectLayout
          ImageUrl="/Features/Lightning-Fast-Performance.png"
          ImageAlt="Lightning Fast Performance"
          Title="Lightning Fast Performance"
          Description="Experience lightning-fast performance with Tapect. Instantly share your contact details with a single tap, ensuring smooth, seamless, and hassle-free connections. Whether at an event or meeting, your networking will always be efficient and quick."
          ButtonUrl="/"
          ButtonIcon="/Icons/ButtonIconWhite.svg"
          ButtonLabel="Get Started Now"
        />
        <TapectLayout
          ImageUrl="/Features/Lightning-Fast-Performance.png"
          ImageAlt="Manage Your Digital Cards Effortlessly"
          Title="Manage Your Digital Cards Effortlessly"
          Description="Effortlessly manage all your digital cards from a centralized platform. Update your contact details, customize the design to match your brand, and track card usage in real-time, giving you full control over your networking and connections."
          ButtonUrl="/"
          ButtonIcon="/Icons/ButtonIconWhite.svg"
          ButtonLabel="Get Started Now"
          layout="Reverse"
        />
      </div>

      <ProductShowCase
        Title="Explore tapect"
        TitleHighlight="Solutions"
        Description="Discover our range of digital business cards in premium materials like PVC, bamboo wood, and metal. Elevate your networking with eco-friendly, stylish, and durable options."
        Productdatas={Productdatas}
        ViewProductBtnUrl="#"
        ViewProductBtnLabel="View More Products"
        ViewProductBtnIconUrl="/Icons/ButtonIcon.svg"
      />

      <OrderingExperience
        Title="Seamless Ordering Experience"
        Description="With concepts in hand, we meticulously design, refining every detail to align with your vision and objectives."
        Iconlistdatas={IconListdatas}
        layout="WithoutImage"
        ViewProductBtnUrl="#"
        ViewProductBtnLabel="View More Product"
        ViewProductBtnIconUrl="/Icons/ButtonIcon.svg"
      />

      <FAQSection
        Title="Frequently Asked"
        TitleHighlight="Questions"
        ImageUrl="/Home/FAQImage.png"
        ImageAlt="FAQ Image"
        Faq={faqData}
      />
    </>
  );
};

export default Features;
