import { AlertModal } from '@/components/alert-modal';
import { Button } from '@/components/ui/button';
import { useGlobalContext } from '@/hooks/use-global-context';
import { InvitationColumn } from '@/types/invitation-columns';
import { router } from '@inertiajs/react';
import { useState } from 'react';
import { toast } from 'react-toastify';

export const CellAction = ({ data }: { data: InvitationColumn }) => {
    const { loading, setLoading } = useGlobalContext();
    const [modalOpen, setModalOpen] = useState<boolean>(false);

    const handleDeleteId = (e?: React.MouseEvent<HTMLButtonElement>) => {
        e?.stopPropagation();

        setLoading(true);
        router.delete(route('admin.invitations.destroy', data.id), {
            onSuccess: () => {
                // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                toast.success('Data deleted.', {
                    position: 'top-center',
                }),
                    setModalOpen(false);
            },
            onError: (error) => console.log('An error occurred while destroying the invitation: ', error),
            onFinish: () => setLoading(false),
        });
    };

    const handleEditInvitation = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();

        setLoading(true);
        router.get(
            route('admin.invitation.edit', data.id),
            {},
            {
                onFinish: () => setLoading(false),
            },
        );
    };

    const handleShowDetailsInvitation = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();

        setLoading(true);
        router.get(
            route('admin.invitation.show', data.id),
            {},
            {
                onFinish: () => setLoading(false),
            },
        );
    };

    const handleModalDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        setModalOpen(true);
    };

    const handleActivationInvitation = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();

        alert('Activation invitation');
        // setLoading(true);
        // router.get(
        //     route('admin.invitation.show', data.id),
        //     {},
        //     {
        //         onFinish: () => setLoading(false),
        //     },
        // );
    };

    return (
        <div>
            <AlertModal
                isOpen={modalOpen}
                onClose={(e) => {
                    e?.stopPropagation();
                    setModalOpen(false);
                }}
                onConfirm={(e) => handleDeleteId(e)}
                loading={loading}
                description="This action can't be undone."
            />
            <div className="flex items-center justify-end gap-2">
                {!data.is_active && (
                    <Button
                        disabled={loading}
                        variant="ghost"
                        className="bg-green-500 p-0 text-white hover:bg-green-600 hover:text-white dark:bg-green-500 dark:hover:bg-green-600"
                        onClick={(e) => handleActivationInvitation(e)}
                    >
                        Activation
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M12 2v10" />
                            <path d="M18.4 6.6a9 9 0 1 1-12.77.04" />
                        </svg>
                    </Button>
                )}
                <Button
                    disabled={loading}
                    variant="destructive"
                    onClick={(e) => handleModalDelete(e)}
                    className="h-8 w-9 bg-red-500 p-0 hover:bg-red-600 dark:bg-red-500 dark:hover:bg-red-600"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        id="trash-alt"
                        className="fill-current"
                        width="21"
                        height="21"
                        fill="none"
                    >
                        <path
                            fill="#F9F9FC"
                            d="M10,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,10,18ZM20,6H16V5a3,3,0,0,0-3-3H11A3,3,0,0,0,8,5V6H4A1,1,0,0,0,4,8H5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V8h1a1,1,0,0,0,0-2ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm7,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8H17Zm-3-1a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,14,18Z"
                        ></path>
                    </svg>
                </Button>
                <Button
                    disabled={loading}
                    variant="ghost"
                    className="h-8 w-9 bg-amber-400 p-0 hover:bg-amber-500 dark:bg-amber-400 dark:hover:bg-amber-500"
                    onClick={(e) => handleEditInvitation(e)}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        id="edit-alt"
                        className="fill-current"
                        width="21"
                        height="21"
                        fill="none"
                    >
                        <path
                            fill="#F9F9FC"
                            d="M5,18H9.24a1,1,0,0,0,.71-.29l6.92-6.93h0L19.71,8a1,1,0,0,0,0-1.42L15.47,2.29a1,1,0,0,0-1.42,0L11.23,5.12h0L4.29,12.05a1,1,0,0,0-.29.71V17A1,1,0,0,0,5,18ZM14.76,4.41l2.83,2.83L16.17,8.66,13.34,5.83ZM6,13.17l5.93-5.93,2.83,2.83L8.83,16H6ZM21,20H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Z"
                        ></path>
                    </svg>
                </Button>
                <Button
                    disabled={loading}
                    variant="ghost"
                    className="h-8 w-9 bg-sky-500 p-0 hover:bg-sky-600 dark:bg-sky-500 dark:hover:bg-sky-600"
                    onClick={(e) => handleShowDetailsInvitation(e)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="eye" className="fill-current" width="21" height="21" fill="none">
                        <path
                            fill="#F9F9FC"
                            d="M21.92,11.6C19.9,6.91,16.1,4,12,4S4.1,6.91,2.08,11.6a1,1,0,0,0,0,.8C4.1,17.09,7.9,20,12,20s7.9-2.91,9.92-7.6A1,1,0,0,0,21.92,11.6ZM12,18c-3.17,0-6.17-2.29-7.9-6C5.83,8.29,8.83,6,12,6s6.17,2.29,7.9,6C18.17,15.71,15.17,18,12,18ZM12,8a4,4,0,1,0,4,4A4,4,0,0,0,12,8Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14Z"
                        ></path>
                    </svg>
                </Button>
            </div>
        </div>
    );
};
