import bg from "../../assets/Contact/bg.webp";
import Hero from "../../components/Hero";
import ContactForm from "./ContactForm";

function Contact() {
  return (
    <>
      <title>Kontak Putra Service - Hubungi Kami Sekarang</title>
      <meta name="description" content="Butuh teknisi AC sekarang? Booking servis lewat WhatsApp atau telepon. Layanan cepat untuk Sukabumi & Cianjur — klik untuk hubungi kami." />
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
