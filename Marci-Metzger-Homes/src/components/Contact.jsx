import { useState } from "react";
import "./styles/Contact.css";

export default function Contact({
  eyebrow = "Call or visit",
  title = "Let's make your next move feel simple.",
  agent = "Marci Metzger \u00b7 The Ridge Realty Group",
  address = ["3190 HW-160, Suite F, Pahrump, Nevada 89048"],
  phone = "(206) 919-6886",
  hours = "Open daily \u00b7 8:00 am \u2013 7:00 pm",
  note = "Appointments outside office hours are available upon request. Just call!",
  onSubmit,
}) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(form);
    }
    setStatus("sent");
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setStatus("idle"), 2500);
  };

  return (
    <section className="contact">
      <div className="contact-grid">
        <div className="contact-info">
          <p className="contact-eyebrow">{eyebrow}</p>
          <h2 className="contact-title">{title}</h2>

          <div className="contact-details">
            <p>{agent}</p>
            {address.map((line, i) => (
              <p key={i}>{line}</p>
            ))}
            <p>{phone}</p>
            <p>{hours}</p>
          </div>

        </div>

        <div className="contact-card">
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              className="contact-input"
              type="text"
              name="name"
              placeholder="Your name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              className="contact-input"
              type="email"
              name="email"
              placeholder="Email address"
              value={form.email}
              onChange={handleChange}
              required
            />
            <textarea
              className="contact-textarea"
              name="message"
              placeholder="How can we help?"
              value={form.message}
              onChange={handleChange}
              required
            />

            <button type="submit" className="contact-submit" disabled={status === "sending"}>
              {status === "sent" ? "Message sent" : "Send message"}
            </button>
          </form>

          <p className="contact-note">{note}</p>
        </div>
      </div>
    </section>
  );
}