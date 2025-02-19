interface abouttapectdatatype {
  ImageUrl: string;
  ImageAlt: string;
  Title: string;
  Description: string;
  ButtonUrl: string;
  ButtonIcon: string;
  ButtonLabel: string;
  layout?: "Reverse" | "";
}

export const abouttapectdata: abouttapectdatatype[] = [
  {
    ImageUrl: "/Home/What-is-a-digital-business-card.png",
    ImageAlt: "What is a digital business card",
    Title: "What is a digital business card?",
    Description:
      "Digital business cards are the modern way for professionals to share contact info. Easily customizable and shareable via QR codes or links, they open instantly in a phone browser. Tapect offers a seamless way to create and share digital business cards, promoting sustainability by reducing paper use and saving trees.",
    ButtonUrl: "/",
    ButtonIcon: "/Icons/ButtonIconWhite.svg",
    ButtonLabel: "Get Started Now",
    layout: "",
  },
  {
    ImageUrl: "/Home/Why-Should-You-Switch-to-a-Digital-Business-Card.png",
    ImageAlt: "What is a digital business card",
    Title: "Why Should You Switch to a Digital Business Card ?",
    Description:
      "First impressions matter, more than 90% of people judging a person or company based on them. Tapect digital business cards ensure you make a standout impression. They securely save your contact information and allow instant sharing. Tapect also serves as a smart contact management platform, instantly organizing new contacts via an easy-to-use mobile app and dashboard.",
    ButtonUrl: "/",
    ButtonIcon: "/Icons/ButtonIconWhite.svg",
    ButtonLabel: "Get Started Now",
    layout: "Reverse",
  },
];

interface ProductDataType {
  ProductImageUrl: string;
  ProductImageAlt: string;
  ProductName: string;
  ProductPrice: string;
  ButtonLabel: string;
  ButtonIcon: string;
  ButtonUrl: string;
}
interface FeatureSectionType {
  title: string;
  titleHighlight?: string;
  description: string;
  buttonLabel?: string;
  buttonUrl?: string;
  buttonIcon?: string;
  imageUrl: string;
  imageAlt: string;
  layout?: "Vertical" | "Horizontal";
}

export const featureData: FeatureSectionType[] = [
  {
    title: "Integrated NFC",
    description:
      "Our conversion-focused approach ensures your brand captivates and converts with every pixel.",
    imageUrl: "/Home/Customize-Your-Card-Your-Way.png",
    imageAlt: "Image",
    layout: "Vertical",
  },
  {
    title: "QR Technology",
    description:
      "Empowering you with a user-friendly website creation tool. No coding required.",
    imageUrl: "/Home/Customize-Your-Card-Your-Way.png",
    imageAlt: "Image",
    layout: "Vertical",
  },
  {
    title: "Easy to Use",
    description:
      "Define each stage of work to see what’s important and where things are getting stuck.",
    imageUrl: "/Home/One-Tap-Endless-Possibilities-to-Share-Everything.svg",
    imageAlt: "Feature 1 Image",
    layout: "Horizontal",
  },
  {
    title: "Cross Compatible",
    description:
      "Experience blazingly fast speed, ensuring seamless design without any compromise.",
    imageUrl: "/Home/Customize-Your-Card-Your-Way.png",
    imageAlt: "Image",
    layout: "Vertical",
  },
  {
    title: "Lead Generation",
    description:
      "Define each stage of work to see what's important and where things are getting stuck.",
    imageUrl: "/Home/Customize-Your-Card-Your-Way.png",
    imageAlt: "Image",
    layout: "Vertical",
  },
];

interface IconslistDatatype {
  IconUrl: string;
  IconAlt: string;
  IconsListTitle: string;
  IconsListDescription: string;
}

