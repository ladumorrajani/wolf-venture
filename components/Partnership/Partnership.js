import styles from "./Partnership.module.css";
import matrix from "../../assets/images/matrix.png";
import oneRing from "../../assets/images/onering.png";
import voidCash from "../../assets/images/voidcash.png";
import Image from "next/image";
import { ImageLoader } from "../../utils/image-loader";

export default function Partnership() {
  return (
    <div className={styles.partnershipSection}>
      <div className="container">
        <div className={styles.contentWrap}>
          <h2 className={styles.heading}>Partnerships</h2>
          <div className={styles.subHeading}>
            {`Strategic alliances and relationships we've built from day 1`}
          </div>
          <p className={styles.description}>
            Our alliances cover several projects in different areas of crypto
            and DeFi, across several chains. These relationships are symbiotic
            and long term by design. Over the coming months we will gradually
            reveal them and show the important role they play in realizing our
            vision
          </p>
          <div className={styles.partnerList}>
            <Image
              loader={ImageLoader}
              src={matrix}
              width={190}
              height={40}
              alt="Matrix"
            />
            <Image
              loader={ImageLoader}
              src={oneRing}
              width={196}
              height={40}
              alt="oneRing"
            />
            <Image
              loader={ImageLoader}
              src={voidCash}
              width={171}
              height={40}
              alt="voidCash"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
