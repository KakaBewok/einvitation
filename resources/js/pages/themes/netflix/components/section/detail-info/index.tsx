import AOS from 'aos';
import { useEffect } from 'react';
import data from '../../../data/config.json';
import SongButton from '../../ui/song-button';
import BreakingNews from '../breaking-news';
import Bridegroom from '../bride-groom';
import Footer from '../footer';
import Gift from '../gift';
import Location from '../location';
import LoveStory from '../love-story';
import OurGallery from '../our-gallery';
import TitleInfo from '../title-info';
import WishSection from '../wish';

export default function DetailInfo() {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' }); // or 'auto'

        AOS.init({ duration: 1500, once: false, offset: 400 });
        setTimeout(() => {
            AOS.refresh();
        }, 100);
    }, []);

    return (
        <div className="space-y-5 pt-4 pb-10">
            <video className="w-full rounded-xs" autoPlay muted>
                <source src={data.url_video} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="space-y-3 px-4">
                <TitleInfo />
                <BreakingNews />
                <Bridegroom />
                <LoveStory />
                <OurGallery />
                <Location />
                <Gift />
                {data.show_menu.wish && import.meta.env.VITE_APP_TABLE_NAME ? <WishSection /> : null}
            </div>
            <Footer />
            <SongButton />
        </div>
    );
}
