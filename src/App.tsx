import React, { useState } from 'react';
import Flashcard from './FlashCard';
import './App.css'; // Ensure you have CSS for styling
import "./FlashCard.css"

function App() {
  const [cards, setCards] = useState([
    { question: 'Who is the former President running for the Republican Party Nomination?', answer: 'Donald Trump' },
    { question: 'How is the current President running for the Democratic Party Nomination?', answer: 'President Joe Biden' },
    { question: 'What month will the 2024 election take place?', answer: 'November' },
    { question: 'Who is the primary challenger against Donald Trump who was also the Governer of South Carolina?', answer: 'Nikki Haley' },
    { question: 'How long does the US Presidency last?', answer: '4 years' },
    { question: 'How many terms can a president run concurrently?', answer: '2 times' },
    { question: 'What are the two chambers of Congress?', answer: 'Senate and the House' },
    { question: 'Who was the original representative of the Republican Party at its inception?', answer: 'Abraham Lincoln' },
    // Add more cards as required
  ]);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const showNextCard = () => {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * cards.length);
    } while (randomIndex === currentCardIndex);
    setCurrentCardIndex(randomIndex);
    setIsFlipped(false); // Ensure the new card starts unflipped
  };

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="app">
      <h1>Test your Knowledge of US Politics!</h1>
      <p>This flashcard set has some relevent facts about the US political structure and process.</p>
      <p>Number of Cards: {cards.length}</p>
      <Flashcard card={cards[currentCardIndex]} isFlipped={isFlipped} onClick={flipCard} />
      <button onClick={showNextCard}>Next Card</button>
    </div>
  );
}

export default App;