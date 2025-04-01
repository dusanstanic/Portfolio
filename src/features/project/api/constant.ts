import { HiveTools, LCITools, SchoolGigTools, VanillaTools } from "./tools";

export const PROJECTS = [
  {
    id: "1",
    title: "Hive",
    description:
      "Health Information Network created to manage misleading information that appears in public spaces during epidemics using machine learning",
    keyPoints: [
      `<b>Led, architectured and implemented a messaging system infrastructure using SendBird</b>, which resulted in robust and reusable outcomes that can easily be extended and adapted to changes, improving overall project execution`,
      `<b>Integrated and implemented numerous different features for user chat communication</b> using clean architectural solutions that made reusability seamless`,
      `<b>Architectured and implemented a notification system infrastructure</b>, worked closely with the <b>product owner</b> on providing various possible solutions`,
    ],
    tools: HiveTools,
  },
  {
    id: "2",
    title: "Vanilla",
    description:
      "Platform used to build a Document Generation product, enabling admins to create and publish document packages that can be purchased by an end client",
    keyPoints: [],
    tools: VanillaTools,
  },
  {
    id: "3",
    title: "SchoolGig",
    keyPoints: [],
    description:
      "Platform used by schools to better engage with their employees and to provide job offers, helping them in choosing the right candidate",
    tools: SchoolGigTools,
  },
  {
    id: "4",
    title: "LCI",
    keyPoints: [],
    description:
      "Platform for the entire suite of LCI products and their associated systems. This transformation involves the utilization of cloud-based solutions that can easily be expanded and seamlessly integrated, ensuring the delivery of secure and scalable services to clients.",
    tools: LCITools,
  },
];
