import Head from "next/head";
import CallToAction from "../components/CallToAction/CallToAction";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import InnerBanner from "../components/InnerBanner/InnerBanner";
import styles from "../styles/Home.module.css";
import bannerImg from "../assets/images/treasury.svg";
import cryptoAssets from "../assets/images/crypto-assets.png";
import rwa from "../assets/images/rwa.png";
import oneRing from "../assets/images/tone-ring.png";
import stableYield from "../assets/images/stable-yield.png";
import iconTreasury from "../assets/images/itreasury.svg";
import iconInvesting from "../assets/images/investment.svg";
import iconIntegrity from "../assets/images/integrity.svg";
import OurProjects from "../components/OurProjects/OurProjects";
import Statistics from "../components/Statistics/Statistics";
import Testimonials from "../components/Testimonials/Testimonials";
import Faqs from "../components/Faqs/Faqs";
import OurInvestment from "../components/OurInvestment/OurInvestment";

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
          title="Treasury"
          description="We assist in designing and implementing risk-assessed and transparent portfolio and treasury management strategies focused on ensuring your funds stay active and grow over the long term."
          img={bannerImg}
          width={459}
          height={442}
          cta="Contact Us"
          url="#"
          slider={[
            "Stable Yields",
            "Crypto Assets",
            "Algorithmic Trading Strategies",
            "Stable Yields",
            "Stable Yields",
            "Crypto Assets",
            "Algorithmic Trading Strategies",
            "Stable Yields",
          ]}
          mainDescription="Navigating safely through the cryptocurrency space and other financial investments is challenging. We take responsibility for our customers, guide them to pre-defined goals and make sure they don’t fall prey to the dangers of DeFi!"
        />

        <OurProjects
          title="Our Projects In Treasury"
          projectList={[
            {
              title: "Stable Yields",
              description:
                "Our laser-focused mentality of being custodians of other people’s assets drives us to select investments with stable yields all year round. We specifically choose investments with risk/reward profiles which ensure yields are stable and consistent for the overarching benefit of $WV holders and investors in our upcoming Vaults solutions",
              cta: "View Project",
              url: "#",
              img: stableYield,
              width: 600,
              height: 600,
            },
            {
              title: "Crypto Assets",
              description:
                "We’re crypto-centric, hence, it bodes well for our treasury activities to largely cover the ownership of best-in-class crypto assets for the treasury. Our research and analyst teams constantly review the current landscape to identify and recommend positions in blue-chip assets of various classes ensuring a high performing treasury.",
              cta: "View Project",
              url: "#",
              img: cryptoAssets,
              width: 600,
              height: 700,
            },
            {
              title: "RWA",
              description:
                "In the last few months, our research team, including expert contribution from the industry has started considering real world assets (RWAs) for investments via the treasury. Tokenized RWA is forecast to reach a whopping $16 trillion by 2030, according to Boston Consulting Group research. We are building capacity (in technology and talent) to be able to deliver tokenization solutions for our holders and institutional investors alike.",
              cta: "View Project",
              url: "#",
              img: rwa,
              width: 616,
              height: 448,
            },
          ]}
        />

        <OurInvestment
          title="Our Investment Philosophy"
          investments={[
            {
              img: iconTreasury,
              title: "Treasury and Portfolio Management",
              description:
                "Employing these measures and strategies ourselves, we assist in designing and implementing risk-assessed and transparent portfolio and treasury management strategies focused on ensuring your funds stay active and grow over the long term. Your funds will be managed via the safest digital asset custody, transfer and settlement platforms.Investing Philosophy",
            },
            {
              img: iconInvesting,
              title: "Wise investing",
              description:
                "Wolf Ventures seeks to make smart choices that are focused on growth, returns and sustainability. All investing carries risk, but we will work to identify opportunities that promise the greatest return to our holders during bull market cycles and strongest means of treasury preservation during bear market cycles.",
            },
            {
              img: iconIntegrity,
              title: "Honesty and Integrity",
              description:
                "The strength and cornerstone of our reputation derives from the integrity, honesty, and transparency of our team and means in which we build and manage this project.It is only through the success of our investments, growth of Wolf Ventures, and return to our holders that we will realize our own success as a team and community. We will achieve success through due diligence, clear communication, specific goals, and well executed strategies.",
            },
          ]}
        />

        <Statistics
          title="Our innovate investment solutions are third-party audited, battle-tested and used by ourselves."
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
