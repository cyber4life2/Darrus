import { CheckCircle } from "lucide-react";

const WhyChoose = () => {
  const features = [
    "Affordable and accessible online learning",
    "High-quality notes, audio, and video lessons",
    "Safe and secure payment system",
    "Designed for Tanzanian students and beyond"
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose DEEP-TZ?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the advantages that make us the preferred choice for quality education in Tanzania.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start space-x-4">
              <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
              <p className="text-lg text-gray-700">{feature}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
