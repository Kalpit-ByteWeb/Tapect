import React from "react";
import { Link } from "react-router-dom";

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

const FeatureSection: React.FC<FeatureSectionType> = ({
  title,
  titleHighlight,
  description,
  buttonLabel,
  buttonUrl,
  buttonIcon,
  imageUrl,
  imageAlt,
  layout = "Horizontal",
}) => {
  if (layout === "Vertical") {
    return (
      <VerticalLayout
        title={title}
        titleHighlight={titleHighlight}
        description={description}
        buttonLabel={buttonLabel}
        buttonUrl={buttonUrl}
        buttonIcon={buttonIcon}
        imageUrl={imageUrl}
        imageAlt={imageAlt}
      />
    );
  } else {
    return (
      <HorizontalLayout
        title={title}
        titleHighlight={titleHighlight}
        description={description}
        buttonLabel={buttonLabel}
        buttonUrl={buttonUrl}
        buttonIcon={buttonIcon}
        imageUrl={imageUrl}
        imageAlt={imageAlt}
      />
    );
  }
};

interface LayoutProps extends FeatureSectionType {}

const HorizontalLayout: React.FC<LayoutProps> = ({
  title,
  titleHighlight,
  description,
  buttonLabel,
  buttonUrl,
  buttonIcon,
  imageUrl,
  imageAlt,
}) => {
  return (
    <section className="container mx-auto bg-[#F5F8FE] w-fit rounded-20 mb-6">
      <div className={`flex flex-row items-center`}>
        <div className="w-8/12 pl-16 pr-[91px]">
          <h2 className="Featuretitle mb-2">
            {title} <span className="text-primary">{titleHighlight}</span>
          </h2>
          <p className="Description-dark mb-6">{description}</p>
          {buttonLabel && (
            <Link
              to={buttonUrl || ""}
              className="btn-primary px-8 py-4 flex w-fit">
              {buttonLabel}
              {buttonIcon && (
                <img
                  src={buttonIcon}
                  alt="Button Icon"
                  width={20}
                  height={20}
                  className="ml-2"
                />
              )}
            </Link>
          )}
        </div>
        <div className="md:w-1/2">
          <img
            src={imageUrl}
            alt={imageAlt}
            className="rounded-md w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

const VerticalLayout: React.FC<LayoutProps> = ({
  title,
  titleHighlight,
  description,
  buttonLabel,
  buttonUrl,
  buttonIcon,
  imageUrl,
  imageAlt,
}) => {
  return (
    <section className="bg-[#F5F8FE] rounded-20">
      <div className={`flex flex-col items-center`}>
        <div className="px-16 pt-16 pb-11">
          <h2 className="Featuretitle mb-2">
            {title} <span className="text-purple-600">{titleHighlight}</span>
          </h2>
          <p className="text-gray-700 mb-4">{description}</p>
          {buttonLabel && (
            <a
              href={buttonUrl}
              className="inline-flex items-center bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700">
              {buttonLabel}
              {buttonIcon && (
                <img
                  src={buttonIcon}
                  alt="Button Icon"
                  width={20}
                  height={20}
                  className="ml-2"
                />
              )}
            </a>
          )}
        </div>
        <div className="">
          <img
            src={imageUrl}
            alt={imageAlt}
            className="rounded-md w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
