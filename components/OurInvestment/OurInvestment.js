import React from "react";
import styles from "./OurInvestment.module.css";
import Image from "next/image";
import { ImageLoader } from "../../utils/image-loader";

export default function OurInvestment(props) {
  return (
    <div className={styles.investmentSection}>
      <div className="container">
        <h2 className={styles.heading}>{props.title}</h2>
        <div className={styles.investmentList}>
          {props.investments.map((item, index) => {
            return (
              <div key={index} className={styles.investmentCard}>
                <Image
                  loader={ImageLoader}
                  src={item.img}
                  width={80}
                  height={80}
                  alt={item.title}
                />
                <h2 className={styles.title}>{item.title}</h2>
                <p className={styles.cardDescription}>{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
