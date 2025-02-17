import React from "react";
import { Link } from "react-router-dom";
import { Button, Image } from "../../libs/Index";
import FeatureSection from "./FeatureSection"; // Import FeatureSection

interface FeatureCardSectionType {
  featureData: FeatureSectionType[]; // Array of FeatureSection data
}

interface FeatureSectionType {
  title: string;
  titleHighlight: string;
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
      <div className="container mx-auto">
        <div className="space-y-6">
          <div>
            <h2 className="TitleHeading">
              Advanced Features for{" "}
              <span className="text-primary">Seamless Networking</span>
            </h2>
            <p className="Description-dark max-w-[1118px]">
              Tapect cards come packed with advanced features for seamless
              networking. With NFC integration and QR technology, sharing your
              contact details is effortless across all devices. Our cards are
              cross-device compatible, easy to use, and even help generate
              leads, making it the ultimate tool for growing your network
              efficiently.
            </p>
          </div>
          <Button type="button" className="">
            <Link to="#" className="btn-primary px-8 py-4 flex gap-[6px]">
              Get Started
              <Image src="/Icons/ButtonIconWhite.svg" alt="Button Icon" />
            </Link>
          </Button>
        </div>
        <div className="Featureseciton">
          {/* Map over featureData and render FeatureSection components */}
          {featureData.map((feature, index) => (
            <FeatureSection
              key={index} // Important: Add a unique key for each item in the list
              title={feature.title}
              titleHighlight={feature.titleHighlight}
              description={feature.description}
              buttonLabel={feature.buttonLabel}
              buttonUrl={feature.buttonUrl}
              buttonIcon={feature.buttonIcon}
              imageUrl={feature.imageUrl}
              imageAlt={feature.imageAlt}
              layout={feature.layout}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCardSection;
