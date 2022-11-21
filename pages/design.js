import Head from "next/head";
import CallToAction from "../components/CallToAction/CallToAction";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import InnerBanner from "../components/InnerBanner/InnerBanner";
import styles from "../styles/Home.module.css";
import bannerImg from "../assets/images/design.svg";
import nexaToken from "../assets/images/next-token.png";
import teamFuture from "../assets/images/team-future.png";
import amxo from "../assets/images/amxo.png";
import nftLanding from "../assets/images/nftlanding.png";
import oneRing from "../assets/images/onering-icon.jpg";
import voidcash from "../assets/images/voidcash.jpg";
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
          title="Design"
          description="Get your exceptional, custom UI/UX design for both website and mobile app interface, illustrations and motion graphics, all tailored to your specific wishes!"
          img={bannerImg}
          width={471}
          height={272}
          cta="Contact Us"
          url="https://forms.gle/oFJE1qGy6n2idxJf7"
          slider={[
            "User Experience Design",
            "DApp and Dashboard Design",
            "NFT Art Design",
            "Logo Design",
            "User Experience Design",
            "DApp and Dashboard Design",
            "NFT Art Design",
            "Logo Design",
          ]}
          mainDescription="Design is one of the most important factors in creating great customer service and experience. We start by getting to know our customers, explore their unique needs and preferences and create designs which are intuitive, engaging and easy to use."
        />

        <OurProjects
          title="Design Portfolio"
          projectList={[
            {
              title: "Nexa Token Website",
              description: "Designed token token branding and UI/UX design.",
              features: [
                "User Interface design",
                "User experience design",
                "Branding",
                "Design consultation",
              ],
              cta: "Contact Us",
              url: "https://forms.gle/oFJE1qGy6n2idxJf7",
              img: nexaToken,
              width: 600,
              height: 500,
            },
            {
              title: "Team management website",
              description: "Crafted webpage for web3 community management.",
              features: [
                "UI/UX Design",
                "Illustration",
                "Interaction Design",
                "Design consultation",
              ],
              cta: "Contact Us",
              url: "https://forms.gle/oFJE1qGy6n2idxJf7",
              img: teamFuture,
              width: 600,
              height: 700,
            },
            {
              title: "Travel Agency Website",
              description: "Created AMXO travel agency website.",
              features: [
                "User Interface Design",
                "UX Research and UX Design",
                "Illustration",
                "Design consultation",
              ],
              cta: "Contact Us",
              url: "https://forms.gle/oFJE1qGy6n2idxJf7",
              img: amxo,
              width: 600,
              height: 466,
            },
            {
              title: "NFT Marketplace Website",
              description:
                "Build NFT Marketplace website to buy and sell NFTs.",
              features: [
                "User Interface Design",
                "UX Research",
                "Brading",
                "Design consultation",
              ],
              cta: "Contact Us",
              url: "https://forms.gle/oFJE1qGy6n2idxJf7",
              img: nftLanding,
              width: 600,
              height: 600,
            },
          ]}
        />

        <Statistics
          title="We pride ourselves on elegant and tailored designs that help our customers deliver amazing products."
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
