import bg from "../../assets/Contact/bg.webp";
import Hero from "../../components/Hero";
import ContactForm from "./ContactForm";

function Contact() {
  return (
    <>
      <title>Kontak Putra Service - Hubungi Kami Sekarang</title>
      <meta name="description" content="Butuh bantuan teknisi? Hubungi Putra Service melalui telepon, WhatsApp, atau email. Kami siap melayani Anda dengan cepat." />
      <div className="contact">
        <Hero
          title={"KONTAK KAMI"}
          backgroundImage={bg}
          backgroundPosition={"60% center"}
          children={
            <div class="absolute inset-0 bg-gradient-to-r from-black/70 to-[#BCBCBC]/40"></div>
          }
          />
        <ContactForm/>
      </div>
    </>
  );
}
export default Contact;
