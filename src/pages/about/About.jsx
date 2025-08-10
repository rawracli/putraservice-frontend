import bg from "../../assets/About/bg.jpg";
import Hero from "../../components/Hero";
import Content from "./section/Content";
import StackedSection from "./section/StackedSection";
import Transition from "./section/Transition";

function About() {

  return (
    <div className="flex flex-col contact">
      <Hero title={"TENTANG KAMI"} backgroundImage={bg}/>
      <Content/>
      <Transition/>
      <StackedSection/>
    </div>
  );
}

export default About;
