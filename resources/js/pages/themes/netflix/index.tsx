// export const Netflix = ({ guest }: { guest: string }) => {
//     return (
//         <div className="bg-black text-white">
//             <div className="flex min-h-screen flex-col items-center justify-center">
//                 <h1 className="mb-4 text-4xl font-bold">Netflix Theme</h1>
//                 <p className="mb-8 text-lg">Welcome {guest} to the Netflix-themed page!</p>
//                 <button className="rounded bg-red-600 px-4 py-2 text-white">Get Started</button>
//             </div>
//         </div>
//     );
// };

import { useState } from 'react';
import Thumbnail from './components/section/thumbnail';
import UserWatch from './components/section/user-watch';

export function Netflix({ guest }: { guest: string }) {
    console.log(guest);
    const [isLogin, setIsLogin] = useState<boolean>(false);
    return (
        <div className="min-h-screen bg-black text-white">
            <div className="container max-w-sm">
                {isLogin ? (
                    <Thumbnail />
                ) : (
                    <UserWatch
                        onClick={() => {
                            setIsLogin(true);
                        }}
                    />
                )}
            </div>
        </div>
    );
}

export default Netflix;
