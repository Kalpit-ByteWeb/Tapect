import TapectLayout from "./TapectLayout";

interface AboutTapectData {
  aboutTapect: AboutTapectType[];
}

interface AboutTapectType {
  ImageUrl: string;
  ImageAlt: string;
  Title: string;
  Description: string;
  ButtonUrl: string;
  ButtonIcon: string;
  ButtonLabel: string;
  layout?: "Reverse" | ""; // Reverse = Image on Right, Default = Image on Left
}

const AboutTapect: React.FC<AboutTapectData> = ({ aboutTapect }) => {
  return (
    <section className="bg-[#F3F3F3] py-20">
      <div className="container mx-auto space-y-88">
        {aboutTapect.map((aboutItem, index) => (
          <TapectLayout
            index={index}
            ImageUrl={aboutItem.ImageUrl}
            ImageAlt={aboutItem.ImageAlt}
            Title={aboutItem.Title}
            Description={aboutItem.Description}
            ButtonUrl={aboutItem.ButtonUrl}
            ButtonIcon={aboutItem.ButtonIcon}
            ButtonLabel={aboutItem.ButtonLabel}
            layout={aboutItem.layout}
          />
        ))}
      </div>
    </section>
  );
};

export default AboutTapect;
