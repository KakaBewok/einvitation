export const Netflix = ({ guest }: { guest: string }) => {
    return (
        <div className="bg-black text-white">
            <div className="flex min-h-screen flex-col items-center justify-center">
                <h1 className="mb-4 text-4xl font-bold">Netflix Theme</h1>
                <p className="mb-8 text-lg">Welcome {guest} to the Netflix-themed page!</p>
                <button className="rounded bg-red-600 px-4 py-2 text-white">Get Started</button>
            </div>
        </div>
    );
};
