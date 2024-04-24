import React, { useState } from "react";
import "./Tab.css"

const Tab = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);
  const handleClick = (getIndex) => {
    setActiveTab(getIndex);
    console.log(activeTab);
  };
  return (
    <div className="tab-container">
      <div className="tab-buttons">
        {tabs.map((tab, index) => (
          <button
            className={index === activeTab ? "active" : ""}
            key={index}
            onClick={() => handleClick(index)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="tab-content">{tabs[activeTab].content}</div>
    </div>
  );
};

export default Tab;
