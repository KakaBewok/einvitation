export const GalleryItem = ({ src }: { src: string }) => (
    <img
        data-aos="fade-up"
        src={src}
        alt="Gallery Image"
        loading="lazy"
        className="w-full cursor-pointer rounded-sm object-cover hover:opacity-70 hover:duration-500"
        style={{
            minHeight: '200px',
        }}
    />
);
