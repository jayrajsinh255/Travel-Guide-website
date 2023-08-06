import "./ContactFormStyles.css";

function ContactForm() {
  return (
    <div class="contact-form">
      <h3>Send a Message to us</h3>
      <form>
        <input placeholder="Name" />
        <input placeholder="email" />
        <input placeholder="subject" />
        <textarea placeholder="message" rows="4" />
        <button>Submit</button>
      </form>
    </div>
  );
}
export default ContactForm;
