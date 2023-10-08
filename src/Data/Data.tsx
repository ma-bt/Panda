import { DetailProp } from "@/components/Detail/Detail";
import image1 from "@/components/Assets/bg.jpg";
import image3 from "@/components/Assets/image3.jpg";
import logo1 from "@/components/Assets/Vector.png";
import logo2 from "@/components/Assets/Group 84.png";

const fakeDetailData: DetailProp = [
  {
    id: 1,
    Logo: logo1,
    Logoalt: "Logo Alt Text",
    title: "Ledger Engine to power your fintech application without any code.",
    listData: [
      "Business Event-Driven to generate accounting entries",
      "Multi-Asset, Multi-currency support",
      "API-First Design",
      "No-code approach to process design",
      "Easy reporting",
    ],
    buttonLabel: "View More",
    onClick: () => {
      console.log("Button clicked");
    },

    heroImage: image1,
    backgroundColor: "#4C0662",
  },
  
  {
    id: 2,
    Logo: logo2,
    Logoalt: "Logo Alt Text",
    title: "Harvest data from any sources without any code.",
    listData: [
      "Business Event-Driven to generate accounting entries",
      "Multi-Asset, Multi-currency support",
      "API-First Design",
      "No-code approach to process design",
      "Easy reporting",
    ],
    buttonLabel: "View More",
    onClick: () => {
      console.log("Button clicked");
    },

    backgroundColor: "#FC9947",
  },
  {
    id: 3,
    Logo: logo2,
    Logoalt: "Logo Alt Text",
    title: "Harvest data from any sources without any code.",
    listData: [
      "Business Event-Driven to generate accounting entries",
      "Multi-Asset, Multi-currency support",
      "API-First Design",
      "No-code approach to process design",
      "Easy reporting",
    ],
    buttonLabel: "View More",
    onClick: () => {
      console.log("Button clicked");
    },
    heroImage: image3,

    backgroundColor: "#FC9947",
  },
];

export default fakeDetailData;
