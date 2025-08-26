import React, { useState } from 'react';
import { BookOpen, Search, Filter, Calendar, User, ArrowRight, Quote } from 'lucide-react';

const Anthology = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const stories = [
    {
      id: 1,
      title: "The Digital Bridge",
      excerpt: "How technology became the bridge between my professional aspirations and creative dreams...",
      category: "Technology",
      date: "2024-12-01",
      readTime: "5 min read",
      featured: true
    },
    {
      id: 2,
      title: "Finding My Voice",
      excerpt: "The journey of discovering my unique perspective in both the tech world and music industry...",
      category: "Personal Growth",
      date: "2024-11-28",
      readTime: "7 min read",
      featured: false
    },
    {
      id: 3,
      title: "Lessons from Leadership",
      excerpt: "What I've learned about leading teams and inspiring innovation at Tech Queen Elite Training Institute...",
      category: "Leadership",
      date: "2024-11-25",
      readTime: "6 min read",
      featured: false
    },
    {
      id: 4,
      title: "The Music in Code",
      excerpt: "Discovering the rhythm and harmony that exists in well-written software and beautiful algorithms...",
      category: "Technology",
      date: "2024-11-20",
      readTime: "4 min read",
      featured: false
    },
    {
      id: 5,
      title: "Homeward Bound: A Reflection",
      excerpt: "The inspiration behind my upcoming book and the meaning of finding one's way home...",
      category: "Writing",
      date: "2024-11-15",
      readTime: "8 min read",
      featured: true
    },
    {
      id: 6,
      title: "Innovation and Tradition",
      excerpt: "Balancing cutting-edge technology with time-tested wisdom in both business and life...",
      category: "Philosophy",
      date: "2024-11-10",
      readTime: "5 min read",
      featured: false
    }
  ];

  const categories = ['All', 'Technology', 'Personal Growth', 'Leadership', 'Writing', 'Philosophy'];

  const filteredStories = stories.filter(story => {
    const matchesSearch = story.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         story.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || story.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredStory = stories.find(story => story.featured);

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-800 mb-4">
            Anthology
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A collection of stories, insights, and reflections from TUG's journey through technology, music, and life
          </p>
        </div>

        {/* Featured Story */}
        {featuredStory && (
          <div className="mb-16">
            <div className="bg-gradient-to-r from-primary-800 to-primary-600 rounded-2xl p-8 text-white">
              <div className="max-w-4xl mx-auto">
                <span className="inline-block bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
                  Featured Story
                </span>
                <h2 className="text-4xl font-bold mb-4">{featuredStory.title}</h2>
                <p className="text-xl text-primary-100 mb-6">
                  {featuredStory.excerpt}
                </p>
                <div className="flex items-center space-x-6 text-primary-200 mb-6">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(featuredStory.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <BookOpen className="h-4 w-4" />
                    <span>{featuredStory.readTime}</span>
                  </div>
                  <span className="bg-primary-500 text-white px-3 py-1 rounded-full text-sm">
                    {featuredStory.category}
                  </span>
                </div>
                <button className="flex items-center space-x-2 bg-primary-500 hover:bg-primary-400 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200">
                  <span>Read Full Story</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Search and Filter */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search stories..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-gray-500" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredStories.map((story) => (
            <div
              key={story.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200 overflow-hidden group"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium">
                    {story.category}
                  </span>
                  {story.featured && (
                    <span className="bg-primary-500 text-white px-2 py-1 rounded text-xs font-semibold">
                      Featured
                    </span>
                  )}
                </div>
                
                <h3 className="text-xl font-bold text-primary-800 mb-3 group-hover:text-primary-600 transition-colors">
                  {story.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {story.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(story.date).toLocaleDateString()}</span>
                  </div>
                  <span>{story.readTime}</span>
                </div>
                
                <button className="w-full bg-primary-600 hover:bg-primary-700 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center space-x-2">
                  <span>Read Story</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Inspirational Quote */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl p-8 text-center">
            <Quote className="h-12 w-12 text-primary-600 mx-auto mb-6" />
            <blockquote className="text-2xl font-medium text-primary-800 mb-4 max-w-3xl mx-auto">
              "Every story we tell, every experience we share, becomes a bridge that connects us to others on their own journeys home."
            </blockquote>
            <cite className="text-lg text-primary-600 font-semibold">- The Uncle Garry (TUG)</cite>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="text-center">
          <div className="bg-primary-800 rounded-2xl p-8 text-white">
            <BookOpen className="h-16 w-16 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">
              Stay Updated
            </h2>
            <p className="text-xl text-primary-100 mb-6 max-w-2xl mx-auto">
              Subscribe to receive new stories and insights as they're published. 
              Be the first to read TUG's latest reflections and experiences.
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

export default Anthology;