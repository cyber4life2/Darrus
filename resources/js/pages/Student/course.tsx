
import DashboardLayout from '@/layouts/student-layout';
import { Head } from '@inertiajs/react';
import Programs from '../website/programs';


const CoursePage = () => {
    return (
        <>
            <Head title="Courses" />
          <Programs/>
        </>
    );
};

CoursePage.layout = (page: React.ReactNode) => <DashboardLayout>{page}</DashboardLayout>;

export default CoursePage;