export const IconListdatas: IconslistDatatype[] = [
  {
    IconUrl: "/Icons/Get-a-card.svg",
    IconAlt: "Get a Card",
    IconsListTitle: "Get Card",
    IconsListDescription:
      "Select your card quantity, add it to your cart, and complete checkout. After ordering, you'll receive a confirmation email and can easily set up your Tapect account for a seamless onboarding!",
  },
  {
    IconUrl: "/Icons/Get-a-card.svg",
    IconAlt: "Get a Card",
    IconsListTitle: "Get Card",
    IconsListDescription:
      "Select your card quantity, add it to your cart, and complete checkout. After ordering, you'll receive a confirmation email and can easily set up your Tapect account for a seamless onboarding!",
  },
  {
    IconUrl: "/Icons/Get-a-card.svg",
    IconAlt: "Get a Card",
    IconsListTitle: "Get Card",
    IconsListDescription:
      "Select your card quantity, add it to your cart, and complete checkout. After ordering, you'll receive a confirmation email and can easily set up your Tapect account for a seamless onboarding!",
  },
];

export const Productdatas: ProductDataType[] = [
  {
    ProductImageUrl: "/Home/TapectRedCard.png",
    ProductImageAlt: "Tapect Red Card",
    ProductName: "Tapect PVC Cards",
    ProductPrice: "$29.00",
    ButtonLabel: "Buy Now",
    ButtonIcon: "/Icons/ButtonIconWhite.svg",
    ButtonUrl: "#",
  },
  {
    ProductImageUrl: "/Home/MetalCard.png",
    ProductImageAlt: "Tapect Metal Card",
    ProductName: "Tapect Metal Cards",
    ProductPrice: "$39.00",
    ButtonLabel: "Buy Now",
    ButtonIcon: "/Icons/ButtonIconWhite.svg",
    ButtonUrl: "#",
  },
  {
    ProductImageUrl: "/Home/WoodenCard.png",
    ProductImageAlt: "Tapect Wooden Card",
    ProductName: "Tapect Wooden Cards",
    ProductPrice: "$49.00",
    ButtonLabel: "Buy Now",
    ButtonIcon: "/Icons/ButtonIconWhite.svg",
    ButtonUrl: "#",
  },
];

export interface FAQItemType {
  question: string;
  answer: string; // Assuming you'll want to display answers later
}

export const faqData: FAQItemType[] = [
  {
    question: "What is digital business card?",
    answer:
      "Digital business cards are a modern way to share your contact information.Digital business cards are a modern way to share your contact information.Digital business cards are a modern way to share your contact information.Digital business cards are a modern way to share your contact information.Digital business cards are a modern way to share your contact information.",
  },
  {
    question: "How do I sign up for an account?",
    answer:
      "Digital business cards are a modern way to share your contact information.Digital business cards are a modern way to share your contact information.Digital business cards are a modern way to share your contact information.Digital business cards are a modern way to share your contact information.Digital business cards are a modern way to share your contact information.",
  },
  {
    question: "How do I sign up for an account?",
    answer:
      "Digital business cards are a modern way to share your contact information.Digital business cards are a modern way to share your contact information.Digital business cards are a modern way to share your contact information.Digital business cards are a modern way to share your contact information.Digital business cards are a modern way to share your contact information.",
  },
  {
    question: "How do I sign up for an account?",
    answer:
      "Digital business cards are a modern way to share your contact information.Digital business cards are a modern way to share your contact information.Digital business cards are a modern way to share your contact information.Digital business cards are a modern way to share your contact information.Digital business cards are a modern way to share your contact information.",
  },
  {
    question: "How do I sign up for an account?",
    answer:
      "Digital business cards are a modern way to share your contact information.Digital business cards are a modern way to share your contact information.Digital business cards are a modern way to share your contact information.Digital business cards are a modern way to share your contact information.Digital business cards are a modern way to share your contact information.",
  },
  {
    question: "How do I sign up for an account?",
    answer:
      "Digital business cards are a modern way to share your contact information.Digital business cards are a modern way to share your contact information.Digital business cards are a modern way to share your contact information.Digital business cards are a modern way to share your contact information.Digital business cards are a modern way to share your contact information.",
  },
];
