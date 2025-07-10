import Navigation from "../navigation";
import Contact from "../contact";
import Footer from "../footer";
import { Head } from "@inertiajs/react";

const ContactPage = () => {
  return (
    <><Head title="Contact" />
    <div className="min-h-screen bg-white">
      <Navigation />
      <Contact />
      <Footer />
    </div>
    </>
  );
};

export default ContactPage;