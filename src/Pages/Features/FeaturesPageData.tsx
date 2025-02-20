interface ProductDataType {
  ProductImageUrl: string;
  ProductImageAlt: string;
  ProductName: string;
  ProductPrice: string;
  ButtonLabel: string;
  ButtonIcon: string;
  ButtonUrl: string;
}

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

interface FAQItemType {
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
interface AdvanceFeaturestype {
  FeatureTitle: string;
  FeatureDescription: string;
  FeatureImageUrl: string;
  FeatureImageAlt: string;
}

export const AdvanceFeaturesdata: AdvanceFeaturestype[] = [
  {
    FeatureTitle: "Tapect Card",
    FeatureDescription:
      "Share all your contact details instantly with a single tap. Your Tapect card allows seamless connection, giving others immediate access to the information you want to share.",
    FeatureImageUrl: "/Features/Tapect-card.png",
    FeatureImageAlt: "Tapect Card",
  },
  {
    FeatureTitle: "Tapect Console",
    FeatureDescription:
      "Effortlessly manage and customize your digital business cards from one central console. Update details, track usage, and ensure your card always reflects your latest info.",
    FeatureImageUrl: "/Features/Tapect-card.png",
    FeatureImageAlt: "Tapect Card",
  },
  {
    FeatureTitle: "Tapect Mobile App",
    FeatureDescription:
      "Stay connected on the go! With the Tapect mobile app, you can quickly share your card, monitor activity, and manage your contacts anytime, anywhere.",
    FeatureImageUrl: "/Features/Tapect-card.png",
    FeatureImageAlt: "Tapect Card",
  },
];
