import Head from "next/head";
import Banner from "../components/Banner/Banner";
import CallToAction from "../components/CallToAction/CallToAction";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import InnerConnection from "../components/InnerConnection/InnerConnection";
import Partnership from "../components/Partnership/Partnership";
import Services from "../components/Services/Services";
import styles from "../styles/Home.module.css";

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
        <Banner />
        <InnerConnection />
        <Services />
        <Partnership />
        <CallToAction />
        <Footer />
      </div>
    </div>
  );
}
