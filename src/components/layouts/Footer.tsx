import { useMemo } from 'react';
import { Button, Image } from '../../libs/Index';
import { Link } from 'react-router-dom';


const PaymentMethods = [
    {Url:"/Icons/Rupay-Icon.svg", Alt:"Rupay Icon"},
    {Url:"/Icons/Net-Banking-Icon.svg", Alt:"Net-Banking Icon"},
    {Url:"/Icons/UPI-Icon.svg", Alt:"UPI Icon"},
    {Url:"/Icons/AMEX-Icon.svg", Alt:"Amex Icon"},
    {Url:"/Icons/Mastercard-Icon.svg", Alt:"Mastercard Icon"},
    {Url:"/Icons/Visa-Icon.svg", Alt:"Visa Icon"},
];

const ProductMenu = [ 
    {Url:"/", PageName:"Lite Cards"},
    {Url:"/", PageName:"White Label Cards"}, 
    {Url:"/", PageName:"Wooden Cards"}, 
    {Url:"/", PageName:"Metal Cards"},
]

const QuickLinks = [
    {Url:"/", PageName:"Features"},
    {Url:"/", PageName:"Teams & Business"}, 
    {Url:"/", PageName:"Book a demo"}, 
    {Url:"/", PageName:"How to use"},
    {Url:"/", PageName:"Become Partners"},
]

const Company = [
    {Url:"/", PageName:"About Us"},
    {Url:"/", PageName:"Contact Us"}, 
    {Url:"/", PageName:"Careers"}, 
    {Url:"/", PageName:"Blogs"},
    {Url:"/", PageName:"Help Center"},
]

const Legal = [
    {Url:"/", PageName:"Privacy Policy"},
    {Url:"/", PageName:"Refund Policy"}, 
    {Url:"/", PageName:"Shipping Policy"}, 
    {Url:"/", PageName:"Right to cancel"},
]
const socialIcon = [
    {Url:"/Icons/Instagram.svg", Alt:"Instagram", route:"/"},
    {Url:"/Icons/Linkedin.svg", Alt:"LinkedIn", route:"/"},
    {Url:"/Icons/Youtube.svg", Alt:"YouTube", route:"/"},
    {Url:"/Icons/Facebook.svg", Alt:"Facebook", route:"/"},
];



const Footer = () => {

    const beforeFooter = useMemo (() => (

        <section className="flex-container bg-[#260063] gap-8 px-12 pt-[14px] mb-12 mt-[70px] rounded-20">
            <div className='w-1/3'>
                <h2 className="TitleHeading">Start Networking Smarter for Free</h2>
            </div>
            <div className='w-1/3'>
                <Image 
                    src="/Footer/BeforeFooterImage.svg"
                    alt="Before Footer"
                    className="w-full"
                />
            </div>
            <div className='w-1/3'>
                <h2 className="Heading-20 mb-2">Grow your business with Tapect.</h2>
                <p className="text-sm leading-30 font-secondary font-medium mb-1">Create your own free digital business card right away.</p>
                <Link to="/">
                <Button
                type="button"
                className="btn-primary px-8 py-4">
                    
                    Get Started
                </Button>
                </Link>
            </div>
        </section>


    ), []);

    const footerContent = useMemo(() => (
        <div className=" container mx-auto px-4 sm:px-6 lg:px-0 grid grid-cols-1 md:grid-cols-6 gap-20">
        {/* About Section */}
        <div className="md:col-span-2">
            <div className="text-left mb-4">
            <Image 
                src="/Logo/Tapect-White-logo.svg"
                alt="Company logo"
                width={110}
            />
            </div>
            <p className="Description-18 mb-6">
            At Tapect, our NFC and QR code digital business cardsredefine networking, enabling instant, memorableconnections. Embrace the future with us
            </p>

            {/* Payment Icons (Using a Map for Efficiency) */}
            <div className="flex items-center justify-center md:justify-start space-x-2">
            {PaymentMethods.map((paymentMethod) => (
                <div key={paymentMethod.Alt}>
                <Image 
                    src={paymentMethod.Url}
                    alt={paymentMethod.Alt}
                    width={40}
                    height={28}
                    
                />
                </div> 
            ))}
            </div>
        </div>

        {/* Product Links (Using a Map) */}
        <div className="md:col-span-1">
            <h4 className="Heading-20 mb-4">Products</h4>
            <ul className="text-sm text-gray-300 space-y-2">
            {ProductMenu.map((product) => (
                <li key={product.PageName}>
                <Link to={product.Url} className="Description">
                    {product.PageName}
                </Link>
                </li>
            ))}
            </ul>
        </div>

        {/* Quick Links (Using a Map) */}
        <div className="md:col-span-1">
            <h4 className="Heading-20 mb-4">Quick Links</h4>
            <ul className="text-sm text-gray-300 space-y-2">
            {QuickLinks.map((QuickLink) => (
                <li key={QuickLink.PageName}>
                <Link to={QuickLink.Url} className="Description">
                    {QuickLink.PageName}
                </Link>
                </li>
            ))}
            </ul>
        </div>

        {/* Company Links (Using a Map) */}
        <div className="md:col-span-1">
            <h4 className="Heading-20 mb-4">Company</h4>
            <ul className="text-sm text-gray-300 space-y-2">
            {Company.map((companyLink) => (
                <li key={companyLink.PageName}>
                <Link to={companyLink.Url} className="Description">
                    {companyLink.PageName}
                </Link>
                </li>
            ))}
            </ul>
        </div>

        {/* Legal Links (Using a Map) */}
        <div className="md:col-span-1">
            <h4 className="Heading-20 mb-4">Legal</h4>
            <ul className="text-sm text-gray-300 space-y-2">
            {Legal.map((legalLink) => (
                <li key={legalLink.PageName}>
                <Link to={legalLink.Url} className="Description">
                    {legalLink.PageName}
                </Link>
                </li>
            ))}
            </ul>
        </div>
        </div>
    ), []); // Empty dependency array - only calculate once

    const copyrightAndSocial = useMemo(() => (
        <div className="container mx-auto border-t border-t-[#FFFFFF1A] pt-6 mt-6 flex flex-col md:flex-row items-center justify-between">
        <p className="mb-2 md:mb-0 font-secondary text-sm leading-24 text-[#7C878E] font-normal">© 2025 Tapect - Digital Business Card, All Rights Reserved</p>
        <div className="flex space-x-4">
            {socialIcon.map((social) => (
            <Link key={social.Alt} to={social.route} className="">
               <Image 
                    src={social.Url}
                    alt={social.Alt}
                    className="w-full"
               />
            </Link>
            ))}
        </div>
        </div>
    ), []);

  return (
    <footer className="HeroBanner text-white pt-12 pb-4 rounded-t-48">
        {beforeFooter}
        {footerContent}
        {copyrightAndSocial}
    </footer>
  );
};

export default Footer;