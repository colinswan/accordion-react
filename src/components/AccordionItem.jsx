import React from "react";
import "./AccordionItem.css";
import { FaChevronDown } from "react-icons/fa";

const AccordionItem = ({ id, active, handleFaqToggle, question, answer }) => (
  <div className="accordion-item">
    <h2 className="accordion-header" onClick={() => handleFaqToggle(id)}>
      <button className={`accordion-button ${active === id ? "active" : ""}`}>
        {question}
      </button>
      <span className={`accordion-chevron ${active === id ? "active" : ""}`}>
        <FaChevronDown />
      </span>
    </h2>
    <div className={`accordion-collapse ${active === id ? "show" : ""}`}>
      <div className="accordion-body">{answer}</div>
    </div>
  </div>
);

export default AccordionItem;
