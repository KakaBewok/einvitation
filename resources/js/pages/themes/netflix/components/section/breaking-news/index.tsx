import data from '@/pages/themes/netflix/data/config.json';

export default function BreakingNews() {
    return (
        <div className="mb-14">
            <h2 className="mb-4 text-lg font-bold">Breaking News</h2>
            <img className="w-full rounded-sm" height={300} src={data.breaking_news_img} />
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
// text-[#A3A1A1]
