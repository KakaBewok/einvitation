import { User } from '@/types';
import { PageProps as InertiaPageProps } from '@inertiajs/core';

export interface PageProps extends InertiaPageProps {
    auth: {
        user: User;
    };
}
