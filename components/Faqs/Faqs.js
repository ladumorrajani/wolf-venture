import React from "react";
import styles from "./Faqs.module.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

export default function Faqs(props) {
  return (
    <div className={styles.faqsSection}>
      <div className="container">
        <h2 className={styles.heading}>{props.title}</h2>
        <p className={styles.description}>{props.description}</p>
        <div className={styles.faqBox}>
          <Accordion allowZeroExpanded>
            {props.faqs.map((item, index) => {
              return (
                <AccordionItem key={index}>
                  <AccordionItemHeading>
                    <AccordionItemButton>{item.heading}</AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>{item.content}</AccordionItemPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </div>
  );
}
