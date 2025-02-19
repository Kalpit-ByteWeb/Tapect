import React from "react";
import { Link } from "react-router-dom";
import { Button, Image } from "../../libs/Index";

interface FeatureCardSectionType {
  featureData: FeatureSectionType[];
}

interface FeatureSectionType {
  title: string;
  titleHighlight?: string;
  description: string;
  buttonLabel?: string;
  buttonUrl?: string;
  buttonIcon?: string;
  imageUrl: string;
  imageAlt: string;
  layout?: "Vertical" | "Horizontal";
}

const FeatureCardSection: React.FC<FeatureCardSectionType> = ({
  featureData,
}) => {
  return (
    <section className="bg-[#F3F3F3] py-12">
      <div className="container mx-auto space-y-12">
        {/* Section Title */}
        <div className="text-center space-y-4">
          <h2 className="TitleHeading">
            Advanced Features for{" "}
            <span className="text-primary">Seamless Networking</span>
          </h2>
          <p className="Description-dark max-w-[1118px] mx-auto">
            Tapect cards come packed with advanced features for seamless
            networking. With NFC integration and QR technology, sharing your
            contact details is effortless across all devices. Our cards are
            cross-device compatible, easy to use, and even help generate leads,
            making it the ultimate tool for growing your network efficiently.
          </p>
          <Button type="button" className="">
            <Link
              to="#"
              className="btn-primary px-8 py-4 flex gap-2 items-center">
              Get Started
              <Image src="/Icons/ButtonIconWhite.svg" alt="Button Icon" />
            </Link>
          </Button>
        </div>

        {/* Render Features in Given Order */}
        <div className="space-y-6">
          {groupVerticalItems(featureData).map((group, index) => (
            <div
              key={index}
              className={`grid ${
                group.length === 2 ? "grid-cols-1 md:grid-cols-2 gap-6" : ""
              }`}>
              {group.map((feature, idx) => (
                <FeatureItem key={idx} feature={feature} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FeatureItem: React.FC<{ feature: FeatureSectionType }> = ({
  feature,
}) => {
  return feature.layout === "Horizontal" ? (
    <section className="bg-white w-fit rounded-15 flex flex-col md:flex-row items-center gap-6 border shadow-featurecardsection border-[#E5E5E5]">
      <div className="md:w-3/5 px-88">
        <h2 className="Featuretitle mb-2">
          {feature.title}{" "}
          <span className="text-primary">{feature.titleHighlight}</span>
        </h2>
        <p className="Description-dark mb-6">{feature.description}</p>
        {feature.buttonLabel && (
          <Link
            to={feature.buttonUrl || ""}
            className="btn-primary px-6 py-3 flex items-center w-fit">
            {feature.buttonLabel}
            {feature.buttonIcon && (
              <img
                src={feature.buttonIcon}
                alt="Button Icon"
                className="ml-2 w-5 h-5"
              />
            )}
          </Link>
        )}
      </div>
      <div className="md:w-2/5">
        <img
          src={feature.imageUrl}
          alt={feature.imageAlt}
          className="rounded-md w-full h-auto object-contain"
        />
      </div>
    </section>
  ) : (
    <section className="bg-white rounded-15 p-7 border shadow-featurecardsection border-[#E5E5E5]">
      <div>
        <img
          src={feature.imageUrl}
          alt={feature.imageAlt}
          className="rounded-md w-full h-auto object-contain"
        />
      </div>
      <div className="mt-[10px]">
        <h2 className="Featuretitle mb-2">
          {feature.title}{" "}
          <span className="text-primary">{feature.titleHighlight}</span>
        </h2>
        <p className="text-body">{feature.description}</p>
        {feature.buttonLabel && (
          <a
            href={feature.buttonUrl}
            className="inline-flex items-center bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700">
            {feature.buttonLabel}
            {feature.buttonIcon && (
              <img
                src={feature.buttonIcon}
                alt="Button Icon"
                className="ml-2 w-5 h-5"
              />
            )}
          </a>
        )}
      </div>
    </section>
  );
};

/**
 * Groups vertical items in pairs to display in a row if possible.
 */
const groupVerticalItems = (features: FeatureSectionType[]) => {
  const grouped: FeatureSectionType[][] = [];
  let temp: FeatureSectionType[] = [];

  features.forEach((feature) => {
    if (feature.layout === "Vertical") {
      temp.push(feature);
      if (temp.length === 2) {
        grouped.push(temp);
        temp = [];
      }
    } else {
      if (temp.length > 0) {
        grouped.push(temp);
        temp = [];
      }
      grouped.push([feature]);
    }
  });

  if (temp.length > 0) grouped.push(temp);

  return grouped;
};

export default FeatureCardSection;
