import { ReactNode } from 'react';
import { usePage } from '@inertiajs/react';
import { router } from '@inertiajs/react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Footer from '@/pages/website/footer';
import { Banknote, BookOpen, Home, LogOut, Settings } from 'lucide-react';
import { type SharedData } from '@/types';
import Navigation from '@/pages/website/navigation';

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const { auth } = usePage<SharedData>().props;
  const user = auth.user;

  const handleLogout = () => {
    router.post(route('logout'));
  };

  const sidebarItems = [
    {
      label: 'Dashboard',
      icon: <Home size={16} className="mr-2" />,
      onClick: () => router.visit(route('dashboard')),
    },
    {
      label: 'Enrolled Courses',
      icon: <BookOpen size={16} className="mr-2" />,
      onClick: () => router.visit(route('courses.index')),
    },
    {
      label: 'Payment History',
      icon: <Banknote size={16} className="mr-2" />,
      onClick: () => router.visit(route('payments.index')),
    },
    {
      label: 'Profile Settings',
      icon: <Settings size={16} className="mr-2" />,
      onClick: () => router.visit(route('profile.index')),
    },
    {
      label: 'Logout',
      icon: <LogOut size={16} className="mr-2" />,
      onClick: handleLogout,
    },
  ];

  return (
    <>
    <Navigation/>
      <div className="min-h-screen bg-gray-100 text-gray-800">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          {/* Banner */}
          <div className="rounded-md bg-[#1d4590] px-4 py-16 text-center sm:text-left">
            <div className="flex flex-col items-center px-16 sm:flex-row sm:justify-between">
              <div className="flex flex-col items-center sm:flex-row sm:space-x-4">
                <Avatar className="h-20 w-20 border-4 border-white mb-4 sm:mb-0">
                  <AvatarImage src="/assets/images/slider1.jpg" />
                  <AvatarFallback>{user.name.slice(0, 2).toUpperCase()}</AvatarFallback>
                </Avatar>
                <div className="text-white text-center sm:text-left">
                  <h2 className="text-xl font-bold">{user.name}</h2>
                  <p className="text-sm">{user.email}</p>
                </div>
              </div>
              <div className="mt-4 sm:mt-0">
                <Button className="rounded-full bg-yellow-400 px-4 py-2 font-semibold text-black hover:bg-yellow-500">
                  Your Excellence →
                </Button>
              </div>
            </div>
          </div>

          {/* Main Layout Grid */}
          <div className="grid grid-cols-1 gap-6 py-6 sm:grid-cols-1 md:grid-cols-4">
            {/* Sidebar */}
            <div className="md:col-span-1">
              <Card className="rounded-md">
                <CardContent className="space-y-2 pt-4">
                  <div className="text-center font-semibold pb-4 text-gray-700 md:text-left">
                    WELCOME, {user.name.toUpperCase()}
                  </div>
                  <ul className="space-y-2">
                    {sidebarItems.map((item) => (
                      <li
                        key={item.label}
                        onClick={item.onClick}
                        className="flex items-center cursor-pointer border-b pb-3 hover:text-[#1d4590] transition-all"
                      >
                        {item.icon}
                        <span>{item.label}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Page Content */}
            <div className="md:col-span-3">{children}</div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DashboardLayout;
