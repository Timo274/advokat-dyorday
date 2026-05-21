'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight, Home } from 'lucide-react';
import { SERVICES } from '@/lib/constants';

interface BreadcrumbsProps {
  className?: string;
  light?: boolean;
}

export default function Breadcrumbs({ className = '', light = false }: BreadcrumbsProps) {
  const pathname = usePathname();
  
  if (pathname === '/') return null;

  const pathSegments = pathname.split('/').filter(Boolean);
  
  const getLabel = (segment: string, index: number) => {
    // Check if it's a service slug
    if (pathSegments[0] === 'poslugy' && index === 1) {
      const service = SERVICES.find(s => s.slug === segment);
      if (service) return service.shortTitle;
    }
    
    // Map of static routes to labels
    const labels: Record<string, string> = {
      'pro-advokata': 'Про адвоката',
      'poslugy': 'Послуги',
      'keysy': 'Кейси',
      'kontakty': 'Контакти',
      'blog': 'Блог',
      'polityka-konfidentsiynosti': 'Політика конфіденційності',
    };

    return labels[segment] || segment;
  };

  const textColorClass = light ? 'text-white/70' : 'text-text-secondary';
  const hoverColorClass = light ? 'hover:text-white' : 'hover:text-primary';
  const activeColorClass = light ? 'text-white font-semibold' : 'text-primary-dark font-semibold';

  return (
    <nav aria-label="Breadcrumb" className={`flex items-center text-sm ${className}`}>
      <ol className="flex items-center space-x-2">
        <li>
          <Link href="/" className={`${textColorClass} ${hoverColorClass} transition-colors flex items-center`}>
            <Home className="w-3.5 h-3.5" />
            <span className="sr-only">Головна</span>
          </Link>
        </li>
        
        {pathSegments.map((segment, index) => {
          const href = `/${pathSegments.slice(0, index + 1).join('/')}`;
          const isLast = index === pathSegments.length - 1;
          const label = getLabel(segment, index);

          return (
            <li key={segment} className="flex items-center">
              <ChevronRight className={`w-3.5 h-3.5 mx-1 ${textColorClass}`} />
              {isLast ? (
                <span className={activeColorClass} aria-current="page">
                  {label}
                </span>
              ) : (
                <Link href={href} className={`${textColorClass} ${hoverColorClass} transition-colors`}>
                  {label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
