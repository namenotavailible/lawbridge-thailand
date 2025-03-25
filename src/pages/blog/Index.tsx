
import { useEffect } from "react";
import PageTransition from "@/components/layout/PageTransition";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionHeading from "@/components/ui/SectionHeading";
import { Calendar } from "lucide-react";

const BlogIndex = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Sample blog posts data
  const blogPosts = [
    {
      id: 1,
      title: "Understanding Thailand's New Foreign Business Act",
      excerpt: "Recent changes to the Foreign Business Act and what they mean for international entrepreneurs.",
      date: "May 15, 2023",
      category: "Business Law",
      imageUrl: "/placeholder.svg"
    },
    {
      id: 2,
      title: "Property Rights for Foreigners in Thailand: 2023 Update",
      excerpt: "A comprehensive overview of the current legal landscape for foreign property ownership.",
      date: "April 28, 2023",
      category: "Property Law",
      imageUrl: "/placeholder.svg"
    },
    {
      id: 3,
      title: "Thai Marriage Law: Requirements for International Couples",
      excerpt: "Step-by-step guide to legally register your marriage in Thailand with a Thai or foreign spouse.",
      date: "March 10, 2023",
      category: "Family Law",
      imageUrl: "/placeholder.svg"
    }
  ];

  return (
    <PageTransition>
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="pt-32 pb-16 md:pt-36 md:pb-20 bg-secondary/20">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl sm:text-5xl font-display font-medium mb-6 tracking-tight animate-slide-down">
                Legal Insights Blog
              </h1>
              
              <p className="text-xl text-muted-foreground animate-slide-down animation-delay-100">
                Stay informed about Thai legal matters with our regularly updated articles, news, and practical guides.
              </p>
            </div>
          </div>
        </section>
        
        {/* Blog Posts Section */}
        <section className="py-16">
          <div className="container px-4">
            <SectionHeading
              title="Latest Articles"
              subtitle="Expert insights and practical guidance on Thai legal matters"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
              {blogPosts.map((post) => (
                <article 
                  key={post.id} 
                  className="flex flex-col bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow border border-gray-100"
                >
                  <div className="h-48 bg-secondary/30">
                    <img 
                      src={post.imageUrl} 
                      alt={post.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center text-sm text-muted-foreground mb-2">
                      <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">
                        {post.category}
                      </span>
                      <span className="mx-2">•</span>
                      <div className="flex items-center">
                        <Calendar size={14} className="mr-1" />
                        {post.date}
                      </div>
                    </div>
                    
                    <h2 className="text-xl font-display font-medium mb-3 line-clamp-2">
                      {post.title}
                    </h2>
                    
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <a 
                      href="#" 
                      className="mt-auto text-primary font-medium hover:underline inline-flex items-center"
                    >
                      Read more
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-4 w-4 ml-1" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth="2" 
                          d="M14 5l7 7m0 0l-7 7m7-7H3" 
                        />
                      </svg>
                    </a>
                  </div>
                </article>
              ))}
            </div>
            
            {/* Newsletter Signup */}
            <div className="mt-16 bg-primary/5 rounded-xl p-8 max-w-4xl mx-auto">
              <div className="text-center">
                <h3 className="text-2xl font-display font-medium mb-4">
                  Stay Updated on Thai Legal Matters
                </h3>
                <p className="text-muted-foreground mb-6">
                  Subscribe to our newsletter to receive the latest legal insights and updates.
                </p>
                
                <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </PageTransition>
  );
};

export default BlogIndex;
