import React from "react";
import { Link } from "react-router-dom";
import { Button, Image } from "../../libs/Index";

interface ProductDataType {
  ProductImageUrl: string;
  ProductImageAlt: string;
  ProductName: string;
  ProductPrice: string;
  ButtonLabel: string;
  ButtonIcon: string;
  ButtonUrl: string;
  layout?: "ProductShowcase" | "Products";
}

const ProductCard: React.FC<ProductDataType> = ({
  ProductImageUrl,
  ProductImageAlt,
  ProductName,
  ProductPrice,
  ButtonLabel,
  ButtonIcon,
  ButtonUrl,
  layout = "ProductShowcase",
}) => {
  const backgroundColor =
    layout === "Products" ? "bg-[#F5F8FE]" : "bg-[#FFFFFF1A]";
  const borderColor =
    layout === "Products" ? "border-none" : "border-[#FFFFFF1A]";
  const fontColor = layout === "Products" ? "text-secondary" : "text-white";
  return (
    <div className={`${backgroundColor} p-7 space-y-7 rounded-20`}>
      <Image src={ProductImageUrl} alt={ProductImageAlt} />
      <div className={`space-y-4 border-t ${borderColor} pt-4`}>
        <div className="space-y-2">
          <h3 className={`Heading-20 ${fontColor}`}>{ProductName}</h3>
          <h4 className={`Heading-20 ${fontColor}`}>{ProductPrice}</h4>
        </div>

        <Button type="button" className="">
          <Link
            to={ButtonUrl}
            className="btn-primary px-4 py-2 flex items-center gap-[6px]">
            {ButtonLabel}
            <Image src={ButtonIcon} alt="Button Icon" />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
