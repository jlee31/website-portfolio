import { Calendar, Clock, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

const Blog = () => {
  const [expandedPosts, setExpandedPosts] = useState(new Set());
  const [selectedCategory, setSelectedCategory] = useState('All');

  const blogPosts = [
    {
      id: 1,
      title: "Getting Started with React 19",
      excerpt: "React 19 brings exciting new features and improvements. Let's explore what's new and how to get started with the latest version.",
      content: "React 19 introduces several groundbreaking features that will change how we build React applications. The new concurrent features, improved server components, and enhanced developer experience make this version a significant upgrade. In this comprehensive guide, we'll cover everything you need to know to get started with React 19, including setup, new hooks, and best practices for migration.",
      date: "2024-01-15",
      readTime: "5 min read",
      category: "React",
      featured: true
    },
    {
      id: 2,
      title: "Building Modern UIs with CSS Grid",
      excerpt: "CSS Grid is a powerful layout system that makes creating complex layouts much easier. Here's how to use it effectively.",
      content: "CSS Grid has revolutionized the way we approach web layouts. Unlike Flexbox, which is primarily one-dimensional, CSS Grid gives us true two-dimensional control over our layouts. We'll explore grid containers, grid items, grid lines, and how to create responsive, complex layouts that were previously impossible or very difficult to achieve with older CSS methods.",
      date: "2024-01-10",
      readTime: "8 min read",
      category: "CSS"
    },
    {
      id: 3,
      title: "The Future of Web Development",
      excerpt: "Exploring upcoming trends and technologies that will shape the future of web development and how to prepare for them.",
      content: "The web development landscape is constantly evolving, with new technologies emerging at a rapid pace. From WebAssembly and Progressive Web Apps to AI-powered development tools and the continued evolution of JavaScript frameworks, staying ahead of the curve is crucial. This article explores the most promising technologies and how developers can prepare for the future of web development.",
      date: "2024-01-05",
      readTime: "6 min read",
      category: "Web Development"
    },
    {
      id: 4,
      title: "Optimizing Performance in React Apps",
      excerpt: "Performance is crucial for user experience. Learn the best practices for optimizing your React applications.",
      content: "Performance optimization in React applications is a multi-faceted challenge that requires understanding of React's rendering mechanism, JavaScript optimization techniques, and web performance fundamentals. We'll cover code splitting, lazy loading, memoization, and other advanced techniques that can significantly improve your app's performance and user experience.",
      date: "2024-01-01",
      readTime: "7 min read",
      category: "React"
    }
  ];

  const categories = ["All", "React", "CSS", "Web Development", "JavaScript", "Tools"];

  const togglePost = (postId) => {
    const newExpanded = new Set(expandedPosts);
    if (newExpanded.has(postId)) {
      newExpanded.delete(postId);
    } else {
      newExpanded.add(postId);
    }
    setExpandedPosts(newExpanded);
  };

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="blog">
      <div className="container">
        <section className="blog-hero">
          <h1 className="page-title">Blog</h1>
          <p className="page-subtitle">what I have to share ~ whether that be programming, exercise, cooking or more</p>
        </section>

        <section className="blog-content">
          <div className="blog-sidebar">
            <div className="categories-widget">
              <h3>Categories</h3>
              <div className="category-list">
                {categories.map(category => (
                  <button 
                    key={category} 
                    className={`category-item ${selectedCategory === category ? 'active' : ''}`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div className="recent-posts-widget">
              <h3>Recent Posts</h3>
              <div className="recent-posts">
                {blogPosts.slice(0, 3).map(post => (
                  <div key={post.id} className="recent-post">
                    <h4>{post.title}</h4>
                    <div className="post-meta">
                      <span className="post-date">{post.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="blog-main">
            <div className="posts-list">
              {filteredPosts.map(post => (
                <article key={post.id} className={`blog-post-item ${expandedPosts.has(post.id) ? 'expanded' : ''}`}>
                  <div className="post-header" onClick={() => togglePost(post.id)}>
                    <div className="post-title-section">
                      <h3 className="post-title">{post.title}</h3>
                      <div className="post-meta">
                        <span className="post-category">{post.category}</span>
                        <span className="post-date">
                          <Calendar size={14} />
                          {post.date}
                        </span>
                        <span className="post-read-time">
                          <Clock size={14} />
                          {post.readTime}
                        </span>
                      </div>
                    </div>
                    <div className="expand-icon">
                      {expandedPosts.has(post.id) ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </div>
                  </div>
                  
                  {expandedPosts.has(post.id) && (
                    <div className="post-content">
                      <p className="post-excerpt">{post.excerpt}</p>
                      <div className="post-full-content">
                        {post.content}
                      </div>
                      <button className="read-more-btn">
                        Read Full Article
                        <ArrowRight size={16} />
                      </button>
                    </div>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Blog;
