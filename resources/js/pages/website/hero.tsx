import { Button } from "@/components/ui/button";
import { useInView } from "@/hooks/useInView";


const Hero = () => {
  const [heroRef, heroInView] = useInView();

  const scrollToPrograms = () => {
    const element = document.getElementById('programs');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="bg-[url('/assets/images/slider1.jpg')] bg-cover bg-center text-white">
      <div 
        ref={heroRef}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32"
      >
        <div className="text-center">
          <h1 className={`text-4xl md:text-6xl font-bold mb-6 leading-tight transition-all duration-1000 ${
            heroInView ? 'animate-fade-in opacity-100' : 'opacity-0 translate-y-10'
          }`}>
            Empowering Learners.
            <br />
            <span className="text-green-300">Transforming Futures.</span>
          </h1>
          <p className={`text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-blue-100 transition-all duration-1000 delay-300 ${
            heroInView ? 'animate-fade-in opacity-100' : 'opacity-0 translate-y-10'
          }`}>
            Welcome to DARRUS EXCELLENCE IN EDUCATION PROGRAM (DEEP-TZ) — Your gateway to quality education, 
            resitting programs, tuition support, and study materials for all levels.
          </p>
          
          <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 transition-all duration-1000 delay-600 ${
            heroInView ? 'animate-fade-in opacity-100' : 'opacity-0 translate-y-10'
          }`}>
            <Button 
              onClick={scrollToPrograms}
              size="lg" 
              className="bg-white text-gray-900 hover:bg-gray-100 text-lg px-8 py-3 transform hover:scale-105 transition-all duration-300"
            >
              Explore Courses
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-gray-900 hover:bg-white hover:text-gray-600 text-lg px-8 py-3 transform hover:scale-105 transition-all duration-300"
            >
              Join Now
            </Button>
          </div>

          <div className={`text-center transition-all duration-1000 delay-900 ${
            heroInView ? 'animate-fade-in opacity-100' : 'opacity-0 translate-y-10'
          }`}>
            <p className="text-lg mb-6 text-blue-100">
              "Welcome to DEEP-TZ! Whether you're preparing for exams, learning English, or seeking quality tuition support, 
              we are here for you. Invest in your education today and build the future you deserve."
            </p>
            <p className="text-sm text-blue-200">— Founder/Director, DEEP-TZ</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
