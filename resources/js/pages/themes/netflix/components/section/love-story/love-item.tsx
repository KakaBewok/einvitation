interface LoveItemProps {
    imageUrl: string;
    title: string;
    duration: string;
    description: string;
}

const LoveItem: React.FC<LoveItemProps> = ({ imageUrl, title, duration, description }) => {
    return (
        <div data-aos="fade-left">
            <div className="grid grid-cols-2 gap-3">
                <div>
                    <img
                        className="w-full rounded-sm object-cover"
                        height={100}
                        style={{ maxHeight: '100px' }}
                        src={imageUrl}
                        alt="Love Story Image"
                        loading="eager"
                    />
                </div>
                <div className="flex justify-center">
                    <div className="flex flex-col items-start justify-start">
                        <p className="mb-2 tracking-tighter text-white">{title}</p>
                        <p className="text-xs text-[#A3A1A1]">{duration}</p>
                    </div>
                </div>
            </div>
            <p className="mt-2 text-xs text-[#A3A1A1]">{description}</p>
        </div>
    );
};

export default LoveItem;
