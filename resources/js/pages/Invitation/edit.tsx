import AppLayout from '@/layouts/app-layout';
import { BreadcrumbItem } from '@/types';
import { Invitation } from '@/types/invitation';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: `Edit My Invitations`,
        href: '/dashboard',
    },
];

type InvitationWithUrls = Invitation & {
    image_urls: string[];
    video_urls: string[];
};

const EditPage = ({ invitation }: { invitation: Invitation }) => {
    const initialData: InvitationWithUrls = {
        ...invitation,
        image_urls: invitation.images?.map((image) => image.url) ?? [],
        video_urls: invitation.videos?.map((video) => video.path) ?? [],
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard | Invitations" />
            <div className="flex-col">
                <div className="flex-1 space-y-4 p-4 pt-5 md:p-8">
                    {/* <ProductForm initialData={initialData} categories={categories} /> */}
                    <h1>
                        Edit page {invitation.host_one_nickname} {initialData.videos?.[0].title}
                    </h1>
                </div>
            </div>
        </AppLayout>
    );
};

export default EditPage;

// 'theme'n, 'images'--, 'videos'--, 'giftInfo', 'music'n, 'stories', 'rundowns', 'guests'
