import { usePage } from '@inertiajs/react';
import { useMemo } from 'react';
import { Netflix } from '../themes/netflix';

const PublicView = ({ slug }: { slug: string }) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { props } = usePage();

    // Ambil query parameter "guest"
    const guestName = useMemo(() => {
        const params = new URLSearchParams(window.location.search);
        return params.get('guest') || '';
    }, []);

    const ThemeComponent =
        {
            netflix: Netflix,
        }[slug] || Netflix;

    return <ThemeComponent guest={guestName} />;
};

export default PublicView;
