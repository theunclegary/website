import React from 'react';
import { Link } from 'react-router-dom';
import { Music, Book, Video, Image, ArrowRight } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative text-white py-20 overflow-hidden">
        {/* Creative Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900">
          {/* Geometric patterns and tech elements */}
          <div className="absolute inset-0 opacity-20">
            {/* Circuit board pattern */}
            <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 1200 800" fill="none">
              <defs>
                <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                  <path d="M20 20h60v60h-60z" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.3"/>
                  <circle cx="20" cy="20" r="3" fill="currentColor" opacity="0.5"/>
                  <circle cx="80" cy="20" r="3" fill="currentColor" opacity="0.5"/>
                  <circle cx="20" cy="80" r="3" fill="currentColor" opacity="0.5"/>
                  <circle cx="80" cy="80" r="3" fill="currentColor" opacity="0.5"/>
                  <path d="M20 20h60M20 80h60M20 20v60M80 20v60" stroke="currentColor" strokeWidth="1" opacity="0.3"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#circuit)" className="text-blue-300"/>
            </svg>
          </div>
          
          {/* Musical notes floating */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 text-blue-300 opacity-30 animate-pulse">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
              </svg>
            </div>
            <div className="absolute top-40 right-20 text-blue-400 opacity-40 animate-bounce" style={{animationDelay: '1s'}}>
              <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
              </svg>
            </div>
            <div className="absolute bottom-32 left-1/4 text-blue-200 opacity-25 animate-pulse" style={{animationDelay: '2s'}}>
              <svg width="35" height="35" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
              </svg>
            </div>
          </div>
          
          {/* Writing/book elements */}
          <div className="absolute inset-0">
            <div className="absolute top-32 right-10 text-blue-300 opacity-20 animate-pulse" style={{animationDelay: '0.5s'}}>
              <svg width="45" height="45" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
              </svg>
            </div>
            <div className="absolute bottom-20 right-1/3 text-blue-400 opacity-30 animate-bounce" style={{animationDelay: '1.5s'}}>
              <svg width="25" height="25" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z"/>
              </svg>
            </div>
          </div>
          
          {/* Tech icons */}
          <div className="absolute inset-0">
            <div className="absolute top-16 left-1/3 text-blue-200 opacity-25 animate-pulse" style={{animationDelay: '3s'}}>
              <svg width="50" height="50" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4,6H20V16H4M20,18A2,2 0 0,0 22,16V6C22,4.89 21.1,4 20,4H4C2.89,4 2,4.89 2,6V16A2,2 0 0,0 4,18H0V20H24V18H20Z"/>
              </svg>
            </div>
            <div className="absolute bottom-40 left-16 text-blue-300 opacity-35 animate-bounce" style={{animationDelay: '2.5s'}}>
              <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17,10.5V7A1,1 0 0,0 16,6H4A1,1 0 0,0 3,7V10.5A1,1 0 0,0 4,11.5H16A1,1 0 0,0 17,10.5M16,13A1,1 0 0,0 15,14H5A1,1 0 0,0 4,15V18A1,1 0 0,0 5,19H15A1,1 0 0,0 16,18V15A1,1 0 0,0 15,14M8,15.5H9.5V17.5H8V15.5M10.5,15.5H12V17.5H10.5V15.5M13,15.5H14.5V17.5H13V15.5M8,8H9.5V10H8V8M10.5,8H12V10H10.5V8M13,8H14.5V10H13V8Z"/>
              </svg>
            </div>
          </div>
          
          {/* Abstract geometric shapes */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 opacity-10 rounded-full blur-3xl transform translate-x-32 -translate-y-32"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-400 opacity-15 rounded-full blur-2xl transform -translate-x-20 translate-y-20"></div>
            <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-300 opacity-10 rounded-full blur-xl transform -translate-x-32 -translate-y-32"></div>
          </div>
          
          {/* Subtle grid overlay */}
          <div className="absolute inset-0 opacity-5">
            <div className="w-full h-full" style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }}></div>
          </div>
        </div>
        
        {/* Content overlay */}
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <img 
              src="https://www.thetechqueen.com/wp-content/uploads/2022/03/duana-tug.png" 
              alt="Garry Washington (The Uncle Garry)" 
              className="w-48 h-48 mx-auto mb-6 rounded-full object-cover shadow-lg border-4 border-primary-400"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="italic">
              The Uncle Garry
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-2 text-primary-200">
            Also Known As <span className="font-bold text-primary-400">TUG</span>
          </p>
          <p className="text-lg md:text-xl mb-8 text-primary-100">
            Chief Technology Officer • Tech Queen Elite Training Institute
          </p>
          <p className="text-lg mb-8 max-w-3xl mx-auto text-primary-100">
            Blending technology expertise with musical passion, creating inspiring content 
            and sharing stories that resonate with hearts and minds.
          </p>
          <Link
            to="/about"
            className="inline-flex items-center space-x-2 bg-primary-500 hover:bg-primary-400 text-white px-8 py-3 rounded-full font-semibold transition-colors duration-200"
          >
            <span>Learn More About TUG</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Featured Book Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Coming Soon
            </h2>
            <p className="text-xl text-gray-600">
              TUG's upcoming book release
            </p>
          </div>
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl p-8 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  "My Long Journey Home"
                </h3>
                <p className="text-lg text-gray-700 mb-6">
                  A deeply personal and inspiring story of growth, challenges, and finding one's way home. 
                  This upcoming release promises to touch hearts and inspire readers on their own journeys.
                </p>
                <Link
                  to="/order"
                  className="inline-flex items-center space-x-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
                >
                  <Book className="h-5 w-5" />
                  <span>Pre-Order Now</span>
                </Link>
              </div>
              <div className="order-1 md:order-2">
                <div className="flex justify-center">
                  <img 
                    src="/book cover copy.png" 
                    alt="My Long Journey Home - Book Cover" 
                    className="w-48 h-72 rounded-lg object-cover shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Explore TUG's World
            </h2>
            <p className="text-xl text-gray-600">
              Discover music, writings, videos, and more
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Link to="/music" className="group">
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-200 text-center">
                <Music className="h-12 w-12 text-primary-600 mx-auto mb-4 group-hover:scale-110 transition-transform duration-200" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Music Releases</h3>
                <p className="text-gray-600">Explore TUG's musical creations and releases</p>
              </div>
            </Link>
            <Link to="/videos" className="group">
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-200 text-center">
                <Video className="h-12 w-12 text-primary-600 mx-auto mb-4 group-hover:scale-110 transition-transform duration-200" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Videos</h3>
                <p className="text-gray-600">Watch performances and behind-the-scenes content</p>
              </div>
            </Link>
            <Link to="/anthology" className="group">
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-200 text-center">
                <Book className="h-12 w-12 text-primary-600 mx-auto mb-4 group-hover:scale-110 transition-transform duration-200" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Anthology</h3>
                <p className="text-gray-600">Explore TUG's collection of stories and insights</p>
              </div>
            </Link>
            <Link to="/gallery" className="group">
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-200 text-center">
                <Image className="h-12 w-12 text-primary-600 mx-auto mb-4 group-hover:scale-110 transition-transform duration-200" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Photo Gallery</h3>
                <p className="text-gray-600">Visual journey through TUG's experiences</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;