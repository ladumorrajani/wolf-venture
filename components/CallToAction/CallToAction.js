import styles from "./CallToAction.module.css";
import Link from "next/link";

export default function CallToAction() {
  return (
    <div className={styles.callToAction}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.contentBlk}>
            <h2 className={styles.heading}>
              The Wolves That Build, Trade and Invest for You.
            </h2>
            <div className={styles.btnWrap}>
              <Link href="/" passHref>
                <a className="btn">Open App</a>
              </Link>
              <Link href="/" passHref>
                <a className="btn secondary">Join Community</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
