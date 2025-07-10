import { Breadcrumbs } from '@/components/breadcrumbs';
import { Icon } from '@/components/icon';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { NavigationMenu, NavigationMenuItem, NavigationMenuList, navigationMenuTriggerStyle } from '@/components/ui/navigation-menu';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { UserMenuContent } from '@/components/user-menu-content';
import { useInitials } from '@/hooks/use-initials';
import { cn } from '@/lib/utils';
import { type BreadcrumbItem, type NavItem, type SharedData } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import { BookOpen, Folder, LayoutGrid, Menu, Search } from 'lucide-react';
import AppLogo from './app-logo';
import AppLogoIcon from './app-logo-icon';

const mainNavItems: NavItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
        icon: LayoutGrid,
    },
];

const rightNavItems: NavItem[] = [
    {
        title: 'Repository',
        href: 'https://github.com/laravel/react-starter-kit',
        icon: Folder,
    },
    {
        title: 'Documentation',
        href: 'https://laravel.com/docs/starter-kits#react',
        icon: BookOpen,
    },
];

const activeItemStyles = 'text-neutral-900 dark:bg-neutral-800 dark:text-neutral-100';

interface AppHeaderProps {
    breadcrumbs?: BreadcrumbItem[];
}

export function AppHeader({ breadcrumbs = [] }: AppHeaderProps) {
    const page = usePage<SharedData>();
    const { auth } = page.props;
    const getInitials = useInitials();
    return (
        <>
            <div className="border-b border-sidebar-border/80">
                <div className="mx-auto flex h-16 items-center px-4 md:max-w-7xl">
                    {/* Mobile Menu */}
                    <div className="lg:hidden">
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon" className="mr-2 h-[34px] w-[34px]">
                                    <Menu className="h-5 w-5" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="left" className="flex h-full w-64 flex-col items-stretch justify-between bg-sidebar">
                                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                                <SheetHeader className="flex justify-start text-left">
                                    <AppLogoIcon className="h-6 w-6 fill-current text-black dark:text-white" />
                                </SheetHeader>
                                <div className="flex h-full flex-1 flex-col space-y-4 p-4">
                                    <div className="flex h-full flex-col justify-between text-sm">
                                        <div className="flex flex-col space-y-4">
                                            {mainNavItems.map((item) => (
                                                <Link key={item.title} href={item.href} className="flex items-center space-x-2 font-medium">
                                                    {item.icon && <Icon iconNode={item.icon} className="h-5 w-5" />}
                                                    <span>{item.title}</span>
                                                </Link>
                                            ))}
                                        </div>

                                        <div className="flex flex-col space-y-4">
                                            {rightNavItems.map((item) => (
                                                <a
                                                    key={item.title}
                                                    href={item.href}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center space-x-2 font-medium"
                                                >
                                                    {item.icon && <Icon iconNode={item.icon} className="h-5 w-5" />}
                                                    <span>{item.title}</span>
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>

                    <Link href="/dashboard" prefetch className="flex items-center space-x-2">
                        <AppLogo />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="ml-6 hidden h-full items-center space-x-6 lg:flex">
                        <NavigationMenu className="flex h-full items-stretch">
                            <NavigationMenuList className="flex h-full items-stretch space-x-2">
                                {mainNavItems.map((item, index) => (
                                    <NavigationMenuItem key={index} className="relative flex h-full items-center">
                                        <Link
                                            href={item.href}
                                            className={cn(
                                                navigationMenuTriggerStyle(),
                                                page.url === item.href && activeItemStyles,
                                                'h-9 cursor-pointer px-3',
                                            )}
                                        >
                                            {item.icon && <Icon iconNode={item.icon} className="mr-2 h-4 w-4" />}
                                            {item.title}
                                        </Link>
                                        {page.url === item.href && (
                                            <div className="absolute bottom-0 left-0 h-0.5 w-full translate-y-px bg-black dark:bg-white"></div>
                                        )}
                                    </NavigationMenuItem>
                                ))}
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>

                    <div className="ml-auto flex items-center space-x-2">
                        <div className="relative flex items-center space-x-1">
                            <Button variant="ghost" size="icon" className="group h-9 w-9 cursor-pointer">
                                <Search className="!size-5 opacity-80 group-hover:opacity-100" />
                            </Button>
                            <div className="hidden lg:flex">
                                {rightNavItems.map((item) => (
                                    <TooltipProvider key={item.title} delayDuration={0}>
                                        <Tooltip>
                                            <TooltipTrigger>
                                                <a
                                                    href={item.href}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="group ml-1 inline-flex h-9 w-9 items-center justify-center rounded-md bg-transparent p-0 text-sm font-medium text-accent-foreground ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
                                                >
                                                    <span className="sr-only">{item.title}</span>
                                                    {item.icon && <Icon iconNode={item.icon} className="size-5 opacity-80 group-hover:opacity-100" />}
                                                </a>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>{item.title}</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                ))}
                            </div>
                        </div>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" className="size-10 rounded-full p-1">
                                    <Avatar className="size-8 overflow-hidden rounded-full">
                                        <AvatarImage src={auth.user.avatar} alt={auth.user.name} />
                                        <AvatarFallback className="rounded-lg bg-neutral-200 text-black dark:bg-neutral-700 dark:text-white">
                                            {getInitials(auth.user.name)}
                                        </AvatarFallback>
                                    </Avatar>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56" align="end">
                                <UserMenuContent user={auth.user} />
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
            </div>
            {breadcrumbs.length > 1 && (
                <div className="flex w-full border-b border-sidebar-border/70">
                    <div className="mx-auto flex h-12 w-full items-center justify-start px-4 text-neutral-500 md:max-w-7xl">
                        <Breadcrumbs breadcrumbs={breadcrumbs} />
                    </div>
                </div>
            )}
        </>
    );
}

export function Header() {
    return (
        <header className="header w-full">
            {/* Topbar */}
            <div className="bg-gray-100 border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-center py-2 text-sm">
                        <div className="flex items-center space-x-4 text-gray-700">
                            <span className="flex items-center"><strong><Icon fa="fa-phone" className="mr-1" /></strong> +90 543 123 45 67</span>
                            <span className="flex items-center"><strong><Icon fa="fa-envelope" className="mr-1" /></strong> <a href="mailto:info@yoursite.com" className="hover:underline">info@yoursite.com</a></span>
                        </div>
                        <div className="flex items-center space-x-3 mt-2 md:mt-0">
                            <a className="text-blue-600 hover:text-blue-800" href="#" title="Facebook"><Icon fa="fa-facebook" /></a>
                            <a className="text-blue-400 hover:text-blue-600" href="#" title="Twitter"><Icon fa="fa-twitter" /></a>
                            <a className="text-red-500 hover:text-red-700" href="#" title="Google Plus"><Icon fa="fa-google-plus" /></a>
                            <a className="text-blue-700 hover:text-blue-900" href="#" title="Linkedin"><Icon fa="fa-linkedin" /></a>
                            <a className="text-red-600 hover:text-red-800" href="#" title="Pinterest"><Icon fa="fa-pinterest" /></a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Navbar */}
            <div className="bg-white shadow sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <div className="flex items-center space-x-2">
                            <a className="navbar-brand flex items-center" href="/">
                                <img src="/images/logo.png" alt="Logo" className="h-8 w-auto" />
                            </a>
                        </div>
                        {/* Desktop Menu */}
                        <ul className="hidden md:flex items-center space-x-6">
                            <li><a href="/" className="hover:text-blue-600 transition-colors">Home</a></li>
                            <li className="relative group">
                                <a href="#" className="flex items-center hover:text-blue-600 transition-colors">Mega Menu <Icon fa="fa-angle-down" className="ml-1" /></a>
                                {/* Mega Menu Dropdown */}
                                <div className="absolute left-0 top-full mt-2 w-[600px] bg-white shadow-lg rounded-lg p-6 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity z-50">
                                    <div className="flex">
                                        <div className="w-1/2 pr-4">
                                            <h4 className="font-semibold mb-2">Course Pages</h4>
                                            <ul className="space-y-1">
                                                {Array.from({ length: 9 }).map((_, i) => (
                                                    <li key={i}><a href="#" className="hover:text-blue-600">Courses Name 0{i + 1}</a></li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="w-1/2 flex flex-col items-center">
                                            <div className="mb-2">
                                                <img src="/upload/course_01.jpg" alt="Course" className="rounded-lg h-24 w-32 object-cover" />
                                            </div>
                                            <h5 className="font-medium"><a href="#">Learning Bootstrap Framework</a></h5>
                                            <small className="text-gray-500">$22.00</small>
                                            <a href="#" className="mt-2 px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm">View Course</a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li><a href="/events.html" className="hover:text-blue-600 transition-colors">Events</a></li>
                            <li className="relative group">
                                <a href="#" className="flex items-center hover:text-blue-600 transition-colors">Shop <Icon fa="fa-angle-down" className="ml-1" /></a>
                                <ul className="absolute left-0 top-full mt-2 w-40 bg-white shadow-lg rounded-lg py-2 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity z-50">
                                    <li><a href="/shop.html" className="block px-4 py-2 hover:bg-gray-100">Shop Layout</a></li>
                                    <li><a href="/shop-single.html" className="block px-4 py-2 hover:bg-gray-100">Shop Single</a></li>
                                </ul>
                            </li>
                            <li className="relative group">
                                <a href="#" className="flex items-center hover:text-blue-600 transition-colors">Blog <Icon fa="fa-angle-down" className="ml-1" /></a>
                                <ul className="absolute left-0 top-full mt-2 w-48 bg-white shadow-lg rounded-lg py-2 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity z-50">
                                    <li><a href="/blog.html" className="block px-4 py-2 hover:bg-gray-100">Blog Right Sidebar</a></li>
                                    <li><a href="/blog-1.html" className="block px-4 py-2 hover:bg-gray-100">Blog Left Sidebar</a></li>
                                    <li><a href="/blog-2.html" className="block px-4 py-2 hover:bg-gray-100">Blog Grid Sidebar</a></li>
                                    <li><a href="/blog-3.html" className="block px-4 py-2 hover:bg-gray-100">Blog Grid Fullwidth</a></li>
                                    <li><a href="/blog-single.html" className="block px-4 py-2 hover:bg-gray-100">Blog Single</a></li>
                                </ul>
                            </li>
                            <li><a href="/page-contact.html" className="hover:text-blue-600 transition-colors">Contact</a></li>
                            <li><a href="#" className="hover:text-blue-600 transition-colors"><Icon fa="fa-search" /></a></li>
                            <li><a href="/shop-cart.html" className="hover:text-blue-600 transition-colors flex items-center"><Icon fa="fa-shopping-basket" /> <span className="ml-1">(0)</span></a></li>
                        </ul>
                        {/* Mobile Menu Button */}
                        <div className="md:hidden flex items-center">
                            {/* Implement mobile menu toggle logic here if needed */}
                            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">Menu</Button>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
}
