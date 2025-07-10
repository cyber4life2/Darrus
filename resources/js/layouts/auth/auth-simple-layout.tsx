import AppLogo from '@/components/app-logo';
import AppLogoIcon from '@/components/app-logo-icon';
import { Link } from '@inertiajs/react';
import { type PropsWithChildren } from 'react';

interface AuthLayoutProps {
    name?: string;
    title?: string;
    description?: string;
}

export default function AuthSimpleLayout({ children, title, description }: PropsWithChildren<AuthLayoutProps>) {
    return (
       <div className="flex min-h-screen items-center justify-center bg-[#1D4590] dark:bg-gray-900 p-6">
      <div className="w-full max-w-md border border-gray-200 bg-white shadow-lg dark:border-gray-800 dark:bg-gray-700 text-card-foreground p-8">
        <div className="flex flex-col items-center gap-6">
            <Link
            href={route('home')}
            className="flex flex-col items-center text-primary hover:underline"
          >
            <span className="sr-only">{title}</span>
           
           <AppLogo />
          </Link>

        
          <div className="text-center">
            <h1 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h1>
            {description && (
              <p className="mt-1 text-sm text-muted-foreground">
                {description}
              </p>
            )}
          </div>

          <div className="w-full">{children}</div>
        </div>
      </div>
    </div>
    );
}
