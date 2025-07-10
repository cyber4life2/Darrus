import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import DashboardLayout from '@/layouts/student-layout';
import { Head } from '@inertiajs/react';

const PaymentPage = () => {
    return (
        <>
            <Head title="Payment" />
            <div className="col-span-1 space-y-6 md:col-span-3">
               
                {/* Order History */}
                <Card className="rounded-md">
                    <CardContent className="pt-4">
                        <h3 className="mb-4 text-lg font-semibold">Payment History</h3>
                        <div className="overflow-x-auto">
                            <table className="min-w-full text-sm">
                                <thead className="bg-gray-200">
                                    <tr>
                                        <th className="px-4 py-2 text-left">Invoice</th>
                                        <th className="px-4 py-2 text-left">Paid</th>
                                        <th className="px-4 py-2 text-left">Gateway</th>
                                        <th className="px-4 py-2 text-left">Status</th>
                                        <th className="px-4 py-2 text-left">Payment</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        { invoice: '#B9X2QFQ0H6', paid: '181 USD', gateway: 'Flutterwave' },
                                        { invoice: '#F99j0kwFgv', paid: '5375.52 INR', gateway: 'Instamojo' },
                                        { invoice: '#tt4LhAvUT', paid: '72201.55 NGN', gateway: 'Paystack' },
                                    ].map((order) => (
                                        <tr key={order.invoice} className="border-b">
                                            <td className="px-4 py-2">{order.invoice}</td>
                                            <td className="px-4 py-2">{order.paid}</td>
                                            <td className="px-4 py-2">{order.gateway}</td>
                                            <td className="px-4 py-2 font-medium text-green-600">Completed</td>
                                            <td className="px-4 py-2">
                                                <Button variant="outline" size="sm">
                                                    View
                                                </Button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </>
    );
};

PaymentPage.layout = (page: React.ReactNode) => <DashboardLayout>{page}</DashboardLayout>;

export default PaymentPage;
