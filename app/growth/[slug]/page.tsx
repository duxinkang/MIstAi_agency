'use client';

import React, { useState, useEffect, use } from 'react';
import growthPosts from '@/lib/growth-data';
import { GrowthPost as GrowthPostType } from '@/lib/types/growth.types';

const GrowthPost = ({ params }: { params: Promise<{ slug: string }> }) => {
  const resolvedParams = use(params);
  
  // Find the growth post by slug from our data layer (synchronous)
  const foundPost = growthPosts.find(post => post.slug === resolvedParams.slug);
  const [post, setPost] = useState<GrowthPostType | null>(foundPost || null);
  const [loading, setLoading] = useState(false);

  if (loading) {
    return (
      <div className="min-h-screen bg-background pt-20 pb-16 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
          <p className="mt-4 text-lg text-muted-foreground">加载中...</p>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-background pt-20 pb-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">文章未找到</h1>
          <p className="text-lg text-muted-foreground">抱歉，您查找的文章不存在。</p>
        </div>
      </div>
    );
  }

  // Function to convert markdown content to HTML with proper formatting
  const renderMarkdownContent = (content: string) => {
    let htmlContent = content;

    // Handle headings (first, before processing other elements to avoid conflicts)
    htmlContent = htmlContent.replace(/^#### (.*$)/gm, '<h4 class="text-lg font-medium mt-5 mb-2">$1</h4>');
    htmlContent = htmlContent.replace(/^### (.*$)/gm, '<h3 class="text-xl font-semibold mt-6 mb-3">$1</h3>');
    htmlContent = htmlContent.replace(/^## (.*$)/gm, '<h2 class="text-2xl font-bold mt-8 mb-4">$1</h2>');
    htmlContent = htmlContent.replace(/^# (.*$)/gm, '<h1 class="text-3xl font-bold mt-6 mb-4">$1</h1>');


    // Handle images - this should be done before links to avoid conflicts
    // Handle standard markdown images
    htmlContent = htmlContent.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img src="$2" alt="$1" class="my-4 rounded-lg max-w-full h-auto block" />');




    // Handle links
    htmlContent = htmlContent.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">$1</a>');

    // Handle bold and italic - improved version
    // First handle bold to avoid conflicts
    htmlContent = htmlContent.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    // Then handle italic, making sure we don't match list items or other special cases
    htmlContent = htmlContent.replace(/(?<!\s)\*([^*]+)\*(?!\s)/g, '<em>$1</em>');


    // Handle lists - improved version
    let lines = htmlContent.split('\n');
    let processedLines: string[] = [];
    let inList = false;
    let listType: 'ul' | 'ol' | null = null;
    let listItems: string[] = [];

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      
      // Check if this line is a list item
      const isUnorderedList = /^[*\-]\s/.test(line);
      const isOrderedList = /^\d+\.\s/.test(line);
      
      if (isUnorderedList || isOrderedList) {
        // Start of a new list or continuation of existing list
        if (!inList) {
          // Start a new list
          inList = true;
          listType = isUnorderedList ? 'ul' : 'ol';
          listItems = [];
        }
        
        // Add list item
        const content = line.replace(/^(?:[*\-]|\d+\.)\s/, '');
        listItems.push(`<li class="ml-6">${content}</li>`);
      } else {
        // Not a list item
        if (inList) {
          // End of current list
          if (listItems.length > 0 && listType) {
            const listTag = listType === 'ul' ? 'ul class="list-disc my-4 pl-6"' : 'ol class="list-decimal my-4 pl-6"';
            processedLines.push(`<${listTag}>`);
            processedLines.push(...listItems);
            processedLines.push(`</${listType}>`);
          }
          inList = false;
          listType = null;
          listItems = [];
        }
        
        // Add the non-list line
        processedLines.push(lines[i]);
      }
    }

    // Handle any remaining list items
    if (inList && listItems.length > 0 && listType) {
      const listTag = listType === 'ul' ? 'ul class="list-disc my-4 pl-6"' : 'ol class="list-decimal my-4 pl-6"';
      processedLines.push(`<${listTag}>`);
      processedLines.push(...listItems);
      processedLines.push(`</${listType}>`);
    }

    htmlContent = processedLines.join('\n');

    // Handle blockquotes
    const quoteLines = htmlContent.split('\n').map(line => {
      if (line.trim().startsWith('>')) {
        return line.replace(/^\s*>\s*/, '');
      }
      return line;
    }).join('\n');
    
    // Replace quote blocks
    htmlContent = quoteLines.replace(/((?:^[^\n]*\n?)+?(?=\n[^>\s]|$))/gm, (match) => {
      if (match.split('\n').some(line => line.trim().startsWith('>') || match.includes('**'))) {
        return `<blockquote class="border-l-4 border-gray-300 pl-4 italic my-4">${match}</blockquote>`;
      }
      return match;
    });

    // Handle paragraphs (for lines that don't start with special characters)
    htmlContent = htmlContent.split('\n').map(line => {
      const trimmedLine = line.trim();
      if (trimmedLine !== '' && 
          !line.startsWith('<') && 
          !line.startsWith('#') && 
          !line.startsWith('!') && 
          !trimmedLine.match(/^[*\-]\s/) && 
          !trimmedLine.match(/^\d+\.\s/)) {
        return `<p class="mb-4 leading-relaxed">${trimmedLine}</p>`;
      }
      return line;
    }).join('\n');


    return { __html: htmlContent };
  };

  return (
    <div className="min-h-screen bg-background pt-20 pb-16">
      <div className="container mx-auto px-6 max-w-4xl">
        <article className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-foreground mb-2">{post.title}</h1>
          <div className="prose-invert">
            <div dangerouslySetInnerHTML={renderMarkdownContent(post.content)} />
          </div>
        </article>
      </div>
    </div>
  );
};

export default GrowthPost;