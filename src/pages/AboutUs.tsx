import React from 'react';
import { User, Briefcase, Music, Heart } from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-800 mb-4">
            About The Uncle Garry (TUG)
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the story behind the music, technology, and inspiration
          </p>
        </div>

        {/* Hero Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <img 
                src="https://www.thetechqueen.com/wp-content/uploads/2022/03/governor-sandoval.jpg" 
                alt="Garry Washington - Professional Photo" 
                className="w-48 h-48 mx-auto rounded-full object-cover shadow-lg mb-6 lg:mb-0"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-primary-800 mb-6">Garry Washington</h2>
              <p className="text-lg text-gray-700 mb-6">
                Known to friends, family, and fans as "The Uncle Garry" or simply "TUG," 
                Garry Washington represents a unique blend of technological expertise and artistic passion. 
                As the Chief Technology Officer at Tech Queen Elite Training Institute, 
                he bridges the worlds of innovation and creativity.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                TUG's journey spans decades of experience in technology leadership while maintaining 
                a deep connection to music and storytelling. His upcoming book, "My Long Journey Home," 
                promises to share the wisdom gained from a life lived at the intersection of 
                technology and human connection.
              </p>
            </div>
          </div>
        </div>

        {/* Role & Expertise */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-xl p-6 text-center">
            <Briefcase className="h-12 w-12 text-primary-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-primary-800 mb-3">Technology Leader</h3>
            <p className="text-gray-700">
              Chief Technology Officer at Tech Queen Elite Training Institute, 
              driving innovation and technological advancement in education and training.
            </p>
          </div>
          <div className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-xl p-6 text-center">
            <Music className="h-12 w-12 text-primary-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-primary-800 mb-3">Musical Artist</h3>
            <p className="text-gray-700">
              Creating and sharing music that resonates with audiences, 
              blending personal experiences with universal themes of hope and connection.
            </p>
          </div>
          <div className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-xl p-6 text-center">
            <Heart className="h-12 w-12 text-primary-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-primary-800 mb-3">Storyteller</h3>
            <p className="text-gray-700">
              Sharing life experiences through writing and speaking, 
              inspiring others to embrace their own journeys of growth and discovery.
            </p>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="bg-primary-800 text-white rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Mission & Vision</h2>
          <p className="text-xl mb-6 max-w-4xl mx-auto">
            "To bridge the gap between technology and humanity, using music and storytelling 
            to inspire others to embrace their own unique journeys. Through my work at 
            Tech Queen Elite Training Institute and my creative endeavors, I aim to show 
            that innovation and artistry can coexist beautifully."
          </p>
          <p className="text-lg text-primary-200">
            - The Uncle Garry (TUG)
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;