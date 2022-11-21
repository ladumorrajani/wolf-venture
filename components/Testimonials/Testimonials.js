import React from "react";
import styles from "./Testimonials.module.css";
import Slider from "react-slick";
import { ImageLoader } from "../../utils/image-loader";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Testimonials(props) {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className={styles.testimonials}>
      <div className="container">
        <div className={styles.testimonialWrap}>
          <div className={styles.testimonialBg}>
            <Slider {...settings}>
              {props.testimonials.map((item, index) => {
                return (
                  <div key={index} className={styles.card}>
                    <h3 className={styles.title}>{item.title}</h3>
                    <div className={styles.author}>
                      <Image
                        loader={ImageLoader}
                        src={item.img}
                        width={52}
                        height={52}
                        alt="Author"
                        className={styles.img}
                      />
                      <div>
                        <h4 className={styles.authorName}>{item.author}</h4>
                        <div className={styles.designation}>
                          {item.designation}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}
