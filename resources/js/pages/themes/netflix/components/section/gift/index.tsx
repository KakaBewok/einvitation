import { Check, ClipboardCopy } from 'lucide-react';
import { useState } from 'react';
import data from '../../../data/config.json';

const Gift = () => {
    const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
    const [addressCopied, setAddressCopied] = useState(false);

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
        <section className="space-y-10 bg-black px-6 py-10 text-white md:px-20">
            <div className="space-y-2 text-center">
                <h2 className="mb-4 text-lg leading-5 font-bold text-white">Wedding Gift 🎁</h2>
                <p className="mx-auto max-w-xl text-xs text-slate-300">
                    Kehadiran kalian udah bikin kami bahagia. Tapi kalau kalian mau nitip sedikit cinta dalam bentuk hadiah, ini beberapa opsinya ya.
                    Terima kasih! ❤️
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
                {data.gift_info.map((gift, idx) => (
                    <div
                        key={idx}
                        className="relative rounded-sm border border-neutral-950 bg-neutral-900 p-3 text-center transition-shadow hover:shadow-lg"
                    >
                        <h3 className="text-xl font-semibold text-red-500">{gift.provider}</h3>
                        <p className="mt-2 text-lg tracking-wider">{gift.accountNumber}</p>
                        <p className="mt-1 text-sm text-gray-300 italic">a.n. {gift.accountName}</p>

                        <button onClick={() => handleCopy(gift.accountNumber, idx)} className="absolute top-2 right-2 rounded-full" aria-label="Copy">
                            {copiedIndex === idx ? <Check className="h-5 w-5 text-red-500" /> : <ClipboardCopy className="h-5 w-5 text-white" />}
                        </button>
                    </div>
                ))}
            </div>

            <div className="relative mx-auto max-w-2xl rounded-xl border border-neutral-950 bg-neutral-900 p-3 text-center">
                <h3 className="mb-2 text-xl font-semibold text-red-500">Hadiah fisik</h3>
                <p className="text-sm text-gray-300">{data.gift_info[0].address}</p>

                <button
                    onClick={() => handleCopy(data.gift_info[0].address)}
                    className="absolute top-2 right-2 rounded-full"
                    aria-label="Copy address"
                >
                    {addressCopied ? <Check className="h-5 w-5 text-red-500" /> : <ClipboardCopy className="h-5 w-5 text-slate-200" />}
                </button>
            </div>
        </section>
    );
};

export default Gift;
