import React, { useState } from 'react';

export const Question = ({ question, options,selectedOption, onAnswer }) => {
    const[selected , setSelected]=useState(selectedOption);
  const handleAnswer = (option) => {
    setSelected(option);
    onAnswer(option);
    
  };
  
  

  return (
    <div className="question">
      <h2>{question}</h2>
      {options.map((option, index) => (
        <div className="options">
        <button key={index} onClick={() => {
            handleAnswer(option)
            }} className={selected===option ? "selected" : ""}>
          {option}
        </button>
        </div>
      ))}
    </div>
  );
};