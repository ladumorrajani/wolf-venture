import styles from "./InnerConnection.module.css";
import flowChart from "../../assets/images/flowchart.svg";
import Image from "next/image";
import { ImageLoader } from "../../utils/image-loader";

export default function InnerConnection() {
  return (
    <div className={styles.innerSection}>
      <div className="container">
        <div className={styles.innerWrapper}>
          <p className={styles.description}>
            Explore the inner connections and structures set up by Wolf Ventures
            to ultimately feed into the value proposition of $WV
          </p>
          <div className={styles.flowChart}>
            <Image
              loader={ImageLoader}
              src={flowChart}
              width={920}
              height={617}
              alt="Flow chart"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
