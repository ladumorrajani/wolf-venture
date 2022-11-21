import styles from "./Footer.module.css";
import Image from "next/image";
import logo from "../../assets/images/logo.svg";
import twitter from "../../assets/images/twitter.svg";
import telegram from "../../assets/images/telegram.svg";
import discord from "../../assets/images/discord.svg";
import Link from "next/link";
import { ImageLoader } from "../../utils/image-loader";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.topFooter}>
        <div className="container">
          <div className={styles.topFooterWrap}>
            <div className={styles.logoWrap}>
              <Link href="/" passHref>
                <div className={styles.logo}>
                  <Image
                    loader={ImageLoader}
                    src={logo}
                    width={220}
                    height={48}
                    alt="logo"
                  />
                </div>
              </Link>
              <p className={styles.companyText}>
                An innovative way to invest and build in crypto
              </p>
            </div>
            <div className={styles.community}>
              <h3 className={styles.heading}>Community</h3>
              <div className={styles.communityWrap}>
                <a
                  href="https://twitter.com/wolf_ventures"
                  className={styles.socialLogo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    loader={ImageLoader}
                    src={twitter}
                    width={40}
                    height={40}
                    alt="twitter"
                  />
                </a>
                <a
                  href="https://t.me/Wolf_Ventures"
                  className={styles.socialLogo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    loader={ImageLoader}
                    src={telegram}
                    width={40}
                    height={40}
                    alt="telegram"
                  />
                </a>
                <a
                  href="https://discord.com/invite/75rVuzth"
                  className={styles.socialLogo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    loader={ImageLoader}
                    src={discord}
                    width={40}
                    height={40}
                    alt="discord"
                  />
                </a>
              </div>
            </div>
            <div className={styles.footerLinks}>
              <div>
                <h3 className={styles.heading}>Wolf Ventures</h3>
                <ul className={styles.navigation}>
                  <li>
                    <a
                      href="https://app.wolf.ventures/treasury"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Treasury
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://forms.gle/oFJE1qGy6n2idxJf7"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className={styles.heading}>Docs</h3>
                <ul className={styles.navigation}>
                  <li>
                    <a
                      href="https://docs.wolf.ventures/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Whitepaper
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bottomFooter}>
        <div className="container">
          <p className={styles.copyright}>
            Copyright Wolfventures ©2022, all rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
