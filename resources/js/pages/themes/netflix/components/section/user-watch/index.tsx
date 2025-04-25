import { useEffect, useState } from 'react';

export default function UserWatch({ onClick }: { onClick: () => void }) {
    //get params from url
    const [to, setTo] = useState<string>('Guest');

    useEffect(() => {
        if (window) {
            const url = new URL(window.location.href);
            const to = url.searchParams.get('to');
            setTo(to ?? 'Guest');
        }
    }, []);

    return (
        <div className="space-y-36 py-14 text-center">
            <img
                className="mx-auto scale-110 cursor-pointer transition-transform duration-400 hover:scale-150"
                src={`/storage/images/NIKAHFIX.webp`}
                width={'125px'}
                height={'48px'}
                alt="Nikah Fix"
                loading="eager"
            />
            <div>
                <p className="mb-10 text-2xl font-bold">Who's Watching?</p>
                <div onClick={onClick} className="group cursor-pointer">
                    <img
                        className="mx-auto transition-transform duration-400 group-hover:scale-125"
                        src={`/storage/images/guest-icon.png`}
                        width={100}
                        height={100}
                        alt="Nikah Fix"
                        loading="eager"
                    />
                    <p className="mt-2 text-xl transition-transform duration-400 group-hover:translate-y-10 group-hover:scale-125">{to}</p>
                </div>
            </div>
        </div>
    );
}
