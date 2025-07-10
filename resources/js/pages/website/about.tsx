import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useInView } from "@/hooks/useInView";

const About = () => {
  const [sectionRef, sectionInView] = useInView();

  return (
    <section id="about" className="py-16 bg-gray-50">
      <div ref={sectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 transition-all duration-1000 ${
          sectionInView ? 'animate-fade-in opacity-100' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About DEEP-TZ
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn more about our mission, vision, and commitment to educational excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className={`text-center hover:shadow-xl transform hover:scale-105 transition-all duration-1000 ${
            sectionInView ? 'animate-fade-in opacity-100' : 'opacity-0 translate-y-10'
          }`} style={{ transitionDelay: sectionInView ? '200ms' : '0ms' }}>
            <CardHeader>
              <CardTitle className="text-gray-900">Who We Are</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                DEEP-TZ is an innovative digital learning platform based in Tanzania, committed to improving 
                academic excellence across all education levels. From English courses to online resitting programs 
                and tuition, our platform is designed to empower students, teachers, and lifelong learners.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className={`text-center hover:shadow-xl transform hover:scale-105 transition-all duration-1000 ${
            sectionInView ? 'animate-fade-in opacity-100' : 'opacity-0 translate-y-10'
          }`} style={{ transitionDelay: sectionInView ? '400ms' : '0ms' }}>
            <CardHeader>
              <CardTitle className="text-green-600">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                To provide affordable and high-quality educational resources that promote success for students 
                at all levels, making quality education accessible to everyone in Tanzania and beyond.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className={`text-center hover:shadow-xl transform hover:scale-105 transition-all duration-1000 ${
            sectionInView ? 'animate-fade-in opacity-100' : 'opacity-0 translate-y-10'
          }`} style={{ transitionDelay: sectionInView ? '600ms' : '0ms' }}>
            <CardHeader>
              <CardTitle className="text-gray-900">Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                To become a leading provider of digital education in East Africa, transforming lives through 
                innovative learning solutions and empowering the next generation of leaders.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;