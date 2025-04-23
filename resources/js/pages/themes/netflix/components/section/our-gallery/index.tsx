import data from '../../../data/config.json';

interface OurGalleryProps {
    gallery: string[];
    show_menu: {
        breaking_news: boolean;
        bride_and_groom: boolean;
        love_story: boolean;
        gallery: boolean;
        wish: boolean;
    };
}

const GalleryItem = ({ src }: { src: string }) => (
    <img
        src={src}
        className="w-full cursor-pointer rounded-md object-cover hover:scale-105"
        style={{
            minHeight: '200px',
        }}
    />
);

export default function OurGallery({ gallery, show_menu }: OurGalleryProps) {
    console.log(gallery);
    console.log(show_menu);
    return (
        <div>
            <h2 className="mb-4 text-lg leading-5 font-bold text-white">Our Gallery</h2>
            <div className="grid grid-cols-3 gap-4">
                {data.gallery.map((item, index) => (
                    <GalleryItem key={index} src={item} />
                ))}
            </div>
        </div>
    );
}
