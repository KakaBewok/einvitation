import data from '@/pages/themes/netflix/data/config.json';
import 'aos/dist/aos.css';
import LoveItem from './love-item';

export default function LoveStory() {
    return (
        <div className="mb-14">
            <h2 className="mb-4 text-lg leading-5 font-bold text-white" data-aos="zoom-in">
                Our Love Story
            </h2>
            <div className="space-y-4">
                {data.love_story.map((item, index) => (
                    <LoveItem key={index} imageUrl={item.image_url} title={item.title} duration="26m 10s" description={item.description} />
                ))}
            </div>
        </div>
    );
}
