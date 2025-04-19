import Loading from '@/components/loading';
import { useGlobalContext } from '@/hooks/use-global-context';
import AppLayoutTemplate from '@/layouts/app/app-sidebar-layout';
import { type BreadcrumbItem } from '@/types';
import { type ReactNode } from 'react';
import { ToastContainer } from 'react-toastify';

interface AppLayoutProps {
    children: ReactNode;
    breadcrumbs?: BreadcrumbItem[];
}

export default ({ children, breadcrumbs, ...props }: AppLayoutProps) => {
    const { loading } = useGlobalContext();
    return (
        <AppLayoutTemplate breadcrumbs={breadcrumbs} {...props}>
            <ToastContainer autoClose={3100} />
            {loading && <Loading />}
            {children}
        </AppLayoutTemplate>
    );
};
