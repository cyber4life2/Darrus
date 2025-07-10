import { useState, useEffect, FormEventHandler } from 'react';
import { Head, useForm, usePage, Link } from '@inertiajs/react'; // Added Link import
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import InputError from '@/components/input-error';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import DashboardLayout from '@/layouts/student-layout';
import { type SharedData } from '@/types';
import { toast, Toaster } from 'sonner';

const ProfilePage = () => {
  // Destructure all needed props including mustVerifyEmail and status
  const { auth, flash, mustVerifyEmail, status } = usePage<SharedData>().props;

  const [activeTab, setActiveTab] = useState<'profile' | 'password'>('profile');

  useEffect(() => {
    if (flash?.success) {
      toast.success(flash.success);
    }
  }, [flash]);

  const profileForm = useForm({
    name: auth.user.name || '',
    email: auth.user.email || '',
  });

  const passwordForm = useForm({
    current_password: '',
    password: '',
    password_confirmation: '',
  });

  const submitProfile: FormEventHandler = (e) => {
    e.preventDefault();
    profileForm.patch(route('studentprofile.update'));
  };

  const submitPassword: FormEventHandler = (e) => {
    e.preventDefault();
    passwordForm.put(route('studentpassword.update'));
  };

  return (
    <>
      <Head title="Profile" />
      <Toaster position="top-right" richColors />

      <Card>
        <CardHeader>
          <CardTitle>Account Settings</CardTitle>
          <CardDescription>Manage your profile and password</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-6 flex border-b text-sm font-medium">
            <button
              type="button"
              className={`mr-4 pb-2 border-b-2 ${
                activeTab === 'profile' ? 'border-gray-900 text-primary' : 'border-transparent text-gray-500'
              }`}
              onClick={() => setActiveTab('profile')}
            >
              Profile
            </button>
            <button
              type="button"
              className={`pb-2 border-b-2 ${
                activeTab === 'password' ? 'border-gray-900 text-primary' : 'border-transparent text-gray-500'
              }`}
              onClick={() => setActiveTab('password')}
            >
              Password
            </button>
          </div>

          {/* Profile Tab */}
          {activeTab === 'profile' && (
            <form onSubmit={submitProfile} className="space-y-6">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  value={profileForm.data.name}
                  onChange={(e) => profileForm.setData('name', e.target.value)}
                  required
                />
                <InputError message={profileForm.errors.name} className="mt-2" />
              </div>

              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={profileForm.data.email}
                  onChange={(e) => profileForm.setData('email', e.target.value)}
                  required
                />
                <InputError message={profileForm.errors.email} className="mt-2" />
              </div>

              {/* Email Verification Section */}
              {mustVerifyEmail && auth.user.email_verified_at === null && (
                <div>
                  <p className="-mt-4 text-sm text-muted-foreground">
                    Your email address is unverified.{' '}
                    <Link
                      href={route('verification.send')}
                      method="post"
                      as="button"
                      className="text-foreground underline decoration-neutral-300 underline-offset-4 transition-colors duration-300 ease-out hover:decoration-current! dark:decoration-neutral-500"
                    >
                      Click here to resend the verification email.
                    </Link>
                  </p>

                  {status === 'verification-link-sent' && (
                    <div className="mt-2 text-sm font-medium text-green-600">
                      A new verification link has been sent to your email address.
                    </div>
                  )}
                </div>
              )}

              <div className="flex items-center gap-4">
                <Button disabled={profileForm.processing}>Save</Button>
              </div>
            </form>
          )}

          {/* Password Tab */}
          {activeTab === 'password' && (
            <form onSubmit={submitPassword} className="space-y-6">
              <div>
                <Label htmlFor="current_password">Current Password</Label>
                <Input
                  id="current_password"
                  type="password"
                  value={passwordForm.data.current_password}
                  onChange={(e) => passwordForm.setData('current_password', e.target.value)}
                  required
                />
                <InputError message={passwordForm.errors.current_password} className="mt-2" />
              </div>

              <div>
                <Label htmlFor="password">New Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={passwordForm.data.password}
                  onChange={(e) => passwordForm.setData('password', e.target.value)}
                  required
                />
                <InputError message={passwordForm.errors.password} className="mt-2" />
              </div>

              <div>
                <Label htmlFor="password_confirmation">Confirm New Password</Label>
                <Input
                  id="password_confirmation"
                  type="password"
                  value={passwordForm.data.password_confirmation}
                  onChange={(e) => passwordForm.setData('password_confirmation', e.target.value)}
                  required
                />
                <InputError message={passwordForm.errors.password_confirmation} className="mt-2" />
              </div>

              <div className="flex items-center gap-4">
                <Button disabled={passwordForm.processing}>Update Password</Button>
              </div>
            </form>
          )}
        </CardContent>
      </Card>
    </>
  );
};

ProfilePage.layout = (page: React.ReactNode) => <DashboardLayout>{page}</DashboardLayout>;

export default ProfilePage;
