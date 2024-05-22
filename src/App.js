
import './App.css';
import { Quiz } from './quiz';
function App() {
  const questions = [
    {
      question: 'D.D.T. was invented by?',
      options: ['Mosley', 'Rudolf', 'Karl Benz', 'Dalton'],
      correct: 'Mosley',
    },
    {
      question: 'Hitler party which came into power in 1933 is known as',
      options: ['Ku-Klux-Klan', 'Democratic Party', 'Labour Party', 'Nazi Party'],
      correct: 'Nazi Party',
    },
    {
      question: 'Which planet is known as the Red Planet?',
      options: ['Earth', 'Mars', 'Jupiter', 'Venus'],
      correct: 'Mars',
    },
    {
      question: 'What is the capital of France?',
      options: ['Berlin', 'Madrid', 'Rome', 'Paris'],
      correct: 'Paris',
    },
    
    {
      question: 'What is the hardest natural substance on Earth?',
      options: ['Gold', 'Iron', 'Diamond', 'Platinum'],
      correct: 'Diamond',
    },
    
    {
      question: 'Which country is the largest by area?',
      options: ['Canada', 'China', 'United States', 'Russia'],
      correct: 'Russia',
    },
    {
      question: 'What is the smallest prime number?',
      options: ['0', '1', '2', '3'],
      correct: '2',
    },
  
    {
      question: 'Which ocean is the largest?',
      options: ['Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean', 'Pacific Ocean'],
      correct: 'Pacific Ocean',
    },
    {
      question: 'Which country is known as the Land of the Rising Sun?',
      options: ['China', 'South Korea', 'Japan', 'Thailand'],
      correct: 'Japan',
    },
    {
      question: 'What is the chemical symbol for gold?',
      options: ['Au', 'Ag', 'Gd', 'Go'],
      correct: 'Au',
    },
    {
      question: 'Which famous scientist developed the theory of relativity?',
      options: ['Isaac Newton', 'Albert Einstein', 'Galileo Galilei', 'Nikola Tesla'],
      correct: 'Albert Einstein',
    },
    {
      question: 'What is the capital city of Australia?',
      options: ['Sydney', 'Melbourne', 'Brisbane', 'Canberra'],
      correct: 'Canberra',
    },
    {
      question: 'What is the largest mammal in the world?',
      options: ['Elephant', 'Blue Whale', 'Giraffe', 'Rhino'],
      correct: 'Blue Whale',
    },
    {
      question: 'Which language is the most widely spoken in the world?',
      options: ['Spanish', 'English', 'Mandarin', 'Hindi'],
      correct: 'Mandarin',
    },
    {
      question: 'Which planet is known as the Morning Star or the Evening Star?',
      options: ['Mars', 'Jupiter', 'Saturn', 'Venus'],
      correct: 'Venus',
    }
  ];

  return (
    <div className="app">
      <h1><span>MCQ</span> GAME</h1>
      <div className="tab">
      <h2 className = "sub-heading">
      Question
      </h2>
      <Quiz questions={questions} />
      </div>
    </div>
  );
}

export default App;
