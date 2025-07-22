import React from 'react';

interface BookCardProps {
    id: string;
    title: string;
    author: string;
    price: number;
    imageUrl: string;
    discount?: number;
}

export function BookCard({ id, title, author, price, imageUrl, discount }: BookCardProps) {
    const discountedPrice = discount ? price * (1 - discount / 100) : price;

    return (
        <div className="max-w-[280px] bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-60 overflow-hidden">
                <img
                    src={imageUrl}
                    alt={title}
                    className="h-full w-full object-cover hover:scale-105 transition-transform duration-300"
                />
            </div>
            <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-1 truncate">
                    {title}
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                    {author}
                </p>
                <div className="flex items-center gap-2 mb-4">
                    <span className="text-lg font-medium text-gray-800">
                        ${discountedPrice.toFixed(2)}
                    </span>
                    {discount && (
                        <span className="text-sm text-gray-500 line-through">
                            ${price.toFixed(2)}
                        </span>
                    )}
                    {discount && (
                        <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded">
                            {discount}% Off
                        </span>
                    )}
                </div>
                <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-200">
                    Add to Cart
                </button>
            </div>
        </div>
    );
}

export default BookCard;