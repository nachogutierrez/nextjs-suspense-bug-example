// components/Skeleton.tsx
const Skeleton = () => {
    return (
        <div className="p-4 bg-gray-200 rounded animate-pulse">
            <div className="h-4 bg-gray-400 rounded w-3/4 mb-2"></div>
            <div className="h-4 bg-gray-400 rounded w-1/2"></div>
        </div>
    );
};

export default Skeleton;
