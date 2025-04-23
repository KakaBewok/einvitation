import data from '@/pages/themes/netflix/data/config.json';

const GalleryItem = ({ src }: { src: string }) => (
    <img
        src={src}
        alt="Gallery Image"
        loading="lazy"
        className="w-full cursor-pointer rounded-sm object-cover hover:opacity-70 hover:duration-500"
        style={{
            minHeight: '200px',
        }}
    />
);

export default function OurGallery() {
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
