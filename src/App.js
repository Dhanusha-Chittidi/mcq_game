
import './App.css';
import { Quiz } from './quiz';
function App() {
  const questions = [
    {
      question: '1.D.D.T. was invented by?',
      options: ['Mosley', 'Rudolf', 'Karl Benz', 'Dalton'],
      correct: 'Mosley',
    },
    {
      question: '2.Hitler party which came into power in 1933 is known as',
      options: ['Ku-Klux-Klan', 'Democratic Party', 'Labour Party', 'Nazi Party'],
      correct: 'Nazi Party',
    },
    {
      question: '3.Which planet is known as the Red Planet?',
      options: ['Earth', 'Mars', 'Jupiter', 'Venus'],
      correct: 'Mars',
    },
    {
      question: '4.What is the capital of France?',
      options: ['Berlin', 'Madrid', 'Rome', 'Paris'],
      correct: 'Paris',
    },
    
    {
      question: '5.What is the hardest natural substance on Earth?',
      options: ['Gold', 'Iron', 'Diamond', 'Platinum'],
      correct: 'Diamond',
    },
    
    {
      question: '6.Which country is the largest by area?',
      options: ['Canada', 'China', 'United States', 'Russia'],
      correct: 'Russia',
    },
    {
      question: '7.What is the smallest prime number?',
      options: ['0', '1', '2', '3'],
      correct: '2',
    },
  
    {
      question: '8.Which ocean is the largest?',
      options: ['Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean', 'Pacific Ocean'],
      correct: 'Pacific Ocean',
    },
    {
      question: '9.Which country is known as the Land of the Rising Sun?',
      options: ['China', 'South Korea', 'Japan', 'Thailand'],
      correct: 'Japan',
    },
    {
      question: '10.What is the chemical symbol for gold?',
      options: ['Au', 'Ag', 'Gd', 'Go'],
      correct: 'Au',
    },
    {
      question: '11.Which famous scientist developed the theory of relativity?',
      options: ['Isaac Newton', 'Albert Einstein', 'Galileo Galilei', 'Nikola Tesla'],
      correct: 'Albert Einstein',
    },
    {
      question: '12.What is the capital city of Australia?',
      options: ['Sydney', 'Melbourne', 'Brisbane', 'Canberra'],
      correct: 'Canberra',
    },
    {
      question: '13.What is the largest mammal in the world?',
      options: ['Elephant', 'Blue Whale', 'Giraffe', 'Rhino'],
      correct: 'Blue Whale',
    },
    {
      question: '14.Which language is the most widely spoken in the world?',
      options: ['Spanish', 'English', 'Mandarin', 'Hindi'],
      correct: 'Mandarin',
    },
    {
      question: '15.Which planet is known as the Morning Star or the Evening Star?',
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
