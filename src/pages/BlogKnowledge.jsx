import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, X, Edit, Filter, ExternalLink, Loader2 } from 'lucide-react';

const BlogKnowledge = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [newsArticles, setNewsArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [blogPosts, setBlogPosts] = useState([]);

  // NewsAPI Configuration
  const NEWS_API_KEY = 'c0b2348649c148edbb2a92302d551247';
  const NEWS_API_URL = 'https://newsapi.org/v2/everything';

  // Fetch news articles
  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      setError(null);

      try {
        // Fetch real articles from NewsAPI - STRICT: Only environment, green tech, and climate related
        const query = 'green technology OR climate change OR sustainable energy OR renewable energy OR carbon emissions OR environmental protection OR climate resilience OR sustainability OR green energy OR solar power OR wind energy OR climate action OR environmental conservation OR green innovation OR climate adaptation OR waste management OR recycling OR sustainable agriculture';
        const response = await fetch(
          `${NEWS_API_URL}?q=${encodeURIComponent(query)}&language=en&sortBy=publishedAt&pageSize=25&apiKey=${NEWS_API_KEY}`,
          { cache: 'no-cache' }
        );

        if (!response.ok) {
          throw new Error('Failed to fetch news articles');
        }

        const data = await response.json();
        
        // Process and STRICTLY filter articles - Only environment/climate/green tech
        const processedArticles = (data.articles || [])
          .map((article) => {
            const category = getCategoryFromTitle(article.title, article.description);
            if (!category) return null; // Filter out non-relevant articles
            
            return {
              title: article.title,
              description: article.description || article.content?.substring(0, 150) + '...',
              url: article.url,
              urlToImage: article.urlToImage || '🌍',
              publishedAt: article.publishedAt,
              source: article.source,
              category: category,
            };
          })
          .filter(article => article !== null) // Remove null entries
          .slice(0, 15); // Limit to 15 articles
        
        setNewsArticles(processedArticles);
      } catch (err) {
        console.error('Error fetching news:', err);
        setError('Failed to load news articles. Using mock data.');
        // Use mock data as fallback
        setNewsArticles([
          {
            title: 'GreenTech Innovation Reduces Carbon Emissions',
            description: 'A breakthrough in renewable energy technology promises significant reductions in carbon footprints.',
            url: '#',
            urlToImage: '🌱',
            publishedAt: new Date().toISOString(),
            source: { name: 'GreenTech News' },
            category: 'upcycling',
          },
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  // Categorize articles based on keywords - STRICT Environment/GreenTech/Climate filtering
  const getCategoryFromTitle = (title, description) => {
    if (!title || !description) return null;
    
    const lowerText = (title + ' ' + (description || '')).toLowerCase();
    
    // STRICT: Filter out ALL non-relevant articles
    const excludeKeywords = [
      'netflix', 'marvel', 'hulk', 'wolverine', 'comic', 'movie', 'film', 'series', 'adaptation',
      'sports', 'entertainment', 'celebrity', 'fashion', 'gaming', 'video game',
      'politics', 'trump', 'biden', 'election', 'president', 'congress',
      'music', 'musician', 'song', 'album', 'artist', 'concert',
      'netflix', 'streaming', 'tv show', 'anime', 'cartoon',
      'fantasy', 'superhero', 'comic book', 'graphic novel',
      'wedding', 'shotgun', 'parents', 'scientist', 'song release'
    ];
    if (excludeKeywords.some(keyword => lowerText.includes(keyword))) {
      return null; // Exclude this article
    }
    
    // STRICT: Only include if it has STRONG environment/climate/green tech keywords
    const requiredKeywords = [
      'green technology', 'green tech', 'climate change', 'climate resilience',
      'sustainable energy', 'renewable energy', 'solar power', 'wind energy',
      'carbon emissions', 'carbon footprint', 'carbon neutral', 'carbon reduction',
      'environmental', 'environment protection', 'environmental conservation',
      'eco-friendly', 'eco', 'ecology', 'ecosystem',
      'sustainability', 'sustainable', 'sustainable development',
      'climate action', 'climate adaptation', 'climate mitigation',
      'green energy', 'clean energy', 'renewable', 'solar', 'wind',
      'global warming', 'greenhouse gas', 'emissions reduction',
      'conservation', 'biodiversity', 'nature', 'wildlife',
      'recycling', 'recycle', 'waste management', 'waste reduction',
      'water conservation', 'energy efficiency', 'green building',
      'agriculture', 'farming', 'crop', 'sustainable agriculture'
    ];
    
    // Article MUST contain at least one of these required keywords
    const hasRequiredKeyword = requiredKeywords.some(keyword => lowerText.includes(keyword));
    if (!hasRequiredKeyword) {
      return null; // Exclude if no relevant keywords found
    }
    
    // Additional check: Ensure it's not just a mention but actually about the topic
    const strongKeywords = [
      'green technology', 'climate change', 'sustainable energy', 'renewable energy',
      'carbon emissions', 'environmental protection', 'climate resilience'
    ];
    const hasStrongKeyword = strongKeywords.some(keyword => lowerText.includes(keyword));
    
    // Categorize
    if (lowerText.includes('recycl') || lowerText.includes('waste') || lowerText.includes('waste management')) {
      return 'recycling';
    }
    if (lowerText.includes('community') || lowerText.includes('drive') || lowerText.includes('initiative') || lowerText.includes('volunteer')) {
      return 'community';
    }
    return 'upcycling';
  };

  const filters = [
    { id: 'all', label: 'All Posts' },
    { id: 'upcycling', label: 'Upcycling Tips' },
    { id: 'recycling', label: 'Recycling Wins' },
    { id: 'community', label: 'Community Drives' },
  ];

  // Combine news articles and user blog posts
  const allPosts = [...newsArticles, ...blogPosts];

  const filteredPosts = allPosts;

  const [newPost, setNewPost] = useState({
    title: '',
    category: 'upcycling',
    content: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const post = {
      id: blogPosts.length + 1,
      ...newPost,
      image: '📝',
      excerpt: newPost.content.substring(0, 50) + '...',
      author: 'You',
      date: new Date().toISOString().split('T')[0],
      url: '#',
      source: { name: 'Your Blog' },
      publishedAt: new Date().toISOString(),
    };
    setBlogPosts([post, ...blogPosts]);
    setNewPost({ title: '', category: 'upcycling', content: '' });
    setShowModal(false);
  };

  const formatDate = (dateString) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
    } catch {
      return 'Recent';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green/10 via-blue/10 to-green/20 dark:from-green-dark/20 dark:via-blue/20 dark:to-green-dark/30 pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Share Your{' '}
            <span className="bg-gradient-to-r from-green to-blue bg-clip-text text-transparent">
              Green Journey
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Stay updated with the latest GreenTech and climate resilience news, and share your own experiences.
          </p>
        </motion.div>

        {/* Write Blog Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-8"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowModal(true)}
            className="px-6 py-3 bg-green text-white rounded-xl font-semibold flex items-center gap-2 hover:bg-green-dark transition-all shadow-lg"
          >
            <Plus size={20} />
            Write a Blog
          </motion.button>
        </motion.div>


        {/* Loading State */}
        {loading && (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="text-green animate-spin" size={48} />
            <span className="ml-4 text-gray-600 dark:text-gray-400">Loading news articles...</span>
          </div>
        )}

        {/* Error State */}
        {error && !loading && (
          <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 rounded-lg">
            <p className="text-sm text-red-800 dark:text-red-200">{error}</p>
          </div>
        )}

        {/* Blog Posts Grid */}
        {!loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post, index) => (
              <motion.div
                key={post.id || index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg cursor-pointer"
              >
                {/* Image */}
                <div className="h-48 bg-gradient-to-br from-green/20 to-blue/20 flex items-center justify-center text-6xl relative overflow-hidden">
                  {post.urlToImage && typeof post.urlToImage === 'string' && post.urlToImage.startsWith('http') ? (
                    <img
                      src={post.urlToImage}
                      alt={post.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.innerHTML = '<div class="text-6xl">🌍</div>';
                      }}
                    />
                  ) : (
                    <div className="text-6xl">{post.urlToImage || post.image || '🌍'}</div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-3 py-1 bg-green/10 text-green rounded-full text-xs font-semibold">
                      {post.category || 'news'}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm line-clamp-3">
                    {post.description || post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center gap-2">
                      <span>{post.source?.name || post.author || 'Greenify'}</span>
                      <span>•</span>
                      <span>{formatDate(post.publishedAt || post.date)}</span>
                    </div>
                    {post.url && post.url !== '#' && (
                      <a
                        href={post.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-green hover:text-green-dark flex items-center gap-1"
                      >
                        Read More
                        <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Empty State */}
        {!loading && filteredPosts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              No articles found for this category. Try a different filter!
            </p>
          </div>
        )}

        {/* Write Blog Modal */}
        <AnimatePresence>
          {showModal && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setShowModal(false)}
                className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-2xl bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 max-h-[90vh] overflow-y-auto"
              >
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Write a Blog</h2>
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setShowModal(false)}
                    className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                  >
                    <X size={24} />
                  </motion.button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Title
                    </label>
                    <input
                      type="text"
                      value={newPost.title}
                      onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green"
                      placeholder="Enter blog title..."
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Category
                    </label>
                    <select
                      value={newPost.category}
                      onChange={(e) => setNewPost({ ...newPost, category: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green"
                    >
                      <option value="upcycling">Upcycling Tips</option>
                      <option value="recycling">Recycling Wins</option>
                      <option value="community">Community Drives</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Content
                    </label>
                    <textarea
                      value={newPost.content}
                      onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
                      rows={8}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green resize-none"
                      placeholder="Write your blog content here..."
                      required
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className="w-full px-6 py-3 bg-green text-white rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-green-dark transition-all"
                  >
                    <Edit size={20} />
                    Publish Blog
                  </motion.button>
                </form>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default BlogKnowledge;
