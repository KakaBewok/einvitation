import data from '@/pages/themes/netflix/data/config.json';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import LoveItem from './lova-item';

export default function LoveStory() {
    useEffect(() => {
        AOS.init({ duration: 1500, once: false });
        setTimeout(() => {
            AOS.refresh();
        }, 100);
    }, []);

    return (
        <div className="mb-14">
            <h2 className="mb-4 text-lg leading-5 font-bold text-white">Our Love Story</h2>
            <div className="space-y-4">
                {data.love_story.map((item, index) => (
                    <LoveItem key={index} imageUrl={item.image_url} title={item.title} duration="26m 10s" description={item.description} />
                ))}
            </div>
        </div>
    );
}
