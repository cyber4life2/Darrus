import Navigation from "../navigation";
import About from "../about";
import Footer from "../footer";
import { Head } from "@inertiajs/react";


const AboutPage = () => {
  return (
    <>
    <Head title="About" />
    <div className="min-h-screen bg-white">
      <Navigation />
      <About />
      <Footer />
    </div>
    </>
  );
};

export default AboutPage;