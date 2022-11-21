import React from "react";
import styles from "./OurProjects.module.css";
import Image from "next/image";
import arrow from "../../assets/images/arrow-down-left.svg";
import { ImageLoader } from "../../utils/image-loader";
import Masonry from "react-masonry-css";

const breakpointColumnsObj = {
  default: 2,
  500: 1,
};

export default function OurProjects(props) {
  return (
    <div className={styles.ourProjects}>
      <div className="container">
        <h2 className={styles.heading}>{props.title}</h2>
        <div className={styles.projectList}>
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {props.projectList.map((item, index) => {
              return (
                <div key={index} className={styles.projectCard}>
                  <div className={styles.imgBlk}>
                    <Image
                      loader={ImageLoader}
                      src={item.img}
                      width={item.width}
                      height={item.height}
                      alt={item.title}
                    />
                  </div>
                  <h2 className={styles.title}>{item.title}</h2>
                  <p className={styles.cardDescription}>{item.description}</p>
                  {item.features && (
                    <ul className={styles.features}>
                      {item.features.map((item, index) => {
                        return (
                          <li key={index} className={styles.featureList}>
                            {item}
                          </li>
                        );
                      })}
                    </ul>
                  )}
                  {item.url && (
                    <a
                      href={item.url}
                      className="btn-transparent"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.cta}
                      <Image
                        loader={ImageLoader}
                        src={arrow}
                        width={32}
                        height={32}
                        alt="Arrow"
                      />
                    </a>
                  )}
                </div>
              );
            })}
          </Masonry>
        </div>
      </div>
    </div>
  );
}
