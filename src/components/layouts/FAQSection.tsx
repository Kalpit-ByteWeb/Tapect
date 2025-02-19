import React, { useState, useEffect } from "react";
import { Image } from "../../libs/Index";

interface FAQItemType {
  question: string;
  answer: string; // Assuming you'll want to display answers later
}

interface FAQSectiontype {
  Title: string;
  TitleHighlight: string;
  ImageUrl: string;
  ImageAlt: string;
  Faq: FAQItemType[];
}

const FAQSection: React.FC<FAQSectiontype> = ({
  Title,
  TitleHighlight,
  ImageUrl,
  ImageAlt,
  Faq,
}) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0); // Initialize with 0 for the first item

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // useEffect hook to ensure activeIndex is set to 0 only on initial render
  useEffect(() => {
    // Only set activeIndex to 0 if it's null
    if (activeIndex === null) {
      setActiveIndex(0);
    }
  }, []); // Empty dependency array ensures this runs only once

  return (
    <section className="py-88">
      <div className="container mx-auto space-y-12">
        <h2 className="TitleHeading text-center">
          {Title} <span className="text-primary">{TitleHighlight}</span>
        </h2>
        <div className="flex md:flex-row flex-col gap-12 items-center">
          <div>
            <Image src={ImageUrl} alt={ImageAlt} />
          </div>
          <div className="flex-1 space-y-6">
            {Faq.map((item, index) => (
              <div
                key={index}
                className="border-b border-[#E5E5E5] pb-6 last:border-b-0">
                <button
                  className="flex items-center justify-between w-full text-left"
                  onClick={() => toggleAccordion(index)}>
                  <span className="Heading-20 text-secondary">
                    {item.question}
                  </span>
                  <svg
                    className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                      activeIndex === index ? "transform rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {/* Conditionally render the answer */}
                {activeIndex === index && (
                  <div className="mt-4 Description-dark">{item.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
