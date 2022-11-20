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
import oneRing from "../assets/images/tone-ring.png";
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
          url="#"
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
          title="Our Projects In Designing"
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
              cta: "View Project",
              url: "#",
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
              cta: "View Project",
              url: "#",
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
              cta: "View Project",
              url: "#",
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
              cta: "View Project",
              url: "#",
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
              author: "Aragorn",
              designation: "CEO, OneRing",
              img: oneRing,
            },
            {
              title:
                "Wolf Ventures helped us acquire protocol-owned-liquidity through their in-house instant bond solution. They assisted us in every step; smart-contracts, back end, and front-end implementation",
              author: "Aragorn",
              designation: "CEO, OneRing",
              img: oneRing,
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
                "We pride ourselves on providing high-quality services and assisting our customers through all steps involved. Using our services ourselves and having operated in DeFi for a while now, our skills and experience allow us to truly understand our customers’ needs and provide valuable input.              ",
            },
            {
              heading: "Q2. Why are there no prices?",
              content:
                "We pride ourselves on providing high-quality services and assisting our customers through all steps involved. Using our services ourselves and having operated in DeFi for a while now, our skills and experience allow us to truly understand our customers’ needs and provide valuable input.              ",
            },
            {
              heading: "Q3. How long does it usually take to finish a project?",
              content:
                "We pride ourselves on providing high-quality services and assisting our customers through all steps involved. Using our services ourselves and having operated in DeFi for a while now, our skills and experience allow us to truly understand our customers’ needs and provide valuable input.              ",
            },
            {
              heading: "Q4. What is Wolf Ventures?",
              content:
                "We pride ourselves on providing high-quality services and assisting our customers through all steps involved. Using our services ourselves and having operated in DeFi for a while now, our skills and experience allow us to truly understand our customers’ needs and provide valuable input.              ",
            },
            {
              heading:
                "Q5. Can I use your services without saying it is from you?",
              content:
                "We pride ourselves on providing high-quality services and assisting our customers through all steps involved. Using our services ourselves and having operated in DeFi for a while now, our skills and experience allow us to truly understand our customers’ needs and provide valuable input.              ",
            },
          ]}
        />

        <CallToAction />
        <Footer />
      </div>
    </div>
  );
}
