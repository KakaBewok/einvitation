import AppLayout from '@/layouts/app-layout';
import { BreadcrumbItem } from '@/types';
import { Invitation } from '@/types/invitation';
import { PageProps } from '@/types/page-props';
import { Head, usePage } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: `My Invitations`,
        href: '/dashboard',
    },
];

const ProductPage = ({ invitations }: { invitations: Invitation[] }) => {
    const { auth } = usePage<PageProps>().props;

    // const formattedInvitations: InvitationColumn[] = invitations.map((item) => ({
    //     id: item.id.toString(),
    //     grooms_name: item.host_one_name,
    //     brides_name: item.host_two_name,
    //     event_date: item.event_date,
    //     theme: item.theme_id.toString(),
    //     is_active: item.is_active ?? false,
    //     expired_at: item.expired_at ?? '',
    // }));

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard | Invitations" />
            {/* <div className="space-y-7 p-2 pt-6">
                <InvitationClient data={formattedInvitations} />
            </div> */}
            <h1>
                Hallo {auth.user.name}! you have {invitations.length} invitations.
            </h1>
        </AppLayout>
    );
};

export default ProductPage;
