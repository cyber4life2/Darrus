import Navigation from "../navigation";
import Programs from "../programs";
import Footer from "../footer";
import { Head } from "@inertiajs/react";

const ProgramsPage = () => {
  return (
    <><Head title="Programs" /><div className="min-h-screen bg-white">
      <Navigation />
      <Programs />
      <Footer />
    </div></>
  );
};

export default ProgramsPage;