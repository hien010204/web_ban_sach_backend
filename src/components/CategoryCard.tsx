import React from 'react';

interface CategoryCardProps {
    id: string;
    name: string;
    imageUrl: string;
    bookCount: number;
}

export function CategoryCard({ id, name, imageUrl, bookCount }: CategoryCardProps) {
    return (
        <div className="max-w-[280px] bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow">
            <div className="h-40 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/30 z-10" />
                <img
                    src={imageUrl}
                    alt={name}
                    className="h-full w-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 flex items-center justify-center z-20">
                    <h3 className="text-2xl font-bold text-white text-center">
                        {name}
                    </h3>
                </div>
            </div>
            <div className="p-3 text-center">
                <p className="text-sm text-gray-600">
                    {bookCount} Books
                </p>
            </div>
        </div>
    );
}

export default CategoryCard;