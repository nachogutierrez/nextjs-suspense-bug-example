// components/ValueSetter.tsx
'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

interface ValueSetterProps {
    name: string;
}

const ValueSetter: React.FC<ValueSetterProps> = ({ name }) => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [value, setValue] = useState('');

    // Initialize the value from the query parameter
    useEffect(() => {
        const paramValue = searchParams.get(name) || '';
        setValue(paramValue);
    }, [searchParams, name]);

    // Update the query parameter using transition
    const updateQueryParam = () => {
        const params = new URLSearchParams(searchParams.toString());
        params.set(name, value);
        router.push(`?${params.toString()}`);
    };

    // Handle Enter key press
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            updateQueryParam();
            e.currentTarget.blur(); // Optionally remove focus after pressing Enter
        }
    };

    return (
        <div className="flex items-center space-x-2">
            <input
                type="text"
                placeholder={`Set value for ${name}`}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onBlur={updateQueryParam} // Update when focus is lost
                onKeyDown={handleKeyDown} // Update when Enter is pressed
                className="border border-gray-400 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
            />
        </div>
    );
};

export default ValueSetter;
