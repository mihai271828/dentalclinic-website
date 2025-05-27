import React from 'react';
import './styles.css';
import './styles.css';

const tabelServicii = [
  { manopera: 'Consult stomatologic', pret: '100 RON' },
  { manopera: 'Detartraj ultrasonic', pret: '200 RON' },
  { manopera: 'Chiuretaj gingival', pret: '250 RON' },
  { manopera: 'Obturatie standard', pret: '200 RON' },
  { manopera: 'Tratament de canal (per canal)', pret: '350 RON' },
  { manopera: 'Albire profesională', pret: '500 RON' },
];

export default function Servicii() {
  return (
    <section className="services-page">
      <h1>Servicii &amp; Tarife</h1>
      <table className="services-table">
        <thead>
          <tr>
            <th>Manoperă</th>
            <th>Preț</th>
          </tr>
        </thead>
        <tbody>
          {tabelServicii.map((item, i) => (
            <tr key={i}>
              <td>{item.manopera}</td>
              <td>{item.pret}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

