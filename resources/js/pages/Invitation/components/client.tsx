import { AlertModal } from '@/components/alert-modal';
import Heading from '@/components/heading';
import { Button } from '@/components/ui/button';
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
}

export const InvitationClient: React.FC<InvitationClientProps> = ({ data }) => {
    const { loading, setLoading } = useGlobalContext();
    const [ids, setIds] = useState<string[]>(['']);
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
                onError: (error) => console.log('An error occurred: ', error),
                onFinish: () => setLoading(false),
            },
        );
    };

    const openDeleteModal = (ids: string[]) => {
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
                <Heading title={`Invitations (${data.length})`} description="Manage your invitations" />
                <Button onClick={handleCreateProduct} variant="outline" className="dark:bg-slate-200">
                    <Plus className="h-4 w-4 dark:text-slate-900" />
                </Button>
            </div>
            <AlertModal
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
                onConfirm={handleDeleteIds}
                loading={loading}
                description="Deleting these products will also remove them from any orders."
            />
            <DataTable onDelete={openDeleteModal} searchKey="name" columns={columns} data={data} />
        </>
    );
};
