import data from '@/pages/themes/netflix/data/config.json';
import React from 'react';

interface LoveItemProps {
    imageUrl: string;
    title: string;
    duration: string;
    description: string;
}

const LoveItem: React.FC<LoveItemProps> = ({ imageUrl, title, duration, description }) => {
    return (
        <>
            <div className="grid grid-cols-2 gap-3">
                <div>
                    <img
                        className="w-full rounded-sm object-cover"
                        height={100}
                        style={{
                            maxHeight: '100px',
                        }}
                        src={imageUrl}
                        alt="Love Story Image"
                        loading="lazy"
                    />
                </div>
                <div className="flex justify-center">
                    <div className="flex flex-col items-start justify-start">
                        <p className="mb-2 tracking-tighter text-white">{title}</p>
                        <p className="text-xs text-[#A3A1A1]">{duration}</p>
                    </div>
                </div>
            </div>
            <p className="text-xs text-[#A3A1A1]">{description}</p>
        </>
    );
};

export default function LoveStory() {
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
