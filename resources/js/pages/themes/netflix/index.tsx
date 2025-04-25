import { useState } from 'react';
import Thumbnail from './components/section/thumbnail';
import UserWatch from './components/section/user-watch';

export function Netflix({ guest }: { guest: string }) {
    console.log(guest);
    const [isLogin, setIsLogin] = useState<boolean>(false);

    return (
        <div className="min-h-screen overflow-x-hidden bg-black text-white">
            <div className="container mx-auto max-w-sm">
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
