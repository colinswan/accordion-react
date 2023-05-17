import React from "react";
import "./AccordionItem.css";
import { FaChevronDown } from "react-icons/fa";

const AccordionItem = ({ id, active, handleFaqToggle, question, answer }) => (
  <div className="accordion-item">
    {/* When the header is clicked, we call handleFaqToggle with the id of this item */}
    <h2 className="accordion-header" onClick={() => handleFaqToggle(id)}>
      {/* If this item is the active one, we add the "active" class to the button */}
      <button className={`accordion-button ${active === id ? "active" : ""}`}>
        {question}
      </button>
      {/* If this item is the active one, we add the "active" class to the chevron */}
      <span className={`accordion-chevron ${active === id ? "active" : ""}`}>
        <FaChevronDown />
      </span>
    </h2>
    {/* If this item is the active one, we add the "show" class to show the answer */}
    <div className={`accordion-collapse ${active === id ? "show" : ""}`}>
      <div className="accordion-body">{answer}</div>
    </div>
  </div>
);

export default AccordionItem;
