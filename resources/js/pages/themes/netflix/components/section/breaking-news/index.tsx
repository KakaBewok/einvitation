import data from '../../../data/config.json';

export default function BreakingNews() {
    return (
        <div>
            <h2 className="mb-4 font-bold">Breaking News</h2>
            <img className="w-full rounded-md" height={300} src={data.breaking_news_img} />
            <div className="mt-2 text-sm leading-[1.15rem] text-[#A3A1A1] italic">
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
