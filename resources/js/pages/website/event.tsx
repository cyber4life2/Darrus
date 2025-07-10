import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useInView } from '@/hooks/useInView';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';

const Events = () => {
    const [sectionRef, sectionInView] = useInView<HTMLDivElement>();

    const upcomingEvents = [
        {
            id: 1,
            title: 'Form Four Mathematics Workshop',
            description:
                'Intensive mathematics workshop covering algebra, geometry, and calculus for Form Four students preparing for national examinations.',
            date: '2024-07-15',
            time: '09:00 AM - 03:00 PM',
            location: 'DEEP-TZ Main Campus, Dar es Salaam',
            capacity: '50 students',
            category: 'Workshop',
            status: 'Open for Registration',
        },
        {
            id: 2,
            title: 'English Speaking Competition',
            description: 'Annual English speaking competition for students to showcase their communication skills and build confidence.',
            date: '2024-07-22',
            time: '02:00 PM - 05:00 PM',
            location: 'Virtual Event (Online)',
            capacity: '100 participants',
            category: 'Competition',
            status: 'Registration Closing Soon',
        },
        {
            id: 3,
            title: 'Career Guidance Seminar',
            description: 'Professional guidance session for students exploring career paths after completing their education.',
            date: '2024-08-05',
            time: '10:00 AM - 12:00 PM',
            location: 'Community Hall, Mwanza',
            capacity: '75 students',
            category: 'Seminar',
            status: 'Open for Registration',
        },
        {
            id: 4,
            title: 'Parents & Students Orientation',
            description: 'Orientation session for new students and their parents about DEEP-TZ programs and learning methodologies.',
            date: '2024-08-12',
            time: '01:00 PM - 04:00 PM',
            location: 'DEEP-TZ Regional Center, Arusha',
            capacity: '200 attendees',
            category: 'Orientation',
            status: 'Open for Registration',
        },
    ];

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'Registration Closing Soon':
                return 'bg-orange-100 text-orange-800';
            case 'Open for Registration':
                return 'bg-green-100 text-green-800';
            default:
                return 'bg-blue-100 text-blue-800';
        }
    };

    return (
        <section id="events" className="bg-gray-50 py-8">
            <div ref={sectionRef} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div
                    className={`mb-12 text-center transition-all duration-1000 ${
                        sectionInView ? 'animate-fade-in opacity-100' : 'translate-y-10 opacity-0'
                    }`}
                >
                    <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">Upcoming Events</h2>
                    <p className="mx-auto max-w-3xl text-xl text-gray-600">
                        Join our educational events, workshops, and seminars designed to enhance your learning experience.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2">
                    {upcomingEvents.map((event, index) => (
                        <Card
                            key={event.id}
                            className={`transition-all duration-1000 hover:shadow-lg ${
                                sectionInView ? 'animate-fade-in opacity-100' : 'translate-y-10 opacity-0'
                            }`}
                            style={{
                                animationDelay: sectionInView ? `${(index + 1) * 200}ms` : '0ms',
                                transitionDelay: sectionInView ? `${(index + 1) * 200}ms` : '0ms',
                            }}
                        >
                            <CardHeader>
                                <div className="mb-2 flex items-center justify-between">
                                    <span className="inline-block rounded-full bg-blue-100 px-2 py-1 text-xs text-blue-800">{event.category}</span>
                                    <span className={`inline-block rounded-full px-2 py-1 text-xs ${getStatusColor(event.status)}`}>
                                        {event.status}
                                    </span>
                                </div>
                                <CardTitle className="text-xl">{event.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="mb-4 text-gray-600">{event.description}</p>

                                <div className="mb-6 space-y-2">
                                    <div className="flex items-center text-sm text-gray-600">
                                        <Calendar className="mr-2 h-4 w-4 text-blue-600" />
                                        {new Date(event.date).toLocaleDateString('en-US', {
                                            weekday: 'long',
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric',
                                        })}
                                    </div>
                                    <div className="flex items-center text-sm text-gray-600">
                                        <Clock className="mr-2 h-4 w-4 text-blue-600" />
                                        {event.time}
                                    </div>
                                    <div className="flex items-center text-sm text-gray-600">
                                        <MapPin className="mr-2 h-4 w-4 text-blue-600" />
                                        {event.location}
                                    </div>
                                    <div className="flex items-center text-sm text-gray-600">
                                        <Users className="mr-2 h-4 w-4 text-blue-600" />
                                        {event.capacity}
                                    </div>
                                </div>

                                <Button className="w-full bg-gray-900 hover:bg-gray-800">Register Now</Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div
                    className={`mt-12 text-center transition-all delay-800 duration-1000 ${
                        sectionInView ? 'animate-fade-in opacity-100' : 'translate-y-10 opacity-0'
                    }`}
                >
                    <div className="flex flex-col justify-center gap-4 sm:flex-row">
                        <Button size="lg" variant="outline" className="sm:mr-4">
                            View Event Calendar
                        </Button>
                        <Button size="lg" className="bg-gray-900 hover:bg-gray-800">
                            Submit Event Proposal
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Events;
