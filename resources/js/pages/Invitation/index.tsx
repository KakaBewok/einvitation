import AppLayout from '@/layouts/app-layout';
import { BreadcrumbItem } from '@/types';
import { Invitation } from '@/types/invitation';
import { InvitationColumn } from '@/types/invitation-columns';
import { PageProps } from '@/types/page-props';
import { Theme } from '@/types/theme';
import { Head, usePage } from '@inertiajs/react';
import { InvitationClient } from './components/client';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: `My Invitations`,
        href: '/dashboard',
    },
];

type InvitationPageProps = Invitation & { theme: Theme };

const InvitationPage = ({ invitations }: { invitations: InvitationPageProps[] }) => {
    const { auth } = usePage<PageProps>().props;

    const formattedInvitations: InvitationColumn[] = invitations.map((item) => ({
        id: item.id,
        grooms_name: item.host_one_name,
        brides_name: item.host_two_name,
        event_date: item.event_date,
        theme: item.theme.name,
        is_active: item.is_active ?? false,
        expired_at: item.expired_at ?? '',
    }));

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard | Invitations" />
            <div className="space-y-10 px-3 pt-8 md:px-14">
                <InvitationClient data={formattedInvitations} userName={auth.user.name} />
            </div>
        </AppLayout>
    );
};

export default InvitationPage;
