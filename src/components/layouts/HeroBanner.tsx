import { Link } from "react-router-dom"
import { Button, Image } from "../../libs/Index"

interface Bannerdata{
  classname: string;
  Title: string;
  TitleHighlight : string;
  Description : string;
  ButtonLabel : string;
  ButtonUrl : string;
  ButtonIcon : string;
  BannerImageUrl : string;
  BannerImageAlt : string;
}

const HeroBanner : React.FC<Bannerdata> = ({classname ,Title, TitleHighlight, Description, ButtonLabel, ButtonUrl, ButtonIcon, BannerImageUrl, BannerImageAlt}) => {
  return (
    <section className={classname}>
        <div className="flex-container gap-11">
            <div className="w-3/5">
                <h2 className="BannerTitle">
                {Title} <span className="text-primary">{TitleHighlight}</span>
                </h2>
                <p className="Description mb-6">
                {Description}
                </p>
                <Button 
                type='button'
                className="btn-secondary"
                >
                <Link to={ButtonUrl} className="flex content-center gap-[6px]">
                {ButtonLabel}
                <Image
                  src={ButtonIcon}
                  alt="Button Icon"
                  />
                </Link>
                </Button>
            </div>
            <div className="w-2/5">
                <Image 
                src={BannerImageUrl}
                alt={BannerImageAlt} />
            </div>
        </div>
    </section>
  )
}

export default HeroBanner