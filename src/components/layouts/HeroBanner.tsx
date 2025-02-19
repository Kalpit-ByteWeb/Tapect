import React from "react";
import { Link } from "react-router-dom";
import { Button, Image } from "../../libs/Index";

interface Bannerdata {
  classname: string;
  Title: string;
  TitleHighlight: string;
  Description: string;
  ButtonLabel?: string;
  ButtonUrl?: string;
  ButtonIcon?: string;
  BannerImageUrl?: string;
  BannerImageAlt?: string;
}

const HeroBanner: React.FC<Bannerdata> = ({
  classname,
  Title,
  TitleHighlight,
  Description,
  ButtonLabel,
  ButtonUrl,
  ButtonIcon,
  BannerImageUrl,
  BannerImageAlt,
}) => {
  const hasImage = !!BannerImageUrl; // Check if BannerImageUrl is provided

  const contentClasses = hasImage
    ? "w-3/5"
    : "w-full text-center flex flex-col items-center";
  const containerClasses = hasImage
    ? "flex-container gap-11"
    : "container mx-auto flex flex-col items-center justify-center h-full";
  const imageClasses = hasImage ? "w-2/5" : "hidden";

  return (
    <section className={classname}>
      <div className={containerClasses}>
        <div className={contentClasses}>
          <h2 className="BannerTitle">
            {Title} <span className="text-primary">{TitleHighlight}</span>
          </h2>
          <p className="Description mb-6">{Description}</p>
          {ButtonLabel && (
            <Button type="button" className="btn-secondary">
              <Link
                to={ButtonUrl || ""}
                className="flex content-center gap-[6px]">
                {ButtonLabel}
                <Image src={ButtonIcon || ""} alt="Button Icon" />
              </Link>
            </Button>
          )}
        </div>
        <div className={imageClasses}>
          {BannerImageUrl && (
            <Image src={BannerImageUrl} alt={BannerImageAlt || ""} />
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
