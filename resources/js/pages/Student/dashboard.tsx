import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import DashboardLayout from '@/layouts/student-layout';
import { Head } from '@inertiajs/react';

const DashboardPage = () => {
    return (
        <>
            <Head title="Dashboard Overview" />
            <div className="col-span-1 space-y-6 md:col-span-3">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                    <Card className="rounded-md bg-blue-100">
                        <CardContent className="py-6 text-center">
                            <div className="text-xl font-bold">9</div>
                            <div className="text-sm text-gray-700">Enrolled Courses</div>
                        </CardContent>
                    </Card>
                    <Card className="rounded-md bg-pink-100">
                        <CardContent className="py-6 text-center">
                            <div className="text-xl font-bold">1</div>
                            <div className="text-sm text-gray-700">Quiz Attempts</div>
                        </CardContent>
                    </Card>
                    <Card className="rounded-md bg-purple-100">
                        <CardContent className="py-6 text-center">
                            <div className="text-xl font-bold">1</div>
                            <div className="text-sm text-gray-700">Your Total Reviews</div>
                        </CardContent>
                    </Card>
                </div>

              
            </div>
        </>
    );
};

DashboardPage.layout = (page: React.ReactNode) => <DashboardLayout>{page}</DashboardLayout>;

export default DashboardPage;
