import './styles.css';
import ReviewForm from '../../components/ReviewForm';
import ReviewList from '../../components/ReviewList';
import { useState } from 'react';
import { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
export default function AboutUs() {
  const formRef = useRef(null);
  const [refresh, setRefresh] = useState(0);
  return (
    <section className="despre" >     
      <div className='aboutus'> 
      <div className="about-img">
        <img src="https://completdental.ro/wp-content/uploads/2023/09/echipa-cabinet-1024x683.jpg" alt="Despre noi" />
      </div>
      <div className="about-text">
        <h2>Despre Noi</h2>
        <p>
          La SmileClinic ne concentrăm pe confortul și sănătatea ta orală. Echipa noastră de specialiști
          folosește tehnologie de ultimă generație pentru un zâmbet de invidiat.
        </p>
         <button className="butonul-magic"onClick={() => formRef.current?.scrollIntoView({ behavior: 'smooth' })}>
          <FontAwesomeIcon icon={faChevronDown} />
        </button>
      </div>
      </div>

      <div className='reviews'>
          <div className='reviewList'><ReviewList key={refresh} /></div>
          
          <div ref={formRef} className='reviewForm'><ReviewForm onSubmitted={() => setRefresh(r => r + 1)} /></div>
      </div>
    </section>
  );
}