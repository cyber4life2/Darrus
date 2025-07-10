import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, User } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const Programs = () => {
  const [sectionRef, sectionInView] = useInView();
  const [collegeRef, collegeInView] = useInView();
  
  const programs = [
    {
      title: "English Course",
      description: "Structured English learning program with three progressive levels",
      levels: ["Level One: Basic Grammar & Vocabulary", "Level Two: Intermediate Grammar & Conversation", "Level Three: Advanced English for Academic & Professional Use"],
      isPremium: true,
      category: "Language Learning"
    },
    {
      title: "Online Resitting Program",
      description: "Comprehensive exam preparation across all subjects",
      levels: ["Arts Subjects: History, Kiswahili, Civics, Geography", "Science Subjects: Physics, Chemistry, Biology, Mathematics", "Business Subjects: Commerce, Bookkeeping, Economics"],
      isPremium: true,
      category: "Exam Preparation"
    },
    {
      title: "Online Tuition Program",
      description: "Structured tuition support for all education levels",
      levels: ["Primary Schools: Class-based materials Std I–VII", "Secondary Schools: Form I–VI all streams", "Colleges & Universities: Higher learning materials"],
      isPremium: true,
      category: "Academic Support"
    },
    {
      title: "School Materials",
      description: "Essential academic resources and exam materials",
      levels: ["✅ Exams: National past papers, Mock exams, Trial tests", "📚 Books: Academic books and references (PDF view-only)", "💼 Holiday Packages: Structured learning kits (Premium)"],
      isPremium: false,
      category: "Study Resources"
    }
  ];

  return (
    <section id="programs" className="py-16 bg-white">
      <div ref={sectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 transition-all duration-1000 ${
          sectionInView ? 'animate-fade-in opacity-100' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Educational Programs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive learning solutions designed to meet your educational needs at every level.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <Card 
              key={index} 
              className={`h-full hover:shadow-xl transform hover:scale-105 transition-all duration-1000 ${
                sectionInView ? 'animate-fade-in opacity-100' : 'opacity-0 translate-y-10'
              }`}
              style={{ 
                animationDelay: sectionInView ? `${index * 200}ms` : '0ms',
                transitionDelay: sectionInView ? `${index * 200}ms` : '0ms'
              }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge 
                    variant={program.isPremium ? "default" : "secondary"}
                    className={`${program.isPremium ? "bg-blue-600" : "bg-green-600"} transition-all duration-300 hover:scale-110`}
                  >
                    {program.isPremium ? "Premium Access" : "Free Access"}
                  </Badge>
                  <span className="text-sm text-gray-500">{program.category}</span>
                </div>
                <CardTitle className="flex items-center space-x-2">
                  <BookOpen className="h-5 w-5 text-blue-600 animate-pulse" />
                  <span>{program.title}</span>
                </CardTitle>
                <CardDescription className="text-base">
                  {program.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  {program.levels.map((level, levelIndex) => (
                    <div 
                      key={levelIndex} 
                      className="flex items-start space-x-2"
                    >
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0 animate-pulse"></div>
                      <p className="text-gray-700 text-sm">{level}</p>
                    </div>
                  ))}
                </div>
                <Button 
                  className={`w-full transition-all duration-300 transform hover:scale-105 ${program.isPremium ? 'bg-gray-900 hover:bg-gray-800' : 'bg-green-600 hover:bg-green-700'}`}
                >
                  {program.isPremium ? 'Subscribe Now' : 'Access Free Materials'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div 
          ref={collegeRef}
          className={`mt-12 bg-blue-50 p-8 rounded-lg hover:bg-blue-100 transition-all duration-1000 ${
            collegeInView ? 'animate-fade-in opacity-100' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center">
            <User className="h-12 w-12 text-blue-600 mx-auto mb-4 animate-bounce" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">College & University Materials</h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className={`transition-all duration-1000 delay-300 ${
                collegeInView ? 'animate-fade-in opacity-100' : 'opacity-0 translate-y-10'
              }`}>
                <h4 className="font-semibold text-blue-600 mb-2">🎓 Education</h4>
                <ul className="text-gray-700 space-y-1">
                  <li>• Teaching methodologies</li>
                  <li>• Educational psychology</li>
                  <li>• Curriculum & Instruction</li>
                </ul>
              </div>
              <div className={`transition-all duration-1000 delay-500 ${
                collegeInView ? 'animate-fade-in opacity-100' : 'opacity-0 translate-y-10'
              }`}>
                <h4 className="font-semibold text-blue-600 mb-2">💻 IT</h4>
                <ul className="text-gray-700 space-y-1">
                  <li>• Programming basics</li>
                  <li>• Database management</li>
                  <li>• Web & Mobile development</li>
                </ul>
              </div>
            </div>
            <p className={`text-sm text-gray-600 mt-4 transition-all duration-1000 delay-700 ${
              collegeInView ? 'animate-fade-in opacity-100' : 'opacity-0 translate-y-10'
            }`}>
              All resources are secure, view-only, and accessible after payment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;