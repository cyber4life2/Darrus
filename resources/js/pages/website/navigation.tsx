import { Button } from '@/components/ui/button';
import { ChevronDown, Facebook, Linkedin, Mail, Menu, Phone, Twitter, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import '../../../css/style.css';

import AppLogo from '@/components/app-logo';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Link, router, usePage } from '@inertiajs/react';

const Navigation = () => {
  const { auth } = usePage().props;

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProgramsOpen, setIsProgramsOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [showTopBar, setShowTopBar] = useState(true);

  // Scroll listener to hide top bar
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowTopBar(scrollY < 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-lg">
      <div
        className={`bg-primary transition-all duration-500 ${
          showTopBar ? 'h-10 opacity-100' : 'h-0 overflow-hidden opacity-0'
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 py-2 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center px-5 text-white sm:flex-row sm:justify-between">
            <div className="flex items-center space-x-6 text-sm">
              <span className="flex items-center space-x-1">
                <Phone size={14} />
                <span>+255 222 222 222</span>
              </span>
              <span className="flex items-center space-x-1">
                <Mail size={14} />
                <a href="mailto:info@deeptz.com" className="hover:underline">
                  info@darrus.com
                </a>
              </span>
            </div>
            <div className="hidden space-x-4 sm:flex">
              <a href="#" title="Facebook">
                <Facebook size={16} />
              </a>
              <a href="#" title="Twitter">
                <Twitter size={16} />
              </a>
              <a href="#" title="LinkedIn">
                <Linkedin size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <a href="/">
              <AppLogo />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden items-center space-x-8 md:flex">
            <button
              onClick={() => router.visit(route('home'))}
              className="text-gray-700 transition-colors hover:text-gray-600"
            >
              Home
            </button>

            {/* Programs Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-gray-700 transition-colors outline-none hover:text-gray-600">
                Programs <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-50 border bg-white p-4 shadow-lg">
                <DropdownMenuItem>
                  <a href={route('site.programs')}>All Programs</a>
                </DropdownMenuItem>
                <DropdownMenuItem>Form Four & Six</DropdownMenuItem>
                <DropdownMenuItem>English Classes</DropdownMenuItem>
                <DropdownMenuItem>Tuition Support</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Resources Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-gray-700 transition-colors outline-none hover:text-gray-600">
                Resources <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-50 border bg-white p-4 shadow-lg">
                <DropdownMenuItem onClick={() => scrollToSection('news')}>News & Updates</DropdownMenuItem>
                <DropdownMenuItem onClick={() => scrollToSection('events')}>Upcoming Events</DropdownMenuItem>
                <DropdownMenuItem onClick={() => router.visit(route('site.resource'))}>
                  <a href={route('site.resource')}>Study Materials</a>
                </DropdownMenuItem>
                <DropdownMenuItem>Past Papers</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <button
              onClick={() => router.visit(route('site.about'))}
              className="text-gray-700 transition-colors hover:text-gray-600"
            >
              About
            </button>
            <button
              onClick={() => router.visit(route('site.contact'))}
              className="text-gray-700 transition-colors hover:text-gray-600"
            >
              Contact
            </button>

            {/* Conditionally show user info or Login/Register */}
            {auth?.user ? (
              <div className="flex items-center space-x-4">
                <span className="text-gray-700">Hello, {auth.user.name}</span>
                <button
                  onClick={() => router.post(route('logout'))}
                  className="text-gray-700 hover:text-gray-600"
                >
                  Logout
                </button>
              </div>
            ) : (
              <>
                <Link href={route('register')}>
                  <Button className="bg-primary hover:bg-gray-800">Register</Button>
                </Link>
                <Link href={route('login')}>
                  <Button className="bg-primary hover:bg-gray-800">Login</Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700 hover:text-gray-600">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="fixed inset-0 z-40">
            {/* Backdrop */}
            <div onClick={() => setIsMenuOpen(false)} className="bg-opacity-40 absolute inset-0 transition-opacity duration-300" />

            {/* Slide-in Menu */}
            <div className="absolute top-0 left-0 z-50 h-full w-100 translate-x-0 transform rounded-md bg-white shadow-lg transition-transform duration-300 md:hidden">
              <div className="space-y-1 overflow-y-auto px-4 pt-4 pb-6">
                <button
                  onClick={() => {
                    router.visit(route('site.home'));
                    setIsMenuOpen(false);
                  }}
                  className="block w-full rounded-md px-3 py-2 text-left text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                >
                  Home
                </button>

                {/* Programs Dropdown */}
                <div className="space-y-1">
                  <button
                    onClick={() => setIsProgramsOpen(!isProgramsOpen)}
                    className="flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-gray-700 hover:bg-gray-200 hover:text-gray-600"
                  >
                    Programs
                    <ChevronDown className={`h-4 w-4 transition-transform ${isProgramsOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isProgramsOpen && (
                    <div className="ml-4 space-y-1">
                      <button
                        onClick={() => {
                          router.visit(route('site.programs'));
                          setIsMenuOpen(false);
                        }}
                        className="block w-full rounded-md px-3 py-2 text-left text-sm text-gray-600 hover:bg-gray-200 hover:text-gray-600"
                      >
                        <a href={route('site.programs')}>All Programs</a>
                      </button>
                      <button className="block w-full rounded-md px-3 py-2 text-left text-sm text-gray-600 hover:bg-gray-200 hover:text-gray-600">
                        Form Four & Six
                      </button>
                      <button className="block w-full rounded-md px-3 py-2 text-left text-sm text-gray-600 hover:bg-gray-200 hover:text-gray-600">
                        English Classes
                      </button>
                      <button className="block w-full rounded-md px-3 py-2 text-left text-sm text-gray-600 hover:bg-gray-200 hover:text-gray-600">
                        Tuition Support
                      </button>
                    </div>
                  )}
                </div>

                {/* Resources Dropdown */}
                <div className="space-y-1">
                  <button
                    onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                    className="flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-gray-700 hover:bg-gray-200 hover:text-gray-600"
                  >
                    Resources
                    <ChevronDown className={`h-4 w-4 transition-transform ${isResourcesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isResourcesOpen && (
                    <div className="ml-4 space-y-1">
                      <button
                        onClick={() => {
                          router.visit(route('site.news'));
                          setIsMenuOpen(false);
                        }}
                        className="block w-full rounded-md px-3 py-2 text-left text-sm text-gray-600 hover:bg-gray-200 hover:text-gray-600"
                      >
                        News & Updates
                      </button>
                      <button
                        onClick={() => {
                          router.visit(route('site.events'));
                          setIsMenuOpen(false);
                        }}
                        className="block w-full rounded-md px-3 py-2 text-left text-sm text-gray-600 hover:bg-gray-200 hover:text-gray-600"
                      >
                        Upcoming Events
                      </button>
                      <button className="block w-full rounded-md px-3 py-2 text-left text-sm text-gray-600 hover:bg-gray-200 hover:text-gray-600">
                        <a href={route('site.resource')}>Study Materials</a>
                      </button>
                      <button className="block w-full rounded-md px-3 py-2 text-left text-sm text-gray-600 hover:bg-gray-200 hover:text-gray-600">
                        Past Papers
                      </button>
                    </div>
                  )}
                </div>

                <button
                  onClick={() => {
                    router.visit(route('site.about'));
                    setIsMenuOpen(false);
                  }}
                  className="block w-full rounded-md px-3 py-2 text-left text-gray-700 hover:bg-gray-200 hover:text-gray-600"
                >
                  About
                </button>
                <button
                  onClick={() => {
                    router.visit(route('site.contact'));
                    setIsMenuOpen(false);
                  }}
                  className="block w-full rounded-md px-3 py-2 text-left text-gray-700 hover:bg-gray-200 hover:text-gray-600"
                >
                  Contact
                </button>

                {/* Conditionally render Login/Register or User info */}
                {auth?.user ? (
                  <div className="space-y-2 px-3 pt-4">
                    <div className="text-gray-700">Hello, {auth.user.name}</div>
                    <Button
                      onClick={() => {
                        router.post(route('logout'));
                        setIsMenuOpen(false);
                      }}
                      className="w-full bg-primary hover:bg-gray-800"
                    >
                      Logout
                    </Button>
                  </div>
                ) : (
                  <>
                    <div className="px-3 pt-4">
                      <Button
                        onClick={() => {
                          router.visit(route('register'));
                          setIsMenuOpen(false);
                        }}
                        className="w-full bg-primary hover:bg-gray-800"
                      >
                        Register
                      </Button>
                    </div>
                    <div className="px-3 pt-4">
                      <Button
                        onClick={() => {
                          router.visit(route('login'));
                          setIsMenuOpen(false);
                        }}
                        className="w-full bg-primary hover:bg-gray-800"
                      >
                        Login
                      </Button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
