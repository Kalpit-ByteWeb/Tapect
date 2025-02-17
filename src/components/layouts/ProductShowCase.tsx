import React from "react";
import { Link } from "react-router-dom";
import { Button, Image } from "../../libs/Index";

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
    <section className="px-[120px] my-88">
      <div className="bg-secondary rounded-20">
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
                <div
                  key={Productdata.ProductName}
                  className="bg-[#FFFFFF1A] p-7 space-y-7 rounded-20">
                  <Image
                    src={Productdata.ProductImageUrl}
                    alt={Productdata.ProductImageAlt}
                  />
                  <div className="space-y-4 border-t border-[#FFFFFF1A] pt-4">
                    <div className="space-y-2">
                      <h3 className="Heading-20 text-white">
                        {Productdata.ProductName}
                      </h3>
                      <h4 className="Heading-20 text-white">
                        {Productdata.ProductPrice}
                      </h4>
                    </div>

                    <Button type="button" className="">
                      {/* Use <a> tag directly for external links */}
                      <Link
                        to={Productdata.ButtonUrl}
                        className="btn-primary px-4 py-2 flex items-center gap-[6px]">
                        {Productdata.ButtonLabel}
                        <Image src={Productdata.ButtonIcon} alt="Button Icon" />
                      </Link>
                    </Button>
                  </div>
                </div>
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
