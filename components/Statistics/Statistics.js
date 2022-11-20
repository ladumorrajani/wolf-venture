import React from "react";
import styles from "./Statistics.module.css";

export default function Statistics(props) {
  return (
    <div className={styles.statistics}>
      <div className="container">
        <h3 className={styles.heading}>{props.title}</h3>
      </div>
      <div className={styles.statisticsWrap}>
        <div className="container">
          <div className={styles.statisticsList}>
            {props.statistics.map((item, index) => {
              return (
                <div key={index} className={styles.card}>
                  <h3 className={styles.count}>{item.count}</h3>
                  <p className={styles.name}>{item.name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
