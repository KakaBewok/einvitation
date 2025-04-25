import AOS from 'aos';
import { useEffect } from 'react';
const Location = () => {
    useEffect(() => {
        AOS.init({ duration: 1500, once: false });
        setTimeout(() => {
            AOS.refresh();
        }, 100);
    }, []);

    return (
        <>
            <div className="pb-4 text-center" data-aos="fade-right">
                <div className="mb-2">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.2186564568997!2d105.75484540000001!3d-1.6225196000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e23ad5f50173607%3A0xd1ca675aab4741c9!2sMbak%20Hasiri!5e0!3m2!1sen!2sid!4v1744121209620!5m2!1sen!2sid"
                        style={{
                            border: 0,
                            width: '100%',
                        }}
                        className="rounded-sm"
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
                <p className="text-center text-xs text-slate-200">jl. Raya Puncak, Kec. Megamendung, Kab. Bogor Provinsi Jawab Barat Indonesia.</p>
                <a
                    className="text-center text-xs text-blue-500 underline"
                    href="https://maps.app.goo.gl/CMA4urZ4bbFhvDoA8"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Lihat lokasi
                </a>
            </div>
        </>
    );
};

export default Location;
