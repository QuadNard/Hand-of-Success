import React from 'react';
import '../styles/quote.scss';
import Popup from '../components/Popup';


const Quote = () => {
  return (
    <div className="quote">
      <main>
      <h1> Quote </h1>
      <Popup trigger={true}>
        <h3>Quiz</h3>
      </Popup>
      </main>
    </div>
  );
};

export default Quote;
