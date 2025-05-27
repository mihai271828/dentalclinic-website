import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTooth, faSmile, faUserMd, faRotate } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';


const services = [
   {
      title: "Implantologie Dentară",
      description: "Soluții complete pentru înlocuirea dinților lipsă",
      icon: <FontAwesomeIcon icon={faTooth} size="2x" />
    },
    {
      title: "Ortodonție Modernă",
      description: "Alinierea dinților cu aparate invizibile",
      icon: <FontAwesomeIcon icon={faRotate} size="2x" />
    },
    {
      title: "Estetică Dentară",
      description: "Albire și fațete pentru zâmbetul perfect",
      icon: <FontAwesomeIcon icon={faSmile} size="2x" />
    },
    {
      title: "Chirurgie Orală",
      description: "Intervenții chirurgicale de specialitate",
      icon: <FontAwesomeIcon icon={faUserMd} size="2x" />
    }
];

export default function Home() {
  const navigate=useNavigate();

  return (
    <div className="home-page">      
      <div className="hero">
        <h1>Bine ați venit la SmileClinic</h1>
        <p>Transformăm zâmbete și construim încredere prin servicii dentare de excelență</p>
        <button className="btn-primary" 
        onClick={()=>{navigate('/contact')}}>Programează o Consultație</button>
      </div>


      <div className="services-preview">
        {services.map((s, i) => (
          <div key={i} className="service-card">
            <div className="icon">{s.icon}</div>
            <h3>{s.title}</h3>
            <p className='description'>{s.description}</p>
          </div>
        ))}
      </div>

    </div>
  );
}
