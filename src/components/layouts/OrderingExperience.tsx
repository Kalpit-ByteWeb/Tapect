import React from "react";
import { Button, Image } from "../../libs/Index";
import { Link } from "react-router-dom";

interface OrderingExperienceType {
  Title: string;
  Description: string;
  Iconlistdatas: IconslistDatatype[];
  layout?: "WithImage" | "WithoutImage";
  ViewProductBtnUrl?: string;
  ViewProductBtnLabel?: string;
  ViewProductBtnIconUrl?: string;
}

interface IconslistDatatype {
  IconUrl: string;
  IconAlt: string;
  IconsListTitle: string;
  IconsListDescription: string;
}

const OrderingExperience: React.FC<OrderingExperienceType> = ({
  Title,
  Description,
  Iconlistdatas,
  layout = "WithImage",
  ViewProductBtnUrl,
  ViewProductBtnLabel,
  ViewProductBtnIconUrl,
}) => {
  if (layout === "WithImage") {
    return (
      <WithImageLayout
        Title={Title}
        Description={Description}
        Iconlistdatas={Iconlistdatas}
      />
    );
  } else {
    return (
      <WithoutImageLayout
        Title={Title}
        Description={Description}
        Iconlistdatas={Iconlistdatas}
        ViewProductBtnUrl={ViewProductBtnUrl}
        ViewProductBtnLabel={ViewProductBtnLabel}
        ViewProductBtnIconUrl={ViewProductBtnIconUrl}
      />
    );
  }
};

interface LayoutProps {
  Title: string;
  Description: string;
  Iconlistdatas: IconslistDatatype[];
  ViewProductBtnUrl?: string;
  ViewProductBtnLabel?: string;
  ViewProductBtnIconUrl?: string;
}

const WithImageLayout: React.FC<LayoutProps> = ({
  Title,
  Description,
  Iconlistdatas,
}) => {
  return (
    <section className="py-88 relative">
      <div className="absolute left-0 top-0 -scale-x-100">
        <Image src="/Icons/tapect-design.svg" alt="tapect design" />
      </div>
      <div className="lg:w-[1700px] mx-auto bg-secondary rounded-30">
        <div className="container mx-auto py-12 space-y-12">
          <div className="flex flex-col items-center">
            <h2 className="TitleHeading text-white">{Title}</h2>
            <p className="Description-18 text-center max-w-[856px]">
              {Description}
            </p>
          </div>
          <div className="flex xl:flex-row flex-col items-center">
            <div className="md:w-1/2 w-full">
              <Image src="/Home/SeamlessOrdering.svg" alt="Seamless Ordering" />
            </div>
            <div className="md:w-1/2 w-full space-y-[103px]">
              {Iconlistdatas.map((Iconlist, index) => (
                <div
                  key={index}
                  className="Iconslist relative flex gap-7 items-start">
                  <Image src={Iconlist.IconUrl} alt={Iconlist.IconAlt} />
                  <div className="space-y-2">
                    <h3 className="text-24 leading-30 font-semibold font-primary text-white">
                      {Iconlist.IconsListTitle}
                    </h3>
                    <p className="Description">
                      {Iconlist.IconsListDescription}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const WithoutImageLayout: React.FC<LayoutProps> = ({
  Title,
  Description,
  Iconlistdatas,
  ViewProductBtnUrl,
  ViewProductBtnLabel,
  ViewProductBtnIconUrl,
}) => {
  return (
    <section className="relative">
      <div className="absolute left-0 top-0 -scale-x-100">
        <Image src="/Icons/tapect-design.svg" alt="tapect design" />
      </div>
      <div className="lg:w-[1700px] mx-auto bg-secondary rounded-30">
        <div className="container mx-auto py-12 space-y-12">
          <div className="flex flex-col items-center">
            <h2 className="TitleHeading text-white">{Title}</h2>
            <p className="Description-18 text-center max-w-[856px]">
              {Description}
            </p>
          </div>
          <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[72px] items-start">
            {Iconlistdatas.map((Iconlist, index) => {
              const displayIndex = index + 1;
              return (
                <div
                  key={index}
                  className="Iconslist-layout2 relative flex flex-col justify-center items-center  gap-7 text-center">
                  <Image src={Iconlist.IconUrl} alt={Iconlist.IconAlt} />
                  <div className="space-y-2">
                    <h3 className="text-24 leading-30 font-semibold font-primary text-white">
                      {Iconlist.IconsListTitle}
                    </h3>
                    <p className="Description">
                      {Iconlist.IconsListDescription}
                    </p>
                  </div>
                  <div className="Iconslist-number">
                    <div className="IconNumber relative w-[50px] h-[50px] bg-[#0B081B] rounded-full outline-dashed outline-white flex justify-center items-center">
                      <span className="Description">0{displayIndex}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex justify-center">
            <Button type="button" className="">
              <Link
                to={ViewProductBtnUrl || ""}
                className="btn-secondary px-8 py-4 flex items-center gap-[6px]">
                {ViewProductBtnLabel}
                <Image src={ViewProductBtnIconUrl || ""} alt="Button Icon" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderingExperience;
