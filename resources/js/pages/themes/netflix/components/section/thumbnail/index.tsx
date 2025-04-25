import { BASE_URL } from '@/constants';
import data from '@/pages/themes/netflix/data/config.json';
import React, { useEffect } from 'react';
import DetailInfo from '../detail-info';

const TagItem = ({ title }: { title: string }) => {
    return <li className="rounded-sm bg-[#4D4D4D] px-2 py-1 text-xs text-white">{title}</li>;
};

export default function Thumbnail() {
    const [isOpenDetail, setIsOpenDetail] = React.useState<boolean>(false);

    useEffect(() => {
        const scrollThreshold = 10; // minimum scroll distance in pixels

        const handleScroll = () => {
            if (window.scrollY > scrollThreshold) {
                setIsOpenDetail(true);
            }
        };

        const handleTouchMove = (event: TouchEvent) => {
            const touch = event.touches[0];
            if (touch && touch.clientY < -scrollThreshold) {
                setIsOpenDetail(true);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('touchmove', handleTouchMove, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('touchmove', handleTouchMove);
        };
    }, []);

    if (isOpenDetail) {
        return <DetailInfo />;
    }
    return (
        <div
            style={{
                backgroundImage: `url(${data.thumbnail_image_url})`,
            }}
            className="mb-10 flex min-h-screen flex-col justify-end bg-cover bg-center bg-no-repeat"
        >
            <div className="bg-gradient-to-b from-transparent via-black to-black pt-2 pb-8">
                <div className="mb-10 space-y-2 px-5">
                    <img src={`${BASE_URL}/storage/images/NIKAHFIX.webp`} alt="NIKAHFIX" width={56} height={15} loading="eager" />
                    <div>
                        <h1 className="text-3xl leading-none font-bold">
                            {data.pegantin.wanita.panggilan} & {data.pegantin.pria.panggilan}: <br />
                            Sebelum Hari H
                        </h1>
                    </div>
                    <div>
                        <div className="flex items-center gap-3">
                            <span className="rounded-md bg-[#E50913] px-2 py-1 text-xs text-white">Coming Soon</span>
                            <p className="text-sm">{data.tanggal_pernikahan}</p>
                        </div>
                    </div>
                    <div>
                        <ul className="flex items-center gap-2">
                            <TagItem title="#romantic" />
                            <TagItem title="#getmarried" />
                            <TagItem title="#family" />
                            <TagItem title="#documenter" />
                        </ul>
                    </div>
                </div>
                <div className="w-full text-center">
                    <button onClick={() => setIsOpenDetail(true)} className="w-full text-xl font-semibold uppercase">
                        See The Detail
                    </button>
                    <div className="rotate-180">
                        <svg
                            className="mx-auto mb-2 h-6 w-6 animate-bounce"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 8"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M13 7 7.674 1.3a.91.91 0 0 0-1.348 0L1 7"
                            ></path>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
}
