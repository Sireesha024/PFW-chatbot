import React, { useState } from 'react';
import './QuestionForm.css';

function QuestionForm({ onSubmit }) {
  const [question, setQuestion] = useState('');

  const handleChange = (event) => {
    setQuestion(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(question);
    setQuestion('');
  };

  return (
    <div className="container">
        <h1>PFW chatbot</h1>
        <form onSubmit={handleSubmit}>
        <input
            type="text"
            value={question}
            onChange={handleChange}
            placeholder="Ask your question here..."
        />
        <button type="submit">Send</button>
        </form>
    </div>
  );
}

export default QuestionForm;
