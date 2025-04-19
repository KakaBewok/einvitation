'use client';

import { useEffect, useState } from 'react';
import { CustomModal } from './custom-modal';
import { Button } from './ui/button';

interface AlertModalProps {
    isOpen: boolean;
    onClose: (e?: React.MouseEvent<HTMLButtonElement>) => void;
    onConfirm: (e?: React.MouseEvent<HTMLButtonElement>) => void;
    loading: boolean;
    description?: string;
}

export const AlertModal: React.FC<AlertModalProps> = ({ isOpen, onClose, onConfirm, loading, description = 'This action cannot be undone.' }) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <CustomModal title="Are you sure?" description={description} isOpen={isOpen} onClose={onClose}>
            <div className="flex w-full items-center justify-center space-x-3 pt-6 md:justify-end">
                <Button disabled={loading} variant="outline" onClick={onClose}>
                    Cancel
                </Button>
                <Button disabled={loading} variant="destructive" onClick={onConfirm} className="dark:bg-red-500">
                    Continue
                </Button>
            </div>
        </CustomModal>
    );
};
