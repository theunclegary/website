import React from 'react';
import { Image, Camera } from 'lucide-react';

const PhotoGallery = () => {
  // Placeholder data for gallery items
  const galleryItems = [
    { id: 1, title: 'Studio Recording Session', category: 'Music' },
    { id: 2, title: 'Tech Queen Elite Training Institute', category: 'Professional' },
    { id: 3, title: 'Live Performance', category: 'Music' },
    { id: 4, title: 'Book Writing Process', category: 'Writing' },
    { id: 5, title: 'Technology Conference', category: 'Professional' },
    { id: 6, title: 'Behind the Scenes', category: 'Personal' },
    { id: 7, title: 'Collaboration Session', category: 'Music' },
    { id: 8, title: 'Team Leadership', category: 'Professional' },
    { id: 9, title: 'Creative Process', category: 'Personal' },
  ];

  const categories = ['All', 'Music', 'Professional', 'Writing', 'Personal'];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-800 mb-4">
            Photo Gallery
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A visual journey through TUG's professional and creative life
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className="px-6 py-2 bg-primary-100 text-primary-800 rounded-full hover:bg-primary-200 transition-colors duration-200 font-medium"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200 group"
            >
              <div className="aspect-w-16 aspect-h-12 bg-emerald-100">
                {item.id === 2 ? (
                  <img 
                    src="https://www.thetechqueen.com/wp-content/uploads/2022/03/unclegaryandi.jpg" 
                    alt="Tech Queen Elite Training Institute" 
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-200"
                  />
                ) : item.id === 1 ? (
                  <img 
                    src="/marcel copy.jpg" 
                    alt="Studio Recording Session" 
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-200"
                  />
                ) : item.id === 4 ? (
                  <img 
                    src="https://www.thetechqueen.com/wp-content/uploads/2022/03/98028344_3174804079271140_1477212138412965888_n-768x576-1.jpg" 
                    alt="Book Writing Process" 
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-200"
                  />
                ) : item.id === 3 ? (
                  <img 
                    src="/tug-at-work.png" 
                    alt="Live Performance" 
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-200"
                  />
                ) : (
                  <div className="w-full h-64 bg-primary-200 flex items-center justify-center group-hover:bg-primary-300 transition-colors duration-200">
                    <div className="text-center text-primary-700">
                      <Camera className="h-12 w-12 mx-auto mb-2" />
                      <p className="font-semibold">{item.title}</p>
                      <p className="text-sm">Photo Placeholder</p>
                    </div>
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary-800 mb-2">
                  {item.title}
                </h3>
                <span className="inline-block bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium">
                  {item.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl p-8">
            <Image className="h-16 w-16 text-primary-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-primary-800 mb-4">
              More Photos Coming Soon
            </h2>
            <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
              We're constantly updating our gallery with new photos from TUG's professional work, 
              musical performances, and creative process. Check back regularly for new content!
            </p>
            <button className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
              Subscribe for Updates
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;