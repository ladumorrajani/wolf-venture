import React, { useEffect, useRef } from "react";
import styles from "./Banner.module.css";
import Image from "next/image";
import bannerImg from "../../assets/images/bannerImg.svg";
import VanillaTilt from "vanilla-tilt";
import { ImageLoader } from "../../utils/image-loader";

export default function Banner() {
  const tilt = useRef(null);
  const tilt1 = useRef(null);

  const options = {
    speed: 10,
    max: 15,
  };

  useEffect(() => {
    VanillaTilt.init(tilt.current, options);
    VanillaTilt.init(tilt1.current, options);
  }, [options]);

  return (
    <div className={styles.banner}>
      <div className={styles.bannerBg} />
      <div className="container">
        <div className={styles.bannerCaption}>
          <div ref={tilt} className={styles.bannerImg}>
            <Image
              loader={ImageLoader}
              src={bannerImg}
              width={307}
              height={307}
              alt="Banner image"
            />
          </div>
          <div ref={tilt1}>
            <h1 className={styles.heading}>$WV</h1>
            <p className={styles.para}>One token powering multiple journeys</p>
            <div className={styles.btnWrap}>
              <a
                href="https://spooky.fi/#/swap?outputCurrency=0x911d1feae99e112b5014cfa60038325d863352f1"
                className="btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                Buy $WV
              </a>
              <a
                href="https://linktr.ee/wolfventures"
                className="btn secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
