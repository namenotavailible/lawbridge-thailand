
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import PageTransition from "@/components/layout/PageTransition";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionHeading from "@/components/ui/SectionHeading";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowLeft, Tag, Clock } from "lucide-react";

// Blog data store - in a real app this would come from an API or CMS
const blogPostsData = [
  {
    id: 1,
    title: "Understanding Thailand's New Foreign Business Act",
    excerpt: "Recent changes to the Foreign Business Act and what they mean for international entrepreneurs.",
    content: `
      <h2>Key Changes to the Foreign Business Act</h2>
      <p>Thailand has recently updated its Foreign Business Act (FBA) to accommodate the changing global business landscape while protecting local interests. The FBA regulates foreign business activities in Thailand, and understanding these regulations is crucial for any international entrepreneur or business looking to establish operations in the country.</p>
      
      <p>Under Thailand's legal framework, a company is considered "foreign" when non-Thai nationals hold at least 50% of its shares. Foreign companies face restrictions in certain business categories unless they obtain special permission through a Foreign Business License.</p>
      
      <h3>Recent Amendments and Their Impact</h3>
      <p>The most significant recent amendments to the FBA include:</p>
      <ul>
        <li>Streamlined application processes for certain business categories</li>
        <li>Updated definitions of restricted businesses to align with modern economic activities</li>
        <li>New provisions for technology companies and digital services</li>
        <li>Enhanced penalties for using Thai nominees to circumvent foreign ownership restrictions</li>
      </ul>
      
      <h3>Compliance Requirements</h3>
      <p>Foreign businesses must be aware that non-compliance with the FBA can result in significant penalties, including:</p>
      <ul>
        <li>Fines of up to 1,000,000 Baht</li>
        <li>Imprisonment of up to 3 years for responsible parties</li>
        <li>Potential company dissolution</li>
      </ul>
      
      <h2>Permitted Activities Without FBA Restrictions</h2>
      <p>Despite the restrictions, there are various business activities that foreign companies can engage in without obtaining an FBA license, including:</p>
      <ul>
        <li>Export-oriented businesses</li>
        <li>Certain types of manufacturing</li>
        <li>International consulting services (when not primarily serving the Thai market)</li>
        <li>Regional headquarters operations</li>
      </ul>
      
      <h2>Strategic Recommendations</h2>
      <p>For foreign entrepreneurs looking to navigate Thailand's business landscape, consider these strategies:</p>
      <ul>
        <li>Partner with a Thai company through a joint venture arrangement</li>
        <li>Apply for Board of Investment (BOI) promotion, which can include foreign ownership exemptions</li>
        <li>Utilize the Treaty of Amity (for US citizens) which provides special privileges</li>
        <li>Structure your business to focus on non-restricted activities</li>
      </ul>
      
      <p><strong>Disclaimer:</strong> The information provided in this article is for general informational purposes only and does not constitute legal advice. For specific guidance related to your business situation, please consult with a qualified Thai legal professional.</p>
    `,
    date: "May 15, 2023",
    category: "Business Law",
    imageUrl: "/placeholder.svg",
    author: "Dr. Somchai Sukjai",
    readTime: "8 min read"
  },
  {
    id: 2,
    title: "Property Rights for Foreigners in Thailand: 2023 Update",
    excerpt: "A comprehensive overview of the current legal landscape for foreign property ownership.",
    content: `
      <h2>Foreign Property Ownership in Thailand: Legal Framework</h2>
      <p>Thailand's property laws place significant restrictions on foreign ownership of land, though there are various legal structures and exceptions that allow foreigners to effectively invest in Thai real estate. This article provides an up-to-date overview of the legal landscape as of 2023.</p>
      
      <h3>Land Ownership Restrictions</h3>
      <p>Under the Land Code of Thailand, foreigners are generally prohibited from owning land unless they receive special permission from the Ministry of Interior or qualify under specific investment promotion schemes. The primary restrictions include:</p>
      <ul>
        <li>Prohibition on direct ownership of land by foreign individuals</li>
        <li>Limitations on land ownership by companies with majority foreign shareholding</li>
        <li>Restrictions on using Thai nominees to circumvent foreign ownership rules</li>
      </ul>
      
      <h3>Condominium Ownership</h3>
      <p>The Condominium Act provides the most straightforward path to property ownership for foreigners in Thailand:</p>
      <ul>
        <li>Foreigners can legally own up to 49% of the total unit space in any condominium building</li>
        <li>Foreign ownership requires proof that the funds used to purchase the condominium originated from outside Thailand</li>
        <li>The foreign buyer must provide a Foreign Exchange Transaction Form (FET) for amounts over $50,000 USD</li>
        <li>Ownership is registered directly in the foreigner's name at the local Land Office</li>
      </ul>
      
      <h3>Long-term Leasehold Structures</h3>
      <p>For those interested in land or villa ownership, long-term leaseholds offer a practical alternative:</p>
      <ul>
        <li>Leases can be registered for a maximum of 30 years</li>
        <li>Additional 30-year renewal options can be contractually agreed upon</li>
        <li>Leasehold rights can be inherited and transferred</li>
        <li>Proper contract structuring is essential to protect the foreign lessee's interests</li>
      </ul>
      
      <h3>Company Structures for Property Ownership</h3>
      <p>Some foreigners establish Thai Limited Companies to own property, though this approach requires careful legal consideration:</p>
      <ul>
        <li>The company must have legitimate business operations beyond property holding</li>
        <li>Thai shareholders must have genuine financial participation</li>
        <li>Using Thai nominees solely to circumvent foreign ownership restrictions is illegal and can result in severe penalties</li>
      </ul>
      
      <h2>Recent Legal Developments</h2>
      <p>Thailand has recently implemented stricter enforcement against nominee structures, with penalties including:</p>
      <ul>
        <li>Fines of up to 100,000 Baht for both the foreign owner and Thai nominees</li>
        <li>Imprisonment for up to 2 years</li>
        <li>Forced sale of the property</li>
      </ul>
      
      <p><strong>Disclaimer:</strong> The information provided in this article is for general informational purposes only and does not constitute legal advice. For specific guidance related to property investment, please consult with a qualified Thai legal professional.</p>
    `,
    date: "April 28, 2023",
    category: "Property Law",
    imageUrl: "/placeholder.svg",
    author: "Khun Pracha Nititham",
    readTime: "10 min read"
  },
  {
    id: 3,
    title: "Thai Marriage Law: Requirements for International Couples",
    excerpt: "Step-by-step guide to legally register your marriage in Thailand with a Thai or foreign spouse.",
    content: `
      <h2>Marriage Registration in Thailand: Legal Requirements</h2>
      <p>Marriage in Thailand is governed by the Civil and Commercial Code, with specific procedures for both Thai nationals and foreigners. This guide outlines the legal requirements and steps for international couples seeking to register their marriage in Thailand.</p>
      
      <h3>Legal Eligibility Requirements</h3>
      <p>Before proceeding with marriage registration, both parties must meet these basic requirements:</p>
      <ul>
        <li>Both individuals must be at least 17 years of age</li>
        <li>Both must be mentally competent</li>
        <li>Neither party can be currently married to another person</li>
        <li>The parties cannot be blood relatives prohibited from marriage under Thai law</li>
        <li>Same-sex marriages are not legally recognized in Thailand as of 2023 (though civil partnership legislation is under consideration)</li>
      </ul>
      
      <h3>Documentation Requirements for Foreigners</h3>
      <p>Foreign nationals must prepare the following documents:</p>
      <ul>
        <li>Valid passport</li>
        <li>Affirmation of Freedom to Marry issued by their embassy in Thailand</li>
        <li>Divorce or death certificates (if previously married)</li>
        <li>Certified translations of all non-Thai documents</li>
        <li>In some cases, additional documentation from their home country</li>
      </ul>
      
      <h3>The Legal Registration Process</h3>
      <p>The marriage registration procedure involves several steps:</p>
      <ol>
        <li>Obtain an Affirmation of Freedom to Marry from your embassy</li>
        <li>Have the affirmation translated into Thai by a certified translator</li>
        <li>Have the translation certified by the Department of Consular Affairs at the Ministry of Foreign Affairs</li>
        <li>Register the marriage at any District Office (Amphur) in Thailand</li>
        <li>Both parties must be present with two witnesses</li>
        <li>Pay the registration fee (approximately 200 Baht)</li>
      </ol>
      
      <h3>Legal Implications of Marriage in Thailand</h3>
      <p>Marriage in Thailand creates various legal rights and obligations:</p>
      <ul>
        <li>Property acquired during marriage becomes matrimonial property, jointly owned by both spouses</li>
        <li>Each spouse has inheritance rights to the other's estate</li>
        <li>Marriage does not automatically grant Thai citizenship to a foreign spouse</li>
        <li>Foreign spouses may qualify for a marriage visa to reside in Thailand</li>
      </ul>
      
      <h3>Prenuptial Agreements</h3>
      <p>International couples often consider prenuptial agreements, which must be:</p>
      <ul>
        <li>Executed before the marriage registration</li>
        <li>Registered together with the marriage at the District Office</li>
        <li>Drafted in compliance with Thai law to be enforceable</li>
        <li>Written in Thai with certified translations for the foreign spouse</li>
      </ul>
      
      <p><strong>Disclaimer:</strong> The information provided in this article is for general informational purposes only and does not constitute legal advice. For specific guidance related to your personal situation, please consult with a qualified Thai legal professional.</p>
    `,
    date: "March 10, 2023",
    category: "Family Law",
    imageUrl: "/placeholder.svg",
    author: "Khun Malee Kitisak",
    readTime: "7 min read"
  }
];

const BlogPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState<any>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Find the blog post with the matching id
    if (id) {
      const blogPost = blogPostsData.find(post => post.id === parseInt(id));
      setPost(blogPost);
    }
  }, [id]);

  if (!post) {
    return (
      <PageTransition>
        <Navbar />
        <main className="flex-1 pt-32 pb-16">
          <div className="container px-4">
            <div className="text-center py-16">
              <h1 className="text-2xl font-medium mb-4">Blog post not found</h1>
              <Button asChild>
                <Link to="/blog">Return to Blog</Link>
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="pt-32 pb-8 md:pt-36 md:pb-12 bg-secondary/20">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto">
              <Link 
                to="/blog" 
                className="inline-flex items-center text-primary hover:underline mb-6"
              >
                <ArrowLeft size={16} className="mr-2" />
                Back to all articles
              </Link>
              
              <h1 className="text-3xl sm:text-4xl font-display font-medium mb-6 tracking-tight animate-slide-down">
                {post.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground animate-slide-down animation-delay-100">
                <div className="flex items-center">
                  <Calendar size={14} className="mr-1" />
                  {post.date}
                </div>
                <span className="bg-primary/10 text-primary px-2 py-1 rounded-full flex items-center">
                  <Tag size={14} className="mr-1" />
                  {post.category}
                </span>
                <div className="flex items-center">
                  <Clock size={14} className="mr-1" />
                  {post.readTime}
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Blog Content */}
        <section className="py-12">
          <div className="container px-4">
            <div className="grid md:grid-cols-12 gap-8 max-w-5xl mx-auto">
              <div className="md:col-span-8">
                <div className="prose prose-lg max-w-none">
                  {/* Featured Image */}
                  <div className="aspect-video bg-secondary/30 rounded-lg overflow-hidden mb-8">
                    <img 
                      src={post.imageUrl} 
                      alt={post.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Author info */}
                  <div className="flex items-center mb-8 not-prose">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-medium mr-4">
                      {post.author.split(' ').map(name => name[0]).join('')}
                    </div>
                    <div>
                      <div className="font-medium">{post.author}</div>
                      <div className="text-sm text-muted-foreground">Legal Expert</div>
                    </div>
                  </div>
                  
                  {/* Blog content */}
                  <div dangerouslySetInnerHTML={{ __html: post.content }} />
                </div>
                
                {/* Bottom navigation */}
                <div className="border-t border-border mt-12 pt-8">
                  <Button asChild>
                    <Link to="/blog" className="flex items-center">
                      <ArrowLeft size={16} className="mr-2" />
                      Back to all articles
                    </Link>
                  </Button>
                </div>
              </div>
              
              <div className="md:col-span-4">
                <div className="sticky top-24">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-medium mb-4">Legal Disclaimer</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        The information provided in this article is for general informational purposes only and does not constitute legal advice.
                      </p>
                      <Button asChild variant="outline" className="w-full">
                        <Link to="/legal-disclaimer">Read Full Disclaimer</Link>
                      </Button>
                    </CardContent>
                  </Card>
                  
                  <Card className="mt-6">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-medium mb-4">Need Legal Assistance?</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Our team of legal experts can provide professional guidance on Thai legal matters.
                      </p>
                      <Button className="w-full">Contact Us</Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Related Articles */}
        <section className="py-12 bg-secondary/10">
          <div className="container px-4">
            <SectionHeading
              title="Related Articles"
              subtitle="More insights on Thai legal matters"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
              {blogPostsData
                .filter(relatedPost => relatedPost.id !== post.id)
                .slice(0, 3)
                .map((relatedPost) => (
                  <article 
                    key={relatedPost.id} 
                    className="flex flex-col bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow border border-gray-100"
                  >
                    <div className="h-48 bg-secondary/30">
                      <img 
                        src={relatedPost.imageUrl} 
                        alt={relatedPost.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex items-center text-sm text-muted-foreground mb-2">
                        <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">
                          {relatedPost.category}
                        </span>
                        <span className="mx-2">•</span>
                        <div className="flex items-center">
                          <Calendar size={14} className="mr-1" />
                          {relatedPost.date}
                        </div>
                      </div>
                      
                      <h2 className="text-xl font-display font-medium mb-3 line-clamp-2">
                        {relatedPost.title}
                      </h2>
                      
                      <p className="text-muted-foreground mb-4 line-clamp-3">
                        {relatedPost.excerpt}
                      </p>
                      
                      <Link 
                        to={`/blog/${relatedPost.id}`}
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
                      </Link>
                    </div>
                  </article>
                ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </PageTransition>
  );
};

export default BlogPost;
