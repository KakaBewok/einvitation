import data from '@/pages/themes/netflix/data/config.json';
import AOS from 'aos';
import { useEffect } from 'react';
import { GalleryItem } from './gallery-item';

export default function OurGallery() {
    useEffect(() => {
        AOS.init({ duration: 1500, once: false });
        setTimeout(() => {
            AOS.refresh();
        }, 100);
    }, []);

    return (
        <div className="mb-14">
            <h2 className="mb-4 text-lg leading-5 font-bold text-white">Our Gallery</h2>
            <div className="grid grid-cols-3 gap-3">
                {data.gallery.map((item, index) => (
                    <GalleryItem key={index} src={item} />
                ))}
            </div>
        </div>
    );
}
