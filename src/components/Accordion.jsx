import { useState } from "react";
import faqs from "../data/faqs";
import AccordionItem from "./AccordionItem";

const Accordion = () => {
  const [active, setActive] = useState(null);

  const handleFaqToggle = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <article>
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
