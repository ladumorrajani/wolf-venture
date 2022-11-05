import styles from "./Footer.module.css";
import Image from "next/image";
import logo from "../../assets/images/logo.svg";
import twitter from "../../assets/images/twitter.svg";
import telegram from "../../assets/images/telegram.svg";
import discord from "../../assets/images/discord.svg";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.topFooter}>
        <div className="container">
          <div className={styles.topFooterWrap}>
            <div className={styles.logoWrap}>
              <Link href="/" passHref>
                <div className={styles.logo}>
                  <Image src={logo} width={220} height={48} alt="logo" />
                </div>
              </Link>
              <p className={styles.companyText}>
                An innovative way to invest and build in crypto
              </p>
            </div>
            <div className={styles.community}>
              <h3 className={styles.heading}>Community</h3>
              <div className={styles.communityWrap}>
                <Link href="/" passHref>
                  <div className={styles.socialLogo}>
                    <Image src={twitter} width={40} height={40} alt="twitter" />
                  </div>
                </Link>
                <Link href="/" passHref>
                  <div className={styles.socialLogo}>
                    <Image
                      src={telegram}
                      width={40}
                      height={40}
                      alt="telegram"
                    />
                  </div>
                </Link>
                <Link href="/" passHref>
                  <div className={styles.socialLogo}>
                    <Image src={discord} width={40} height={40} alt="discord" />
                  </div>
                </Link>
              </div>
            </div>
            <div className={styles.footerLinks}>
              <div>
                <h3 className={styles.heading}>Wolf Ventures</h3>
                <ul className={styles.navigation}>
                  <li>
                    <Link href="/" passHref>
                      Treasury
                    </Link>
                  </li>
                  <li>
                    <Link href="/" passHref>
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className={styles.heading}>Docs</h3>
                <ul className={styles.navigation}>
                  <li>
                    <Link href="/" passHref>
                      Whitepaper
                    </Link>
                  </li>
                  <li>
                    <Link href="/" passHref>
                      Audit
                    </Link>
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
