'use client';

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';

interface ModalProps {
    title: string;
    description: string;
    isOpen: boolean;
    onClose: () => void;
    children?: React.ReactNode;
}

export const CustomModal: React.FC<ModalProps> = ({ title, description, isOpen, onClose, children }) => {
    const onChange = (open: boolean, e?: React.MouseEvent) => {
        if (!open) {
            e?.stopPropagation();
            onClose();
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={(open) => onChange(open)}>
            <DialogContent className="w-[80vw] rounded-md" onClick={(e) => e.stopPropagation()}>
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogDescription>{description}</DialogDescription>
                </DialogHeader>
                <div>{children}</div>
            </DialogContent>
        </Dialog>
    );
};
