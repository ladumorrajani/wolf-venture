import React, { useEffect, useRef } from "react";
import styles from "./Banner.module.css";
import Link from "next/link";
import Image from "next/image";
import bannerImg from "../../assets/images/bannerImg.svg";
import VanillaTilt from "vanilla-tilt";

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
              src={bannerImg}
              width={307}
              height={307}
              alt="Banner image"
            />
          </div>
          <div ref={tilt1}>
            <h1 className={styles.heading}>$WV</h1>
            <p className={styles.para}>
              One token powering multiple █████ journeys
            </p>
            <div className={styles.btnWrap}>
              <Link href="/" passHref>
                <a className="btn">Buy $WV</a>
              </Link>
              <Link href="/" passHref>
                <a className="btn secondary">Join Us</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
