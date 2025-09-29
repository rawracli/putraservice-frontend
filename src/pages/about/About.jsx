import bg from "../../assets/About/bg.webp";
import Hero from "../../components/Hero";
import Content from "./section/Content";
import StackedSection from "./section/StackedSection";
import Transition from "./section/Transition";

function About() {

  return (
    <>
      <title>Tentang Putra Service — Teknisi AC Profesional di Sukabumi</title>
      <meta name="description" content="Putra Service: teknisi AC berpengalaman melayani Sukabumi & Cianjur. Berpengalaman, bergaransi, dan fokus pada kepuasan pelanggan. Pelajari tim & layanan kami." />
      <div className="flex flex-col contact">
        <Hero title={"TENTANG PUTRA SERVICE"} backgroundImage={bg} backgroundPosition={"60% center"}/>
        <Content/>
        <Transition/>
        <StackedSection/>
      </div>
    </>
  );
}

export default About;
