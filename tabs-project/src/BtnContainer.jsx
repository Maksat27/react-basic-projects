import React from "react";

const BtnContainer = ({ jobs, currentItem, setCurrentItem }) => {
  return (
    <div className="btn-container">
      {jobs.map((job, index) => {
        const { id, company } = job;
        return (
          <button
            key={id}
            className={index === currentItem ? "job-btn active-btn" : "job-btn"}
            onClick={() => setCurrentItem(index)}
          >
            {company}
          </button>
        );
      })}
    </div>
  );
};

export default BtnContainer;
