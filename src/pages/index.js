import Contact from "../components/Contact";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Pricing from "../components/Pricing";
import Resume from "../components/Resume";
import SEO from "../components/SEO";
import Team from "../components/Team";
import WhyChoose from "../components/WhyChoose";

const index = () => {
  return (
    <>
      <SEO title="Inicio" />
      <Header />
      <Hero />
      <Resume />
      <WhyChoose />
      <Pricing />
      <Team />
      <Contact />
    </>
  );
};

export default index;
