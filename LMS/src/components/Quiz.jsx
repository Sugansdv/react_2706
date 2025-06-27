import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

// Sample MCQ quiz data
const sampleQuizData = {
  1: [
    {
      question: 'What does JSX stand for?',
      options: ['JavaScript XML', 'Java Syntax Extension', 'JSON Syntax', 'None'],
      correctAnswer: 'JavaScript XML',
    },
    {
      question: 'Which hook is used for state management in React?',
      options: ['useEffect', 'useState', 'useContext', 'useRef'],
      correctAnswer: 'useState',
    },
  ],
  2: [
    {
      question: 'Which of these is a JavaScript data type?',
      options: ['Component', 'Function', 'String', 'Div'],
      correctAnswer: 'String',
    },
    {
      question: 'Which keyword declares a block-scoped variable?',
      options: ['var', 'let', 'const', 'both let and const'],
      correctAnswer: 'both let and const',
    },
  ],
};

const Quiz = () => {
  const { courseId } = useParams();
  const quizQuestions = sampleQuizData[courseId] || [];

  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const handleOptionChange = (qIndex, option) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [qIndex]: option,
    });
  };

  const handleSubmit = () => {
    let calculatedScore = 0;
    quizQuestions.forEach((q, index) => {
      if (selectedAnswers[index] === q.correctAnswer) {
        calculatedScore++;
      }
    });
    setScore(calculatedScore);
    setSubmitted(true);
  };

  return (
    <div>
      <h2 className="mb-4">📝 Multiple Choice Quiz</h2>
      {quizQuestions.map((item, index) => (
        <div key={index} className="mb-4">
          <h5>{index + 1}. {item.question}</h5>
          {item.options.map((option, i) => (
            <div className="form-check" key={i}>
              <input
                className="form-check-input"
                type="radio"
                name={`question-${index}`}
                value={option}
                disabled={submitted}
                checked={selectedAnswers[index] === option}
                onChange={() => handleOptionChange(index, option)}
              />
              <label className="form-check-label">{option}</label>
            </div>
          ))}
          {submitted && (
            <div className={`mt-2 ${selectedAnswers[index] === item.correctAnswer ? 'text-success' : 'text-danger'}`}>
              Correct Answer: {item.correctAnswer}
            </div>
          )}
        </div>
      ))}

      {!submitted ? (
        <button className="btn btn-primary" onClick={handleSubmit}>Submit</button>
      ) : (
        <div className="alert alert-info mt-4">
          You scored <strong>{score}</strong> out of <strong>{quizQuestions.length}</strong>
        </div>
      )}
    </div>
  );
};

export default Quiz;
