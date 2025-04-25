import data from '@/pages/themes/netflix/data/config.json';
import AOS from 'aos';
import { useEffect } from 'react';

export default function BreakingNews() {
    useEffect(() => {
        AOS.init({ duration: 1500, once: false });
        setTimeout(() => {
            AOS.refresh();
        }, 100);
    }, []);

    return (
        <div className="mb-14 max-w-sm" data-aos="fade-left">
            <h2 className="mb-4 text-lg font-bold">Breaking News</h2>
            <img className="w-full rounded-sm" height={300} src={data.breaking_news_img} loading="eager" />
            <div className="mt-3 rounded-sm border-neutral-950 bg-neutral-900 p-3 text-sm leading-[1.15rem] text-slate-100 italic">
                <div
                    className="space-y-2"
                    dangerouslySetInnerHTML={{
                        __html: data.breaking_news_content,
                    }}
                ></div>
            </div>
        </div>
    );
}
