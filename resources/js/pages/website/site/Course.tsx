import Navigation from "../navigation";
import Footer from "../footer";
import { Head } from "@inertiajs/react";

const Courses = () => {
  return (
    <>
    <Head title="About" />
    <div className="min-h-screen bg-white">
      <Navigation />
      <Footer />
    </div>
    </>
  );
};

export default Courses;