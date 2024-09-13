// components/ContentLoader.tsx
interface ContentLoaderProps {
    label: string;
}

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const ContentLoader = async ({ label }: ContentLoaderProps) => {
    await sleep(2000); // Wait for 2 seconds
    return (
        <div className="p-4 bg-green-100 rounded shadow">
            <h2 className="text-lg font-semibold text-green-800">{label}</h2>
            <p className="text-gray-800">
                This content depends on: <strong>{label}</strong>.
            </p>
        </div>
    );
};

export default ContentLoader;
