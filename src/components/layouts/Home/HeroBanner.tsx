import { Link } from "react-router-dom"
import { Button, Image } from "../../../libs/Index"

const HeroBanner = () => {
  return (
    <section className="HeroBanner h-[900px]">
        <div className="flex-container gap-11">
            <div className="w-3/5">
                <h2 className="BannerTitle">
                Upgrade to the Future of Networking with <span className="text-primary">Digital Business Cards</span>
                </h2>
                <p className="Description">
                Step into the future of networking with Tapect's digital business cards. Instantly share contact details, reduce paper waste, and enjoy seamless, eco-friendly connections with just a tap.
                </p>
                <Button 
                type='button'
                className="btn-secondary"
                >
                <Link to="/">
                Get Started
                </Link>
                </Button>
            </div>
            <div className="w-2/5">
                <Image 
                src="/Home/DummyBanner.svg"
                alt="HeroBanner" />
            </div>
        </div>
    </section>
  )
}

export default HeroBanner