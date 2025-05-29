import { useEffect, useState } from 'react';
import axios from 'axios';
import './styles.css';

export default function ReviewList() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/reviews')
      .then(({ data }) => setReviews(data))
      .catch(console.error);
  }, []);

  return (
    <div className="reviews-list">
      {reviews.length === 0 && <p>Nu a fost încă nici o recenzie.</p>}
      {reviews.map(r => (
        <div key={r.id} className="review-card">
          <div>
            <div className="review-header">
              <div className="review-author">{r.author || 'Anonim'}</div>
              <div className="review-date">
                {new Date(r.created_at).toLocaleDateString()}
              </div>
            </div>

            <div className="star-rating">
              {Array.from({ length: r.rating }).map((_, i) => (
                <span key={i}>★</span>
              ))}
              {Array.from({ length: 5 - r.rating }).map((_, i) => (
                <span key={i} style={{ color: '#e2e8f0' }}>★</span>
              ))}
            </div>

            <p className="review-comment">{r.comment}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
