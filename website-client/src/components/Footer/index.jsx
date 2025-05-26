import './styles.css'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__info">
        <p><strong>SmileClinic</strong></p>
        <p>Str. Republicii Nr.74, Cluj-Napoca</p>
        <p>Telefon: <a href="tel:+40123456789">+40737956145</a></p>
        <p>Email: <a href="mailto:contact@dentalclinic.ro">contact@dentalclinic.ro</a></p>
      </div>
      <div className="site-footer__credits">
        <p>© {new Date().getFullYear()} DentalClinic. Toate drepturile rezervate.</p>
      </div>
    </footer>
  )
}
