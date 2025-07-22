import { useState } from 'react';
import BookCard from '../../components/BookCard';
import CategoryCard from '../../components/CategoryCard';

// Mock data for demonstration
const featuredBooks = [
    {
        id: '1',
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        price: 15.99,
        imageUrl: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=1000',
        discount: 10,
    },
    {
        id: '2',
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        price: 12.99,
        imageUrl: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1000',
    },
    {
        id: '3',
        title: '1984',
        author: 'George Orwell',
        price: 11.99,
        imageUrl: 'https://images.unsplash.com/photo-1495640388908-05fa85288e61?q=80&w=1000',
        discount: 15,
    },
    {
        id: '4',
        title: 'The Hobbit',
        author: 'J.R.R. Tolkien',
        price: 14.99,
        imageUrl: 'https://images.unsplash.com/photo-1621351183012-e2f9972dd9bf?q=80&w=1000',
    },
];

const newReleases = [
    {
        id: '5',
        title: 'Atomic Habits',
        author: 'James Clear',
        price: 18.99,
        imageUrl: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=1000',
        discount: 5,
    },
    {
        id: '6',
        title: 'The Midnight Library',
        author: 'Matt Haig',
        price: 16.99,
        imageUrl: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&w=1000',
    },
    {
        id: '7',
        title: 'Project Hail Mary',
        author: 'Andy Weir',
        price: 19.99,
        imageUrl: 'https://images.unsplash.com/photo-1531901599143-df5010ab9438?q=80&w=1000',
        discount: 20,
    },
    {
        id: '8',
        title: 'The Four Winds',
        author: 'Kristin Hannah',
        price: 17.99,
        imageUrl: 'https://images.unsplash.com/photo-1535398089889-dd807df1dfaa?q=80&w=1000',
    },
];

const categories = [
    {
        id: '1',
        name: 'Fiction',
        imageUrl: 'https://images.unsplash.com/photo-1476275466078-4007374efbbe?q=80&w=1000',
        bookCount: 1245,
    },
    {
        id: '2',
        name: 'Science',
        imageUrl: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=1000',
        bookCount: 853,
    },
    {
        id: '3',
        name: 'History',
        imageUrl: 'https://images.unsplash.com/photo-1461360228754-6e81c478b882?q=80&w=1000',
        bookCount: 621,
    },
    {
        id: '4',
        name: 'Self-Help',
        imageUrl: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1000',
        bookCount: 427,
    },
];

const banners = [
    {
        id: '1',
        title: 'Summer Reading Sale',
        description: 'Get up to 50% off on bestselling books this summer',
        imageUrl: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1000',
        buttonText: 'Shop Now',
    },
    {
        id: '2',
        title: 'New Arrivals',
        description: 'Discover the latest books from your favorite authors',
        imageUrl: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=1000',
        buttonText: 'Explore',
    },
    {
        id: '3',
        title: 'Book Club Picks',
        description: 'Join our book club and get exclusive discounts',
        imageUrl: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=1000',
        buttonText: 'Join Now',
    },
];

export function HomePage() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % banners.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Banner Carousel */}
            <div className="relative w-full h-[500px] overflow-hidden">
                {banners.map((banner, index) => (
                    <div
                        key={banner.id}
                        className={`absolute inset-0 transition-transform duration-500 ease-in-out ${index === currentSlide ? 'translate-x-0' :
                                index < currentSlide ? '-translate-x-full' : 'translate-x-full'
                            }`}
                    >
                        <img
                            src={banner.imageUrl}
                            alt={banner.title}
                            className="h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                            <div className="text-center text-white max-w-2xl px-4">
                                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                                    {banner.title}
                                </h1>
                                <p className="text-lg md:text-xl mb-8 opacity-90">
                                    {banner.description}
                                </p>
                                <button className="bg-white text-gray-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                                    {banner.buttonText}
                                </button>
                            </div>
                        </div>
                    </div>
                ))}

                {/* Navigation buttons */}
                <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>

                {/* Dots indicator */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {banners.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`w-3 h-3 rounded-full transition-colors ${index === currentSlide ? 'bg-white' : 'bg-white/50'
                                }`}
                        />
                    ))}
                </div>
            </div>

            {/* Featured Books Section */}
            <div className="container mx-auto px-4 py-12">
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-800">
                        Featured Books
                    </h2>
                    <button className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors">
                        View All
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                        </svg>
                    </button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {featuredBooks.map((book) => (
                        <BookCard key={book.id} {...book} />
                    ))}
                </div>
            </div>

            {/* Categories Section */}
            <div className="bg-gray-100 py-12">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center mb-8">
                        <h2 className="text-3xl font-bold text-gray-800">
                            Browse Categories
                        </h2>
                        <button className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors">
                            All Categories
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                            </svg>
                        </button>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {categories.map((category) => (
                            <CategoryCard key={category.id} {...category} />
                        ))}
                    </div>
                </div>
            </div>

            {/* New Releases Section */}
            <div className="container mx-auto px-4 py-12">
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-800">
                        New Releases
                    </h2>
                    <button className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors">
                        View All
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                        </svg>
                    </button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {newReleases.map((book) => (
                        <BookCard key={book.id} {...book} />
                    ))}
                </div>
            </div>

            {/* Newsletter Section */}
            <div className="bg-blue-500 py-16">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">
                        Subscribe to Our Newsletter
                    </h2>
                    <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                        Stay updated with our latest releases, exclusive offers, and literary events. Join our community today!
                    </p>
                    <div className="flex flex-col sm:flex-row gap-2 justify-center max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 flex-grow"
                        />
                        <button className="bg-white text-blue-500 px-6 py-2 rounded-md font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;