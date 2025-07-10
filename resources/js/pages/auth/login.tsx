import { Head, useForm } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';
import { FormEventHandler, useEffect, useState } from 'react';

import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AuthLayout from '@/layouts/auth-layout';

type LoginForm = {
  email: string;
  password: string;
  remember: boolean;
};

interface LoginProps {
  status?: string;
  canResetPassword: boolean;
}

export default function Login({ status, canResetPassword }: LoginProps) {
  const { data, setData, post, processing, errors, reset } = useForm<Required<LoginForm>>({
    email: '',
    password: '',
    remember: false,
  });

  const [visibleErrors, setVisibleErrors] = useState<string[]>([]);
  const [visibleStatus, setVisibleStatus] = useState<string>('');

  useEffect(() => {
    if (Object.values(errors).length > 0) {
      setVisibleErrors(Object.values(errors));

      const timer = setTimeout(() => {
        setVisibleErrors([]);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [errors]);

  useEffect(() => {
    if (status) {
      setVisibleStatus(status);

      const timer = setTimeout(() => {
        setVisibleStatus('');
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [status]);

  const submit: FormEventHandler = (e) => {
    e.preventDefault();
    post(route('login'), {
      onFinish: () => reset('password'),
    });
  };

  return (
    <AuthLayout title="Log in to your account" description="Enter your email and password below to log in">
      <Head title="Log in" />

      <form className="flex flex-col gap-6" onSubmit={submit}>
        <div className="grid gap-6">
          {/* Flash Message */}
          {visibleErrors.length > 0 && (
            <div className="mb-4 rounded-md border border-red-300 bg-red-100 p-4 text-red-800">
              <ul className="list-inside list-disc space-y-1 pr-4 text-sm">
                {visibleErrors.map((error, index) => (
                  <li key={index}>{error}</li>
                ))}
              </ul>
            </div>
          )}

          {visibleStatus && (
            <div className="mb-4 rounded-sm border border-green-300 bg-green-100 p-4 text-green-800">
              {visibleStatus}
            </div>
          )}

          {/* Email Field */}
          <div className="grid gap-2">
            <Label htmlFor="email">Email address</Label>
            <Input
              id="email"
              type="email"
              required
              autoFocus
              tabIndex={1}
              autoComplete="email"
              value={data.email}
              onChange={(e) => setData('email', e.target.value)}
              placeholder="email@example.com"
            />
            {/* <InputError message={errors.email} /> */}
          </div>

          {/* Password Field */}
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
              {canResetPassword && (
                <TextLink href={route('password.request')} className="ml-auto text-sm" tabIndex={5}>
                  Forgot password?
                </TextLink>
              )}
            </div>
            <Input
              id="password"
              type="password"
              required
              tabIndex={2}
              autoComplete="current-password"
              value={data.password}
              onChange={(e) => setData('password', e.target.value)}
              placeholder="Password"
            />
            {/* <InputError message={errors.password} /> */}
          </div>

          {/* Remember Me */}
          <div className="flex items-center space-x-3">
            <Checkbox
              id="remember"
              name="remember"
              checked={data.remember}
              onClick={() => setData('remember', !data.remember)}
              tabIndex={3}
            />
            <Label htmlFor="remember">Remember me</Label>
          </div>

          {/* Submit Button */}
          <Button type="submit" className="mt-4 w-full" tabIndex={4} disabled={processing}>
            {processing ? (
              <>
                <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
                Logging in...
              </>
            ) : (
              'Log in'
            )}
          </Button>
        </div>

        {/* Footer text */}
        <div className="text-center text-sm text-muted-foreground">
          Don&apos;t have an account?{' '}
          <TextLink href={route('register')} tabIndex={5}>
            Sign up
          </TextLink>
        </div>
      </form>
    </AuthLayout>
  );
}
