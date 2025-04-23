import data from '../../../data/config.json';

export default function TitleInfo() {
    return (
        <div className="space-y-1">
            <div className="flex items-center gap-2">
                <img src="/favicon.ico" alt="logo" width={18} height={18} />
                <span className="mt-0.5 text-xs tracking-widest text-[#A3A1A1]">DOCUMENTER</span>
            </div>
            <h2 className="text-lg leading-5 font-bold text-white">
                {data.pegantin.wanita.panggilan} &amp; {data.pegantin.pria.panggilan}: Sebelum Hari H
            </h2>
            <div className="flex items-center gap-1">
                <span className="mr-2 text-green-500">100% match</span>
                <span className="mr-2 rounded-sm bg-[#4D4D4D] px-1 py-0 text-xs text-white">SU</span>
                <span className="mr-2 text-white">{data.tanggal_pernikahan.split('-')[0]}</span>
                <span className="mr-2 text-white">1h 26m</span>
                <span>
                    <img src="/images/4k-icon.png" width={16} height={16} alt="4k" />
                </span>
                <span>
                    <img src="/images/hd-icon.png" width={16} height={16} alt="hd" />
                </span>
            </div>
            <div className="w-fit rounded bg-[#E50913] px-2 py-1 text-xs font-bold text-white">
                Coming soon on Saturday, {data.tanggal_pernikahan}
            </div>
            <div className="pt-2">
                <p className="mb-2 text-sm leading-[1.15rem] text-white">{data.intro}</p>
                <p className="text-[10px] leading-[1rem] text-[#A3A1A1]">
                    "Segala sesuatu Kami ciptakan berpasang-pasangan agar kamu mengingat (kebesaran Allah)" (Q.S Az-Zariyah: 49)
                </p>
            </div>
        </div>
    );
}
