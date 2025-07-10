import { Calendar, User, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useInView } from "@/hooks/useInView";
import slide1 from '../../../../public/assets/images/slider1.jpg';

const News = () => {
  const [sectionRef, sectionInView] = useInView<HTMLDivElement>();

  const newsItems = [
    {
      id: 1,
      title: "New Online Learning Platform Launched",
      excerpt: "We're excited to announce our new interactive online learning platform with enhanced features for better student engagement.",
      date: "2024-06-15",
      author: "DEEP-TZ Team",
      category: "Platform Update",
      image: slide1
    },
    {
      id: 2,
      title: "Form Six Results Support Program",
      excerpt: "Special support program for Form Six students with comprehensive study materials and one-on-one tutoring sessions.",
      date: "2024-06-10",
      author: "Academic Team",
      category: "Academic Support",
      image: slide1
    },
    {
      id: 3,
      title: "English Proficiency Course Enrollment Open",
      excerpt: "Join our comprehensive English language course designed for Tanzanian students to improve communication skills. ",
      date: "2024-06-08",
      author: "Language Department",
      category: "Course Launch",
      image: slide1
    }
    
  ];

  return (
    <section id="news" className="py-16 bg-white">
      <div ref={sectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 transition-all duration-1000 ${
          sectionInView ? 'animate-fade-in opacity-100' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Latest News & Updates
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay informed with the latest developments, announcements, and educational insights from DEEP-TZ.
          </p>
        </div>
      
        <div className="grid md:grid-cols-2  lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <Card 
              key={item.id}
              className={`hover:shadow-lg transition-all p-0 duration-1000 ${
                sectionInView ? 'animate-fade-in opacity-100' : 'opacity-0 translate-y-10'
              }`}
              style={{ 
                animationDelay: sectionInView ? `${(index + 1) * 200}ms` : '0ms',
                transitionDelay: sectionInView ? `${(index + 1) * 200}ms` : '0ms'
              }}
            >
              <div className="aspect-video bg-gray-200 rounded-t-lg overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <Calendar className="h-4 w-4 mr-1" />
                  {new Date(item.date).toLocaleDateString()}
                  <span className="mx-2">•</span>
                  <User className="h-4 w-4 mr-1" />
                  {item.author}
                </div>
                <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mb-2">
                  {item.category}
                </span>
                <CardTitle className="text-lg">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{item.excerpt}</p>
                <div className="pb-4">
                  <Button variant="outline" className="w-full">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className={`text-center mt-12 transition-all duration-1000 delay-800 ${
          sectionInView ? 'animate-fade-in opacity-100' : 'opacity-0 translate-y-10'
        }`}>
          <Button size="lg" className="bg-gray-900 hover:bg-gray-800">
            View All News
          </Button>
        </div>
      </div>
    </section>
  );
};

export default News;