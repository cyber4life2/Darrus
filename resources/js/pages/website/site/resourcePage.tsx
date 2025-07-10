import Navigation from "../navigation";
import News from "../news";
import Footer from "../footer";
import { Head } from "@inertiajs/react";

const ResourcesPage = () => {
  return (
    <><Head title="Resources" />
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Resources
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access study materials, past papers, and educational resources to enhance your learning experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">Study Materials</h3>
              <p className="text-gray-600 mb-4">Comprehensive study guides and reference materials for all subjects.</p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
                Access Materials
              </button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-green-600 mb-4">Past Papers</h3>
              <p className="text-gray-600 mb-4">Previous examination papers to help you prepare for upcoming tests.</p>
              <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors">
                Download Papers
              </button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-purple-600 mb-4">Online Library</h3>
              <p className="text-gray-600 mb-4">Digital library with educational books and references.</p>
              <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition-colors">
                Browse Library
              </button>
            </div>
          </div>
        </div>
      </div>
      <News />
      <Footer />
    </div></>
  );
};

export default ResourcesPage;