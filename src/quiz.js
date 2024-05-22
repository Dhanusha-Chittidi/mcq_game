import React, { useState } from 'react';
import {Question} from './question';
import { ScoreChart } from './scoreChart';
export const Quiz = ({ questions }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [isFinished, setIsFinished] = useState(false);

  const handleAnswer = (answer) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = answer;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
     
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const handlePrevious = () => {
    setCurrentQuestionIndex(currentQuestionIndex - 1);
  };

  const handleSubmit = () => {
    setIsFinished(true);
  };

  const score = answers.reduce((acc, answer, index) => {
    if (answer === questions[index].correct) {
      return acc + 1;
    }
    return acc;
  }, 0);

  if (isFinished) {
    return (
      <div className="score">
        <h2>Your score is: <span>{score} / {questions.length}</span></h2>
        <ScoreChart score={score} total={questions.length}/>
      </div>
    );
  }

  return (
    <div className="quiz">
      <Question
        question={questions[currentQuestionIndex].question}
        options={questions[currentQuestionIndex].options}
        selectedOption={answers[currentQuestionIndex]}
        onAnswer={handleAnswer}
      />
      <div className="navigation">
        <button onClick={handlePrevious} disabled={currentQuestionIndex === 0}>
          Previous
        </button>
        <button onClick={handleNext} disabled={currentQuestionIndex === questions.length - 1}>
          Next
        </button>
      </div>
      {currentQuestionIndex === questions.length - 1 && (
        <button onClick={handleSubmit} className="submit-button">
          Submit
        </button>
      )}
    </div>
  );
};

export default Quiz;
