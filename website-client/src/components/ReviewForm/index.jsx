import React, { useState } from 'react';
import axios from 'axios';
import './styles.css';

export default function ReviewForm({ onSubmitted }) {
  const [author, setAuthor]   = useState('');
  const [rating, setRating]   = useState(5);
  const [comment, setComment] = useState('');
  const [status, setStatus]   = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');               

    try {
      const res = await axios.post('http://localhost:8000/api/reviews', {
        author,
        rating,
        comment
      });

      if (res.status === 201) {
        setStatus('Submitted');    
        setAuthor(''); 
        setRating(5); 
        setComment('');

        if (onSubmitted) onSubmitted();
        setTimeout(() => setStatus(null), 3000);
      } else {
        throw new Error('Unexpected status code');
      }
    } catch (err) {
      console.error(err);
      setStatus('Eroare la trimitere');     
    }
  };

  return (
    <form className="review-form" onSubmit={handleSubmit}>
      <div className='title'>Leave feedback</div>

      <input 
        type="text"
        placeholder="Nume (opțional)"
        value={author}
        onChange={e => setAuthor(e.target.value)}
      />

      <select
        value={rating}
        onChange={e => setRating(+e.target.value)}
      >
        {[5,4,3,2,1].map(n => (
          <option key={n} value={n}>{n} Stele</option>
        ))}
      </select>

      <textarea
        rows="4"
        placeholder="Spune-ne părerea ta..."
        value={comment}
        onChange={e => setComment(e.target.value)}
        required
      />

      {status === null && (
        <button type="submit" >Submit</button>
      )}
      {status !== null && (
        <button type="button" disabled>
          {status}
        </button>
      )}
    </form>
  );
}
