import React from 'react';
import { Play, Video, Calendar, Clock, Eye } from 'lucide-react';

const Videos = () => {
  const videos = [
    {
      id: 1,
      title: "The Journey of 'My Long Journey Home'",
      description: "Behind the scenes look at the writing process of TUG's upcoming book",
      duration: "12:34",
      views: "2.1K",
      date: "2024-12-10",
      category: "Behind the Scenes"
    },
    {
      id: 2,
      title: "Technology Leadership in Music",
      description: "How technology and creativity intersect in modern music production",
      duration: "18:45",
      views: "3.7K",
      date: "2024-12-05",
      category: "Tech Talk"
    },
    {
      id: 3,
      title: "Live Studio Session - 'Homeward Bound'",
      description: "Recording session for one of TUG's latest musical pieces",
      duration: "25:12",
      views: "5.2K",
      date: "2024-11-28",
      category: "Music"
    },
    {
      id: 4,
      title: "Speaking at Tech Queen Elite Training Institute",
      description: "Keynote presentation on innovation and leadership",
      duration: "42:18",
      views: "8.9K",
      date: "2024-11-20",
      category: "Speaking"
    },
    {
      id: 5,
      title: "Creative Process: From Idea to Song",
      description: "A deep dive into TUG's songwriting and creative methodology",
      duration: "16:33",
      views: "4.3K",
      date: "2024-11-15",
      category: "Creative Process"
    },
    {
      id: 6,
      title: "Q&A Session with Fans",
      description: "Answering questions about music, technology, and life",
      duration: "35:27",
      views: "6.8K",
      date: "2024-11-10",
      category: "Q&A"
    }
  ];

  const categories = ['All', 'Music', 'Tech Talk', 'Behind the Scenes', 'Speaking', 'Creative Process', 'Q&A'];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-800 mb-4">
            Videos
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Watch TUG's performances, talks, and behind-the-scenes content
          </p>
        </div>

        {/* Featured Video */}
        <div className="mb-12">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="relative">
              <div className="w-full h-96">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/ecgVOAApHMA?si=CVA8sd5HfeytZi56"
                  title="The Journey of My Long Journey Home"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="rounded-t-2xl"
                ></iframe>
              </div>
            </div>
            <div className="p-6">
              <span className="inline-block bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium mb-3">
                Featured
              </span>
              <h2 className="text-2xl font-bold text-primary-800 mb-3">
                The Journey of "My Long Journey Home"
              </h2>
              <p className="text-gray-700 mb-4">
                Get an intimate look into the writing process of TUG's upcoming book. This behind-the-scenes 
                video shares the inspiration, challenges, and moments of breakthrough that shaped this deeply personal work.
              </p>
              <div className="flex items-center space-x-6 text-gray-500">
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>12:34</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Eye className="h-4 w-4" />
                  <span>2.1K views</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>Dec 10, 2024</span>
                </div>
              </div>
            </div>
          </div>
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

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video) => (
            <div
              key={video.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200 group"
            >
              <div className="relative">
                <div className="w-full h-48 bg-primary-200 flex items-center justify-center">
                  <div className="text-center text-primary-700">
                    <Video className="h-12 w-12 mx-auto mb-2" />
                    <p className="text-sm">Video Thumbnail</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                  <button className="bg-white bg-opacity-90 rounded-full p-3">
                    <Play className="h-8 w-8 text-primary-600 ml-1" />
                  </button>
                </div>
                <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-sm">
                  {video.duration}
                </div>
              </div>
              
              <div className="p-6">
                <span className="inline-block bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-xs font-medium mb-3">
                  {video.category}
                </span>
                <h3 className="text-lg font-semibold text-primary-800 mb-2 group-hover:text-primary-600 transition-colors">
                  {video.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {video.description}
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Eye className="h-3 w-3" />
                    <span>{video.views} views</span>
                  </div>
                  <span>{new Date(video.date).toLocaleDateString()}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Subscribe Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary-800 to-primary-600 rounded-2xl p-8 text-white">
            <Video className="h-16 w-16 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">
              Stay Updated
            </h2>
            <p className="text-xl text-primary-100 mb-6 max-w-2xl mx-auto">
              Subscribe to be notified when new videos are released. Get access to exclusive content, 
              behind-the-scenes footage, and early previews.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-300"
              />
              <button className="bg-primary-500 hover:bg-primary-400 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Videos;