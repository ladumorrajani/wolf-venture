import React from "react";
import styles from "./InnerBanner.module.css";
import Image from "next/image";
import star from "../../assets/images/star.svg";
import { ImageLoader } from "../../utils/image-loader";
import Marquee from "react-fast-marquee";

export default function InnerBanner(props) {
  return (
    <div className={styles.innerBanner}>
      <div className="container">
        <div className={styles.bannerCaption}>
          <div className={styles.captionCnt}>
            <h1 className={styles.heading}>{props.title}</h1>
            <p className={styles.description}>{props.description}</p>
            <a href={props.url} className="btn">
              {props.cta}
            </a>
          </div>
          <div className={styles.captionImg}>
            <Image
              loader={ImageLoader}
              src={props.img}
              width={props.width}
              height={props.height}
              alt="Banner image"
            />
          </div>
        </div>
      </div>
      <div className={styles.bannerSlide}>
        <Marquee gradient={false}>
          {props.slider.map((item, index) => {
            return (
              <div key={index} className={styles.singleSlide}>
                <Image
                  loader={ImageLoader}
                  src={star}
                  width={32}
                  height={32}
                  alt="Star"
                />
                {item}
              </div>
            );
          })}
        </Marquee>
      </div>
      <div className="container">
        <p className={styles.mainDescription}>
          Design is one of the most important factors in creating great customer
          service and experience. We start by getting to know our customers,
          explore their unique needs and preferences and create designs which
          are intuitive, engaging and easy to use.
        </p>
      </div>
    </div>
  );
}
