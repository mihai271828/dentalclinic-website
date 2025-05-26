import './styles.css';

export default function Contact() {
  return (
    <div className="contact-page">
      <h1>Contact</h1>
      <form>
        <label>
          Nume
          <input type="text" name="name" />
        </label>
        <label>
          Email
          <input type="email" name="email" />
        </label>
        <label>
          Mesaj
          <textarea name="message" />
        </label>
        <button type="submit">Trimite</button>
      </form>
    </div>
  );
}
