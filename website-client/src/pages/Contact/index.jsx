import { useState } from 'react'
import './styles.css'


export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Submitted:', form)
    // TODO: trimite către API
  }

  return (
    <div className="contact-form__wrapper">
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-header">
          {/* Dacă ai un SVG, îl poți importa și afișa aici */}
          {/* <MailIcon className="form-icon" /> */}
          <h2>Formular de Contact</h2>
          <p>Te rugăm completează câmpurile de mai jos.</p>
        </div>

        <label className="form-group">
          <span>Nume</span>
          <input
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="Ex: Ioana Popescu"
          />
        </label>

        <label className="form-group">
          <span>Email</span>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="exemplu@domeniu.ro"
          />
        </label>

        <label className="form-group">
          <span>Mesaj</span>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            placeholder="Scrie mesajul tău aici…"
          />
        </label>

        <button type="submit" className="btn-submit">
          Trimite mesajul
        </button>
      </form>
    </div>
  )
}
