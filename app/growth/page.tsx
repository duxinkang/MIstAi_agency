import React from 'react';
import Link from 'next/link';
import growthPosts from '@/lib/growth-data';

const GrowthPage = () => {
  return (
    <div className="min-h-screen bg-background pt-20 pb-16">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="py-12 md:py-20">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-6">
            增长营销指南
          </h1>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            从A/B测试到内容营销，从广告制作到用户入职，这里有你需要的所有增长策略。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {growthPosts.map((post, index) => (
              <Link
                key={post.slug}
                href={`/growth/${post.slug}`}
                className="group bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 transform hover:-translate-y-1"
              >
                <h2 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h2>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {post.content.replace(/[#*`]/g, '').substring(0, 150)}...
                </p>
                <div className="flex items-center text-sm text-primary">
                  阅读更多
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrowthPage;
