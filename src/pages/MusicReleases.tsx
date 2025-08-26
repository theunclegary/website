import React from 'react';
import { Music, Play, Download, Calendar, Headphones, Award } from 'lucide-react';

const MusicReleases = () => {
  const albums = [
    {
      id: 1,
      title: "Homeward Bound",
      type: "Single",
      releaseDate: "2024-12-15",
      genre: "Contemporary",
      status: "Latest Release"
    },
    {
      id: 2,
      title: "Tech Dreams",
      type: "EP",
      releaseDate: "2024-11-10",
      genre: "Electronic/Pop",
      status: "Available"
    },
    {
      id: 3,
      title: "Journey's End",
      type: "Album",
      releaseDate: "2024-09-22",
      genre: "Alternative",
      status: "Available"
    },
    {
      id: 4,
      title: "Digital Heart",
      type: "Single",
      releaseDate: "2024-08-05",
      genre: "Synthwave",
      status: "Available"
    }
  ];

  const featuredTracks = [
    {
      id: 1,
      title: "My Long Journey Home",
      album: "Homeward Bound",
      duration: "4:23",
      featured: true
    },
    {
      id: 2,
      title: "Code and Melody",
      album: "Tech Dreams",
      duration: "3:45",
      featured: false
    },
    {
      id: 3,
      title: "Finding Purpose",
      album: "Journey's End",
      duration: "5:12",
      featured: false
    },
    {
      id: 4,
      title: "Innovation Blues",
      album: "Tech Dreams",
      duration: "4:01",
      featured: false
    },
    {
      id: 5,
      title: "Digital Awakening",
      album: "Digital Heart",
      duration: "3:33",
      featured: false
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-800 mb-4">
            Music Releases
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore TUG's musical journey through original compositions and releases
          </p>
        </div>

        {/* Featured Release */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-primary-800 to-primary-600 rounded-2xl p-8 text-white">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <span className="inline-block bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
                    Latest Release
                  </span>
                  <h2 className="text-4xl font-bold mb-4">Homeward Bound</h2>
                  <p className="text-xl text-primary-100 mb-6">
                    A deeply personal single that captures the essence of finding one's way home. 
                    This track serves as a musical preview of the themes explored in TUG's upcoming book.
                  </p>
                  <div className="flex items-center space-x-6 text-primary-200 mb-6">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>December 15, 2024</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Music className="h-4 w-4" />
                      <span>Contemporary</span>
                    </div>
                  </div>
                  <div className="flex space-x-4">
                    <button className="flex items-center space-x-2 bg-primary-500 hover:bg-primary-400 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200">
                      <Play className="h-5 w-5" />
                      <span>Listen Now</span>
                    </button>
                    <button className="flex items-center space-x-2 border-2 border-primary-300 text-primary-100 hover:bg-primary-700 px-6 py-3 rounded-lg font-semibold transition-colors duration-200">
                      <Download className="h-5 w-5" />
                      <span>Download</span>
                    </button>
                  </div>
                </div>
                <div>
                  <div className="w-full h-96 bg-primary-700 rounded-lg flex items-center justify-center">
                    <div className="text-center text-primary-200">
                      <Music className="h-20 w-20 mx-auto mb-4" />
                      <p className="font-semibold text-lg">Homeward Bound</p>
                      <p className="text-sm">Album Cover</p>
                      <p className="text-xs">Placeholder</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Albums Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-primary-800 mb-8 text-center">All Releases</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {albums.map((album) => (
              <div
                key={album.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200 overflow-hidden group"
              >
                <div className="relative">
                  <div className="w-full h-64 bg-primary-200 flex items-center justify-center">
                    <div className="text-center text-primary-700">
                      <Music className="h-16 w-16 mx-auto mb-2" />
                      <p className="font-semibold">{album.title}</p>
                      <p className="text-sm">Album Art</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                    <button className="bg-white bg-opacity-90 rounded-full p-3">
                      <Play className="h-8 w-8 text-primary-600 ml-1" />
                    </button>
                  </div>
                  {album.status === "Latest Release" && (
                    <div className="absolute top-2 left-2 bg-primary-500 text-white px-2 py-1 rounded text-xs font-semibold">
                      New
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary-800 mb-2">{album.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">{album.type} • {album.genre}</p>
                  <p className="text-sm text-gray-500 mb-4">
                    {new Date(album.releaseDate).toLocaleDateString()}
                  </p>
                  <div className="flex space-x-2">
                    <button className="flex-1 bg-primary-600 hover:bg-primary-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors duration-200">
                      Listen
                    </button>
                    <button className="border border-primary-600 text-primary-600 hover:bg-primary-50 py-2 px-4 rounded-lg text-sm font-medium transition-colors duration-200">
                      <Download className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Tracks */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-primary-800 mb-8 text-center">Featured Tracks</h2>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            {featuredTracks.map((track, index) => (
              <div
                key={track.id}
                className={`flex items-center justify-between p-6 hover:bg-primary-50 transition-colors duration-200 ${
                  index < featuredTracks.length - 1 ? 'border-b border-gray-200' : ''
                }`}
              >
                <div className="flex items-center space-x-4">
                  <button className="w-12 h-12 bg-primary-100 hover:bg-primary-200 rounded-full flex items-center justify-center transition-colors duration-200">
                    <Play className="h-5 w-5 text-primary-600 ml-1" />
                  </button>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {track.title}
                      {track.featured && (
                        <Award className="inline h-4 w-4 text-primary-600 ml-2" />
                      )}
                    </h3>
                    <p className="text-sm text-gray-600">{track.album}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-gray-500">{track.duration}</span>
                  <button className="text-primary-600 hover:text-primary-700">
                    <Download className="h-5 w-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Streaming Platforms */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl p-8">
            <Headphones className="h-16 w-16 text-primary-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-primary-800 mb-4">
              Listen Everywhere
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              TUG's music is available on all major streaming platforms. Choose your preferred service to start listening.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              <button className="bg-white hover:bg-primary-50 border border-primary-200 p-4 rounded-lg transition-colors duration-200">
                <p className="font-semibold text-primary-800">Spotify</p>
              </button>
              <button className="bg-white hover:bg-primary-50 border border-primary-200 p-4 rounded-lg transition-colors duration-200">
                <p className="font-semibold text-primary-800">Apple Music</p>
              </button>
              <button className="bg-white hover:bg-primary-50 border border-primary-200 p-4 rounded-lg transition-colors duration-200">
                <p className="font-semibold text-primary-800">YouTube Music</p>
              </button>
              <button className="bg-white hover:bg-primary-50 border border-primary-200 p-4 rounded-lg transition-colors duration-200">
                <p className="font-semibold text-primary-800">SoundCloud</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicReleases;