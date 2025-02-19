import { Link } from "react-router-dom";
import { Image } from "../../libs/Index";

interface AboutTapectType {
  index?: number;
  ImageUrl: string;
  ImageAlt: string;
  Title: string;
  Description: string;
  ButtonUrl: string;
  ButtonIcon: string;
  ButtonLabel: string;
  layout?: "Reverse" | ""; // Reverse = Image on Right, Default = Image on Left
}

const TapectLayout: React.FC<AboutTapectType> = ({
  index,
  ImageUrl,
  ImageAlt,
  Title,
  Description,
  ButtonUrl,
  ButtonIcon,
  ButtonLabel,
  layout,
}) => {
  return (
    <div
      key={index}
      className={`flex flex-col md:flex-row ${
        layout === "Reverse" ? "md:flex-row-reverse" : ""
      } items-center gap-12`}>
      {/* Image Section */}
      <div className="md:w-1/2 w-full">
        <Image src={ImageUrl} alt={ImageAlt} />
      </div>

      {/* Text Section */}
      <div className="space-y-6 md:w-1/2 w-full text-center md:text-left">
        <div className="space-y-4">
          <h2 className="TitleHeading">{Title}</h2>
          <p className="Description-dark">{Description}</p>
        </div>

        {/* Button */}
        <Link
          to={ButtonUrl}
          className="btn-primary px-8 py-4 flex items-center gap-2 w-fit">
          {ButtonLabel}
          <Image src={ButtonIcon} alt="Button Icon" />
        </Link>
      </div>
    </div>
  );
};

export default TapectLayout;
