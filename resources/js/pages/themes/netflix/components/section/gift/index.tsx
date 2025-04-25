import { Copy, CopyCheck } from 'lucide-react';
import { useState } from 'react';
import data from '../../../data/config.json';

const Gift = () => {
    const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
    const [addressCopied, setAddressCopied] = useState<boolean>(false);

    const handleCopy = (text: string, index?: number) => {
        navigator.clipboard.writeText(text);
        if (index !== undefined) {
            setCopiedIndex(index);
            setTimeout(() => setCopiedIndex(null), 2000);
        } else {
            setAddressCopied(true);
            setTimeout(() => setAddressCopied(false), 2000);
        }
    };

    return (
        <section className="space-y-10 bg-black px-6 py-10 text-white">
            <div className="text-center">
                <h2 className="mb-2 text-lg leading-5 font-bold text-white">Wedding Gift</h2>
                <p className="mx-auto max-w-xl text-xs text-slate-300">
                    Kehadiran kalian udah bikin kami bahagia. Tapi kalau mau nitip sedikit cinta dalam bentuk hadiah, ini beberapa opsinya ya. Terima
                    kasih! ❤️
                </p>
            </div>

            <div className="flex flex-wrap gap-2">
                {data.gift_info.map((gift, idx) => (
                    <div
                        key={idx}
                        className="relative w-full rounded-sm border border-neutral-950 bg-neutral-900 p-3 text-center transition-shadow hover:shadow-lg"
                    >
                        <h3 className="text-md font-semibold text-red-500">{gift.provider}</h3>
                        <p className="mt-2 text-sm tracking-wider">{gift.accountNumber}</p>
                        <p className="text-xs text-gray-300 italic">{gift.accountName}</p>

                        <button
                            onClick={() => handleCopy(gift.accountNumber, idx)}
                            className="absolute top-2 right-2 cursor-pointer"
                            aria-label="Copy"
                        >
                            {copiedIndex === idx ? <CopyCheck className="h-5 w-5 text-red-500" /> : <Copy className="h-5 w-5 text-white" />}
                        </button>
                    </div>
                ))}
            </div>

            <div className="relative w-full rounded-sm border border-neutral-950 bg-neutral-900 p-3 text-center transition-shadow hover:shadow-lg">
                <h3 className="text-md font-semibold text-red-500">Hadiah fisik</h3>
                <p className="mt-2 text-xs tracking-wider">{data.gift_info[0].address}</p>

                <button onClick={() => handleCopy(data.gift_info[0].address)} className="cursor pointer absolute top-2 right-2" aria-label="Copy">
                    {addressCopied ? <CopyCheck className="h-5 w-5 text-red-500" /> : <Copy className="h-5 w-5 text-white" />}
                </button>
            </div>
        </section>
    );
};

export default Gift;
