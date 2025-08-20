import { Calendar, Clock, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

const Blog = () => {
  const [expandedPosts, setExpandedPosts] = useState(new Set());
  const [selectedCategory, setSelectedCategory] = useState('All');

  const blogPosts = [
    {
      id: 1,
      title: "First Post",
      excerpt: "Test test test --- first post",
      content: "hi",
      date: "2025-08-19",
      readTime: "0 min read",
      category: "Random",
      featured: true
    },
    {
      id: 2,
      title: "What I Learned from Rock Climbing",
      excerpt: "Rock climbing taught me lessons in patience, problem-solving, and resilience—skills that apply both in life and in software development.",
      content: "During my rock climbing experiences, I realized how much it mirrors challenges outside the gym. Every route is essentially a puzzle: you analyze, test, fail, and adapt. It taught me patience when progress feels slow, resilience when facing repeated failures, and the importance of incremental improvements. These lessons carry over directly into programming and other problem-solving domains, where persistence and creative strategies are just as vital.",
      date: "2025-08-21",
      readTime: "8 min read",
      category: "Exercise"
    },
    {
      id: 3,
      title: "My Goals for Fall 2025",
      excerpt: "Looking ahead to Fall 2025, I’ve set personal and professional goals that focus on growth, exploration, and balance.",
      content: "As I approach Fall 2025, I want to set clear intentions for what I hope to achieve. Academically, I aim to deepen my knowledge in computer science while balancing coursework with personal projects. Professionally, I hope to secure a meaningful co-op or internship that allows me to apply what I’ve learned. Personally, I want to stay active, build stronger routines, and dedicate more time to creative hobbies. Setting these goals helps keep me grounded and accountable.",
      date: "2025-08-28",
      readTime: "6 min read",
      category: "Personal"
    },
    {
      id: 4,
      title: "My First Co-op Term at the University of Waterloo",
      excerpt: "Reflecting on my first co-op experience at Waterloo: what I learned, the challenges I faced, and how it shaped my perspective.",
      content: "Starting my first co-op term was both exciting and intimidating. I had to quickly adapt to a professional environment, learn how to work in a team, and contribute meaningfully despite being new. I gained hands-on experience with industry tools and practices, improved my communication skills, and learned the value of asking good questions. This experience not only strengthened my technical foundation but also gave me confidence that I can grow into any challenge. It was a milestone in both my academic and professional journey.",
      date: "2025-08-29",
      readTime: "7 min read",
      category: "School"
    }
    
  ];

  const categories = ["All", "Programming", "Exercise", "Cooking", "Life", "Random", "School"];

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
    ? blogPosts.slice().reverse() 
    : blogPosts.filter(post => post.category === selectedCategory).reverse();

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
              <h3>Highlighted Posts</h3>
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
