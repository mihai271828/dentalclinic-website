import { useState } from 'react'
import './styles.css'


export default function ContactForm() {
    const [form, setForm] = useState({ name: '', email: '', message: '' })
    const [status, setStatus] = useState(null)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('trimit…')

    try {
      const res = await fetch('http://localhost:8000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (!res.ok) {
        const err = await res.json()
        console.error(err)
        setStatus('Eroare la trimitere')
        return
      }

      const { message } = await res.json()
      alert(message)          // “Mesaj trimis cu succes!”
      setForm({ name: '', email: '', message: '' })
      setStatus('trimis')
    } catch (e) {
      console.error(e)
      setStatus('A apărut o eroare')
    }
  }

  return (
    <div className="contact-form__wrapper">
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-header">
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

        {status && (
          <p style={{ marginTop: '12px', textAlign: 'center' }}>{status}</p>
        )}
      </form>
    </div>
  )
}
