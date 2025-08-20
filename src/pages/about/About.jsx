import bg from "../../assets/About/bg.webp";
import Hero from "../../components/Hero";
import Content from "./section/Content";
import StackedSection from "./section/StackedSection";
import Transition from "./section/Transition";

function About() {

  return (
    <div className="flex flex-col contact">
      <Hero title={"TENTANG KAMI"} backgroundImage={bg} backgroundPosition={"60% center"}/>
      <Content/>
      <Transition/>
      <StackedSection/>
    </div>
  );
}

export default About;
