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
              <a
                href="https://app.wolf.ventures/"
                className="btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open App
              </a>
              <a
                href="https://linktr.ee/wolfventures"
                className="btn secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join Community
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
