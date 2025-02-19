import FAQSection from "../../components/layouts/FAQSection";
import HeroBanner from "../../components/layouts/HeroBanner";
import OrderingExperience from "../../components/layouts/OrderingExperience";
import ProductCard from "../../components/layouts/ProductCard";
import { faqData, IconListdatas } from "./ProductPagedata";

const Product = () => {
  return (
    <>
      <HeroBanner
        classname="HeroBanner h-[581px]"
        Title="Personalize Your Tapect Card Choose Your"
        TitleHighlight="Perfect Customization"
        Description="Design a Tapect card that's uniquely yours. From colors to logos, choose the customization options that best represent your brand and style for a standout networking experience."
      />
      <div className="container mx-auto gap-6 py-88 grid md:grid-cols-3 grid-cols-1">
        <ProductCard
          ProductImageUrl="/Home/TapectRedCard.png"
          ProductImageAlt="Tapect Red Card"
          ProductName="Tapect PVC Cards"
          ProductPrice="$29.00"
          ButtonLabel="Buy Now"
          ButtonIcon="/Icons/ButtonIconWhite.svg"
          ButtonUrl="#"
          layout="Products" // Use the alternate layout
        />
        <ProductCard
          ProductImageUrl="/Home/MetalCard.png"
          ProductImageAlt="Tapect Metal Card"
          ProductName="Tapect Metal Cards"
          ProductPrice="$39.00"
          ButtonLabel="Buy Now"
          ButtonIcon="/Icons/ButtonIconWhite.svg"
          ButtonUrl="#"
          layout="Products" // Use the alternate layout
        />
        <ProductCard
          ProductImageUrl="/Home/WoodenCard.png"
          ProductImageAlt="Tapect Wooden Card"
          ProductName="Tapect Wooden Card"
          ProductPrice="$49.00"
          ButtonLabel="Buy Now"
          ButtonIcon="/Icons/ButtonIconWhite.svg"
          ButtonUrl="#"
          layout="Products" // Use the alternate layout
        />
        <ProductCard
          ProductImageUrl="/Home/TapectRedCard.png"
          ProductImageAlt="Tapect Red Card"
          ProductName="Tapect PVC Cards"
          ProductPrice="$29.00"
          ButtonLabel="Buy Now"
          ButtonIcon="/Icons/ButtonIconWhite.svg"
          ButtonUrl="#"
          layout="Products" // Use the alternate layout
        />
        <ProductCard
          ProductImageUrl="/Home/MetalCard.png"
          ProductImageAlt="Tapect Metal Card"
          ProductName="Tapect Metal Cards"
          ProductPrice="$39.00"
          ButtonLabel="Buy Now"
          ButtonIcon="/Icons/ButtonIconWhite.svg"
          ButtonUrl="#"
          layout="Products" // Use the alternate layout
        />
        <ProductCard
          ProductImageUrl="/Home/WoodenCard.png"
          ProductImageAlt="Tapect Wooden Card"
          ProductName="Tapect Wooden Card"
          ProductPrice="$49.00"
          ButtonLabel="Buy Now"
          ButtonIcon="/Icons/ButtonIconWhite.svg"
          ButtonUrl="#"
          layout="Products" // Use the alternate layout
        />
        <ProductCard
          ProductImageUrl="/Home/TapectRedCard.png"
          ProductImageAlt="Tapect Red Card"
          ProductName="Tapect PVC Cards"
          ProductPrice="$29.00"
          ButtonLabel="Buy Now"
          ButtonIcon="/Icons/ButtonIconWhite.svg"
          ButtonUrl="#"
          layout="Products" // Use the alternate layout
        />
        <ProductCard
          ProductImageUrl="/Home/MetalCard.png"
          ProductImageAlt="Tapect Metal Card"
          ProductName="Tapect Metal Cards"
          ProductPrice="$39.00"
          ButtonLabel="Buy Now"
          ButtonIcon="/Icons/ButtonIconWhite.svg"
          ButtonUrl="#"
          layout="Products" // Use the alternate layout
        />
        <ProductCard
          ProductImageUrl="/Home/WoodenCard.png"
          ProductImageAlt="Tapect Wooden Card"
          ProductName="Tapect Wooden Card"
          ProductPrice="$49.00"
          ButtonLabel="Buy Now"
          ButtonIcon="/Icons/ButtonIconWhite.svg"
          ButtonUrl="#"
          layout="Products" // Use the alternate layout
        />
      </div>

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

export default Product;
