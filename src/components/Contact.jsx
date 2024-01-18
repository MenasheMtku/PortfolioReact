export default function Contact() {
  return (
    <section id="section-contact" className="section text-center">
      <h2 className="section-heading">Contact Me</h2>
      <form
        className="grid-form"
        method="POST"
        data-netlify="true"
        data-netlify-recaptcha="true"
      >
        <div className="text-fields">
          <input
            type="text"
            className="text-input name-input"
            placeholder="Name"
            name="name"
          />
          <input
            type="text"
            className="text-input subject-input"
            placeholder="Subject"
            name="subject"
          />
          <input
            type="email"
            className="text-input email-input"
            placeholder="Email Address"
            name="email"
            required
          />
          <input
            type="tel"
            className="text-input phone-input"
            placeholder="Phone Number"
            name="phone"
            required
          />
          <textarea
            className="text-input message-input"
            placeholder="Enter Message"
            name="message"
          ></textarea>
          <div>
            <div data-netlify-recaptcha="true"></div>
          </div>
          <button type="submit" className="btn-dark">
            Send
          </button>
        </div>
      </form>
    </section>
  );
}
