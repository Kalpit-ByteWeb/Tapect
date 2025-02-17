import { Image } from "../../libs/Index"; 
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const logos = [
  "/Logo/Tapect-logo.svg",
  "/Logo/Tapect-logo.svg",
  "/Logo/Tapect-logo.svg",
  "/Logo/Tapect-logo.svg",
  "/Logo/Tapect-logo.svg",
  "/Logo/Tapect-logo.svg",
  "/Logo/Tapect-logo.svg",
  "/Logo/Tapect-logo.svg",
];

const CompanySlider = () => {
  return (
    <section className="w-full overflow-hidden">
      <div className="container mx-auto pt-10 pb-20">
        <div className="flex items-center">
          <h2 className="text-lg px-8 py-4 w-fit font-primary leading-30 font-semibold text-secondary border border-border_color rounded-30">
            Trusted by Global Companies
          </h2>
          <hr className="h-[2px] bg-[#C2C7D0] w-[70.4%]" />
        </div>
        <div className="mt-6">
          <div className="py-[30px] w-full overflow-hidden">
            <Swiper
              spaceBetween={30}
              slidesPerView="auto"
              speed={4000} // Smooth movement
              loop={true}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              className="swiper-class"
            >
              {logos.map((logo, index) => (
                <SwiperSlide key={index} className="w-auto flex-shrink-0">
                  <Image 
                    src={logo} 
                    alt="Company logo" 
                    className="w-[120px] h-auto object-contain"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanySlider;
