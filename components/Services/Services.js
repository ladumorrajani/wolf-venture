import React, { useEffect, useRef } from "react";
import styles from "./Services.module.css";
import treasury from "../../assets/images/treasury.png";
import design from "../../assets/images/design.png";
import devwork from "../../assets/images/devwork.png";
import flagship from "../../assets/images/flagship.png";
import arrow from "../../assets/images/arrow.svg";
import Image from "next/image";
import VanillaTilt from "vanilla-tilt";
import Link from "next/link";
import { ImageLoader } from "../../utils/image-loader";

export default function Services() {
  const tilt = useRef(null);
  const tilt1 = useRef(null);
  const tilt2 = useRef(null);
  const tilt3 = useRef(null);

  const options = {
    speed: 10,
    max: 3,
  };

  useEffect(() => {
    VanillaTilt.init(tilt.current, options);
    VanillaTilt.init(tilt1.current, options);
    VanillaTilt.init(tilt2.current, options);
    VanillaTilt.init(tilt3.current, options);
  }, []);

  return (
    <div className={styles.serviceSection}>
      <div className="container">
        <div className={styles.contentWrapper}>
          <h2 className={styles.mainHeading}>Services Designed For You</h2>
          <div className={styles.serviceCardList}>
            <div ref={tilt} className={styles.serviceCard}>
              <Link href="/treasury">
                <div className={styles.serviceCardWrap}>
                  <div className={styles.imgBlock}>
                    <Image
                      loader={ImageLoader}
                      src={treasury}
                      width={226}
                      height={218}
                      alt="Treasury"
                    />
                  </div>
                  <div className={styles.contentBlock}>
                    <div className={styles.headingWrap}>
                      <h3 className={styles.serviceHeading}>Treasury</h3>
                      <div className={styles.arrow}>
                        <Image
                          loader={ImageLoader}
                          src={arrow}
                          width={32}
                          height={32}
                          alt="Arrow"
                        />
                      </div>
                    </div>
                    <p className={styles.description}>
                      How and what we do with the treasury
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div ref={tilt1} className={styles.serviceCard}>
              <Link href="/development">
                <div className={styles.serviceCardWrap}>
                  <div className={styles.imgBlock}>
                    <Image
                      loader={ImageLoader}
                      src={devwork}
                      width={184}
                      height={155}
                      alt="devwork"
                    />
                  </div>
                  <div className={styles.contentBlock}>
                    <div className={styles.headingWrap}>
                      <h3 className={styles.serviceHeading}>DevWorks</h3>
                      <div className={styles.arrow}>
                        <Image
                          loader={ImageLoader}
                          src={arrow}
                          width={32}
                          height={32}
                          alt="Arrow"
                        />
                      </div>
                    </div>
                    <p className={styles.description}>
                      Development works for your all projects
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div ref={tilt2} className={styles.serviceCard}>
              <Link href="/design">
                <div className={styles.serviceCardWrap}>
                  <div className={styles.imgBlock}>
                    <Image
                      loader={ImageLoader}
                      src={design}
                      width={233}
                      height={135}
                      alt="design"
                    />
                  </div>
                  <div className={styles.contentBlock}>
                    <div className={styles.headingWrap}>
                      <h3 className={styles.serviceHeading}>Design</h3>
                      <div className={styles.arrow}>
                        <Image
                          loader={ImageLoader}
                          src={arrow}
                          width={32}
                          height={32}
                          alt="Arrow"
                        />
                      </div>
                    </div>
                    <p className={styles.description}>
                      Bringing design concepts to life for projects of all kinds
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div ref={tilt3} className={styles.serviceCard}>
              <Link href="/">
                <div className={styles.serviceCardWrap}>
                  <div className={styles.imgBlock}>
                    <Image
                      loader={ImageLoader}
                      src={flagship}
                      width={316}
                      height={164}
                      alt="flagship"
                    />
                  </div>
                  <div className={styles.contentBlock}>
                    <div className={styles.headingWrap}>
                      <h3 className={styles.serviceHeading}>Flagships</h3>
                      <div className={styles.arrow}>
                        <Image
                          loader={ImageLoader}
                          src={arrow}
                          width={32}
                          height={32}
                          alt="Arrow"
                        />
                      </div>
                    </div>
                    <p className={styles.description}>{`Coming soon`}</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className={styles.btnWrap}>
            <span className={styles.borderWrap} />
            <a
              href="https://forms.gle/oFJE1qGy6n2idxJf7"
              className={styles.btn}
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
