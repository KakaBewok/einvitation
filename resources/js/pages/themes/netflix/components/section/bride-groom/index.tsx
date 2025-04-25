import data from '@/pages/themes/netflix/data/config.json';
import AOS from 'aos';
import { useEffect } from 'react';

export default function Bridegroom() {
    useEffect(() => {
        AOS.init({ duration: 1500, once: false });
        setTimeout(() => {
            AOS.refresh();
        }, 100);
    }, []);

    return (
        <div className="mb-14" data-aos="fade-left">
            <h2 className="mb-4 text-lg leading-5 font-bold text-white">Bride and Groom</h2>
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <img src={data.pegantin.wanita.foto} className="w-full rounded-sm" height={164} loading="eager" />
                    <div>
                        <h4 className="text-md mt-2 font-medium text-white">{data.pegantin.wanita.nama}</h4>
                        <p className="text-xs leading-4 text-[#A3A1A1]">
                            Putri dari {data.pegantin.wanita.bapak} &amp; Ibu {data.pegantin.wanita.ibu}
                        </p>
                    </div>
                </div>
                <div>
                    <img src={data.pegantin.pria.foto} className="w-full rounded-sm" height={164} loading="eager" />
                    <div>
                        <h4 className="text-md mt-2 font-medium text-white">{data.pegantin.pria.nama}</h4>
                        <p className="text-xs leading-4 text-[#A3A1A1]">
                            Putra dari {data.pegantin.pria.bapak} &amp; Ibu {data.pegantin.pria.ibu}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
