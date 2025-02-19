import React from "react";
import { Link } from "react-router-dom";
import { Button, Image } from "../../libs/Index";
import ProductCard from "./ProductCard";

interface ProductShowCaseType {
  Title: string;
  TitleHighlight: string;
  Description: string;
  Productdatas: ProductDataType[];
  ViewProductBtnUrl: string;
  ViewProductBtnLabel: string;
  ViewProductBtnIconUrl: string;
}

interface ProductDataType {
  ProductImageUrl: string;
  ProductImageAlt: string;
  ProductName: string;
  ProductPrice: string;
  ButtonLabel: string;
  ButtonIcon: string;
  ButtonUrl: string;
}

const ProductShowCase: React.FC<ProductShowCaseType> = ({
  Title,
  TitleHighlight,
  Description,
  Productdatas,
  ViewProductBtnUrl,
  ViewProductBtnLabel,
  ViewProductBtnIconUrl,
}) => {
  return (
    <section className="py-88 relative">
      <div className="absolute right-0 top-0">
        <Image src="/Icons/tapect-design.svg" alt="tapect design" />
      </div>
      <div className="lg:w-[1700px] mx-auto bg-secondary rounded-20">
        <div className="container mx-auto py-12 space-y-12">
          <div className="flex flex-col items-center">
            <h2 className="text-white text-center Title-60 mb-4">
              {Title}
              <span className="text-primary">{TitleHighlight}</span>
            </h2>
            <p className="Description-18 text-center max-w-[856px]">
              {Description}
            </p>
          </div>
          <div>
            <div className="grid grid-cols-3 gap-6">
              {Productdatas.map((Productdata) => (
                <ProductCard
                  ProductImageUrl={Productdata.ProductImageUrl}
                  ProductImageAlt={Productdata.ProductImageAlt}
                  ProductName={Productdata.ProductName}
                  ProductPrice={Productdata.ProductPrice}
                  ButtonLabel={Productdata.ButtonLabel}
                  ButtonIcon={Productdata.ButtonIcon}
                  ButtonUrl={Productdata.ButtonUrl}
                  layout="ProductShowcase"
                />
              ))}
            </div>
          </div>
          <div className="flex justify-center">
            <Button type="button" className="">
              <Link
                to={ViewProductBtnUrl}
                className="btn-secondary px-8 py-4 flex items-center gap-[6px]">
                {ViewProductBtnLabel}
                <Image src={ViewProductBtnIconUrl} alt="Button Icon" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowCase;
