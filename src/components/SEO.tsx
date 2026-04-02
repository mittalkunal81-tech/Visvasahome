import { useEffect } from 'react';
import { siteConfig } from '../config';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogType?: 'website' | 'article';
  ogImage?: string;
}

export function SEO({ 
  title, 
  description = siteConfig.description,
  canonical,
  ogType = 'website',
  ogImage
}: SEOProps) {
  
  useEffect(() => {
    // Set document title
    const pageTitle = title 
      ? `${title} | ${siteConfig.name}` 
      : `${siteConfig.name} - Professional Local Services`;
    document.title = pageTitle;
    
    // Update or create meta tags
    const updateMetaTag = (property: string, content: string, isName = false) => {
      const attribute = isName ? 'name' : 'property';
      let element = document.querySelector(`meta[${attribute}="${property}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, property);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    };
    
    // Basic meta tags
    updateMetaTag('description', description, true);
    updateMetaTag('keywords', siteConfig.keywords, true);
    
    // Open Graph tags
    updateMetaTag('og:title', pageTitle);
    updateMetaTag('og:description', description);
    updateMetaTag('og:type', ogType);
    updateMetaTag('og:url', canonical || siteConfig.url);
    updateMetaTag('og:site_name', siteConfig.name);
    
    if (ogImage) {
      updateMetaTag('og:image', ogImage);
    }
    
    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image', true);
    updateMetaTag('twitter:title', pageTitle, true);
    updateMetaTag('twitter:description', description, true);
    updateMetaTag('twitter:site', siteConfig.social.twitter, true);
    
    if (ogImage) {
      updateMetaTag('twitter:image', ogImage, true);
    }
    
    // Canonical URL
    let linkElement = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    
    if (!linkElement) {
      linkElement = document.createElement('link');
      linkElement.setAttribute('rel', 'canonical');
      document.head.appendChild(linkElement);
    }
    
    linkElement.setAttribute('href', canonical || siteConfig.url);
    
  }, [title, description, canonical, ogType, ogImage]);
  
  return null;
}
