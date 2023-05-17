import React, { useState } from "react";
import faqs from "../data/faqs";
import AccordionItem from "./AccordionItem";

const Accordion = () => {
  // State to keep track of the currently active accordion item
  const [active, setActive] = useState(null);

  // This function is called when an accordion header is clicked
  const handleFaqToggle = (index) => {
    // If the clicked item is already active, we set active to null, closing the accordion
    // Otherwise, we set active to the index of the clicked item, opening it
    setActive(active === index ? null : index);
  };

  return (
    <article>
      {/* We map over the FAQs data, rendering an AccordionItem for each */}
      {faqs.map((faq) => (
        <AccordionItem
          key={faq.id}
          id={faq.id}
          question={faq.question}
          answer={faq.answer}
          active={active}
          handleFaqToggle={handleFaqToggle}
        />
      ))}
    </article>
  );
};

export default Accordion;
