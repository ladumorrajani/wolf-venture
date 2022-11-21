import Head from "next/head";
import CallToAction from "../components/CallToAction/CallToAction";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import InnerBanner from "../components/InnerBanner/InnerBanner";
import styles from "../styles/Home.module.css";
import bannerImg from "../assets/images/development.svg";
import migration from "../assets/images/migration.png";
import minting from "../assets/images/minting.png";
import oneRing from "../assets/images/onering-icon.jpg";
import voidcash from "../assets/images/voidcash.jpg";
import bonds from "../assets/images/bonds.png";
import OurProjects from "../components/OurProjects/OurProjects";
import Statistics from "../components/Statistics/Statistics";
import Testimonials from "../components/Testimonials/Testimonials";
import Faqs from "../components/Faqs/Faqs";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Wolf Venture</title>
        <meta name="description" content="Wolf Venture" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className={styles.homePage}>
        <Header />

        <InnerBanner
          title="Development"
          description="Our development services include but are not limited to smart-contracts, back-end, and front-end development. Whatever your needs, we got you covered!"
          img={bannerImg}
          width={445}
          height={368}
          cta="Contact Us"
          url="https://forms.gle/oFJE1qGy6n2idxJf7"
          slider={[
            "Smart Contracts",
            "Front-End",
            "Back-End",
            "Special Queries",
            "Smart Contracts",
            "Front-End",
            "Back-End",
            "Special Queries",
          ]}
          mainDescription="Development is the backbone of Crypto and DeFi. With the proper skills even the most complex ideas can be turned into a working product. As our customer, you can draw on our vast experience and insight. We are going to assist you along your way to success!"
        />

        <OurProjects
          title="Development Portfolio"
          projectList={[
            {
              title: "Bonds as a Service",
              description:
                "Provided OneRing with smart contracts for their bonding solution",
              features: [
                "Instant Bonds",
                "Smart-contracts",
                "Implemenation",
                "Asisstance",
              ],
              cta: "View Project",
              url: "https://evm.onering.tools/bonds",
              img: bonds,
              width: 600,
              height: 428,
            },
            {
              title: "NFT Minting Dapp",
              description:
                "We developed the minting dApp for LeemonSwap's Pre-sale NFTs",
              features: [
                "Smart contracts",
                "Front-end",
                "Implementation",
                "Assistance",
              ],
              cta: "View Project",
              url: "https://evm.onering.tools/bonds",
              img: minting,
              width: 600,
              height: 428,
            },
            {
              title: "Token Migration",
              description:
                "Provided Void Cash with guidance for their token migration",
              features: ["Smart-contracts", "Implementation", "Assistance"],
              cta: "View Project",
              url: "https://mixer.void.cash",
              img: migration,
              width: 600,
              height: 335,
            },
          ]}
        />

        <Statistics
          title="We are proud to have worked with multiple protocols on different networks and perpetually increase our skills."
          statistics={[
            {
              count: "3+",
              name: "Years experience",
            },
            {
              count: "7+",
              name: "Projects Done",
            },
            {
              count: "3+",
              name: "Happy Customers",
            },
            {
              count: "100K+",
              name: "Delighted Users",
            },
          ]}
        />

        <Testimonials
          testimonials={[
            {
              title:
                "Wolf Ventures helped us acquire protocol-owned-liquidity through their in-house instant bond solution. They assisted us in every step; smart-contracts, back end, and front-end implementation",
              author: "0xAragorn",
              designation: "CEO, OneRing",
              img: oneRing,
            },
            {
              title:
                "Having been through, and assisted with, several types of migrations, the Wolf Venture team was able to identify an alternative path for the Void Cash migration that was cleaner, simpler and enabled the Void Cash team to preserve, as well as capture back, liquidity. The amount of savings and expertise that the Wolf Venture team was able to provide in such a short period of time was of incredible value to the Void Cash team and project.",
              author: "Void.Cash",
              designation: "CEO, Void.Cash",
              img: voidcash,
            },
          ]}
        />

        <Faqs
          title="Frequently Asked Questions"
          description="Cryptocurrency is a type of virtual currency that uses to secure transactions that are digitally."
          faqs={[
            {
              heading: "Q1. Why Wolf Ventures?",
              content:
                "We pride ourselves on providing high-quality services and assisting our customers through all steps involved. Using our services ourselves and having operated in DeFi for a while now, our skills and experience allow us to truly understand our customers’ needs and provide valuable input.",
            },
            {
              heading: "Q2. Why are there no prices?",
              content:
                "Each of our services is uniquely tailored to our customers’ needs. This may enlarge or lessen the work involved, which is why we decided to listen to our customers first, understand exactly what they want, and only then send out a proposal. Please use the contact form and be as precise as possible in describing what you envision. We are always happy to hop on a call with you.",
            },
            {
              heading: "Q3. How long does it usually take to finish a project?",
              content:
                "This strongly depends on the amount of work involved. However, we are able to draw on multiple resources and speed up the process, if our customers wish. It may take a day or a week, but we will stay in close contact throughout the whole process to help you plan accordingly.",
            },
            {
              heading: "Q4. What is Wolf Ventures?",
              content:
                "Wolf Ventures is a Defi Protocol on the Fantom Opera blockchain drawing on multiple pools of talents. Smart contract developers, trading experts, designers, content creators & writers and much more. Further, we are well connected in Decentralized Finance, which allows us to professionally assist anyone who needs our expertise and input.",
            },
            {
              heading:
                "Q5. Can I use your services without saying it is from you?",
              content:
                "No problem at all! We value the privacy of our customers and won’t disclose any information on them without their clear consent.",
            },
          ]}
        />

        <CallToAction />

        <Footer />
      </div>
    </div>
  );
}
