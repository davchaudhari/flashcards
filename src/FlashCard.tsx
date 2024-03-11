import React from 'react';
import './FlashCard.css'; // Ensure you have CSS for styling

function Flashcard({ card, isFlipped, onClick }:any) {
  return (
    <div className={`flashcard ${isFlipped ? 'flipped' : ''}`} onClick={onClick}>
      {isFlipped ? card.answer : card.question}
    </div>
  );
}

export default Flashcard;


