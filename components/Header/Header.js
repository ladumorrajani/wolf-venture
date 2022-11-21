import { useState } from "react";
import Image from "next/image";
import styles from "./Header.module.css";
import logo from "../../assets/images/logo.svg";
import Link from "next/link";
import cx from "classnames";
import { ImageLoader } from "../../utils/image-loader";

export default function Header() {
  const [active, setActive] = useState(false);

  const menuOpen = () => {
    setActive(true);
  };

  const menuClose = () => {
    setActive(false);
  };

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headerWrap}>
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
          <ul className={styles.navigation}>
            <li>
              <a
                href="https://docs.wolf.ventures/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Documentation
              </a>
            </li>
            <li>
              <a
                href="https://medium.com/@wolfventures"
                target="_blank"
                rel="noopener noreferrer"
              >
                Medium
              </a>
            </li>
            <li>
              <a
                href="https://app.wolf.ventures/treasury"
                target="_blank"
                rel="noopener noreferrer"
              >
                Treasury
              </a>
            </li>
          </ul>
          <div className={styles.menuwrap}>
            <a
              href="https://app.wolf.ventures"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={styles.button}>Dashboard</div>
            </a>
            <div className={styles.mobileMenu}>
              <div className={styles.hamburger} onClick={menuOpen}>
                <span className={styles.menu} />
              </div>
              <div className={cx(styles.mobileWrap, active && styles.active)}>
                <div className={styles.close} onClick={menuClose} />
                <ul className={styles.navigation}>
                  <li>
                    <a
                      href="https://docs.wolf.ventures/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Documentation
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://medium.com/@wolfventures"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Medium
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://app.wolf.ventures/treasury"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Treasury
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
