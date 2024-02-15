import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  NewspaperIcon,
  SunIcon,
  CommandLineIcon,
  ChatBubbleBottomCenterIcon
} from "@heroicons/react/24/solid";

import benefitOneImg from "../public/img/benefit-one.png";
import benefitTwoImg from "../public/img/benefit-two.png";

let benefitlottie = "https://lottie.host/76a1abf5-6f5d-43a6-8d6c-28d3ddfbed5a/1xswpPeNmz.json"
let events = "https://lottie.host/f84f2e99-be5d-420e-8261-f8dd35c8b7d3/Tu86wVLH6b.json"

const benefitOne = {
  title: "Benifits of being a part of CDX",
  desc: "There are a lot of benifits of being the part of CDX some of them are listed below.",
  image: benefitlottie,
  bullets: [
    {
      title: "Access to talent pool",
      desc: "Companies can connect with a diverse pool of talented individuals actively seeking career opportunities.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Brand visibility and networking:",
      desc: "Participation in the expo enhances a company's brand visibility among job seekers, industry professionals and other participating organizations.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Market insights and trends",
      desc: "Engaging with attendees and other industry stakeholders allows companies to gain insights into current market trends, challenges and opportunities.",
      icon: <CursorArrowRaysIcon />,
    },
    {
      title: "Thought leadership and expertise",
      desc: "Sharing expertise and insights can enhance their reputation and credibility among attendees.",
      icon: <NewspaperIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Events and Activities at CDX",
  desc: "There are a lot of events and activities at CDX some of them are listed below.",
  image: events,
  bullets: [
    {
      title: "Guest Lectures",
      desc: "Accomplished professionals from diverse sectors will deliver inspiring talks, offering unique perspectives and practical advice to aid career growth.",
      icon: <ChatBubbleBottomCenterIcon />,
    },
    {
      title: "Hackathons",
      desc: "Collaborate with like-minded individuals in exhilarating hackathons, fostering innovation and creativity to solve real-world challenges.",
      icon: <CommandLineIcon />,
    },
    {
      title: "Workshops",
      desc: "Engage in interactive workshops led by experts, focusing on skill enhancement, personal branding and effective networking strategies.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Case Study Competitions",
      desc: "Compete against peers to develop innovative solutions and present compelling business strategies, earning recognition and valuable feedback from esteemed judges.",
      icon: <SunIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
