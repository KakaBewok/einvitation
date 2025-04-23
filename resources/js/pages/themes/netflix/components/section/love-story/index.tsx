import React from 'react';
import data from '../../../data/config.json';

interface LoveItemProps {
    imageUrl: string;
    title: string;
    duration: string;
    description: string;
}

const LoveItem: React.FC<LoveItemProps> = ({ imageUrl, title, duration, description }) => {
    return (
        <div>
            <div className="grid grid-cols-2 gap-2">
                <div>
                    <img
                        className="w-full rounded-md object-cover"
                        height={100}
                        style={{
                            maxHeight: '100px',
                        }}
                        src={imageUrl}
                        alt="dummy"
                    />
                </div>
                <div className="flex justify-center">
                    <div className="my-auto">
                        <p className="mb-2 tracking-tighter text-white">{title}</p>
                        <p className="text-xs text-[#A3A1A1]">{duration}</p>
                    </div>
                </div>
            </div>
            <p className="mt-2 text-xs text-[#A3A1A1]">{description}</p>
        </div>
    );
};

export default function LoveStory() {
    return (
        <div>
            <h2 className="mb-4 text-lg leading-5 font-bold text-white">Our Love Story</h2>
            <div className="space-y-4">
                {data.love_story.map((item, index) => (
                    <LoveItem key={index} imageUrl={item.image_url} title={item.title} duration="26m 10s" description={item.description} />
                ))}
            </div>
        </div>
    );
}
