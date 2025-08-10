import bg from "../../assets/Contact/bg.png";
import Hero from "../../components/Hero";
import ContactForm from "./ContactForm";

function Contact() {
  return (
    <div className="contact">
      <Hero
        title={"KONTAK KAMI"}
        backgroundImage={bg}
        children={
          <div class="absolute inset-0 bg-gradient-to-r from-black/70 to-[#BCBCBC]/40"></div>
        }
      />
      <ContactForm/>
    </div>
  );
}
export default Contact;
