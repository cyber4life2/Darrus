import Navigation from "./website/navigation";
import Hero from "./website/hero";
import Footer from "./website/footer";
import About from "./website/about";
import Programs from "./website/programs";
import WhyChoose from "./website/whychoose";
import Events from "./website/event";
import News from "./website/news";
import { Head } from "@inertiajs/react";
import Contact from "./website/contact";





export default function Welcome() {
  return (
    <>
    <Head title="Home"/>
      <Navigation />
      <Hero />
      <About />
      <Events />
      <News />
      <Programs />
      <WhyChoose />
      <Contact />
      <Footer />
    </>
  );
}