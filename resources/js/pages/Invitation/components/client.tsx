import { AlertModal } from '@/components/alert-modal';
import { Button } from '@/components/ui/button';
import { Heading } from '@/components/ui/custom-heading';
import { DataTable } from '@/components/ui/data-table';
import { useGlobalContext } from '@/hooks/use-global-context';
import { InvitationColumn } from '@/types/invitation-columns';
import { router } from '@inertiajs/react';
import { Plus } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { columns } from './columns';

interface InvitationClientProps {
    data: InvitationColumn[];
    userName: string;
}

export const InvitationClient: React.FC<InvitationClientProps> = ({ data, userName }) => {
    const { loading, setLoading } = useGlobalContext();
    const [ids, setIds] = useState<number[]>([]);
    const [modalOpen, setModalOpen] = useState<boolean>(false);

    const handleDeleteIds = () => {
        setLoading(true);
        router.post(
            route('admin.invitation.destroy-bulk', { ids }),
            {},
            {
                onSuccess: () => {
                    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                    router.visit(route('admin.invitation.index')),
                        setTimeout(() => {
                            toast.success('Data deleted.', {
                                position: 'top-center',
                            });
                        }, 1000);
                },
                onError: (error) => console.log('An error occurred while destroying bulk the invitations: ', error),
                onFinish: () => setLoading(false),
            },
        );
    };

    const openDeleteModal = (ids: number[]) => {
        setIds(ids);
        setModalOpen(true);
    };

    const handleCreateProduct = () => {
        setLoading(true);
        router.get(
            route('admin.invitation.create'),
            {},
            {
                onFinish: () => setLoading(false),
            },
        );
    };

    return (
        <>
            <div className="flex items-center justify-between">
                <Heading
                    title={`Hello ${userName}!`}
                    description={`${data == null || data.length < 1 ? "Let's make your invitation!" : `You have ${data.length} invitation(s)`}`}
                />
                <Button onClick={handleCreateProduct} variant="outline" className="dark:bg-slate-200">
                    <Plus className="h-4 w-4 dark:text-slate-900" />
                </Button>
            </div>
            <AlertModal
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
                onConfirm={handleDeleteIds}
                loading={loading}
                description="This action can't be undone."
            />
            <DataTable onDelete={openDeleteModal} searchKey="grooms_name" columns={columns} data={data} />
        </>
    );
};
