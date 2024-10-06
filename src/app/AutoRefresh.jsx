"use client";

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

const AutoRefresh = () => {
  const searchParams = useSearchParams();

  useEffect(() => {
    const refresh = searchParams.get('refresh');
    if (refresh === 'true') {
      // Remove the refresh parameter from the URL
      const newUrl = window.location.pathname;
      window.history.replaceState({}, '', newUrl);
      
      // Reload the page
      window.location.reload();
    }
  }, [searchParams]);

  return null; // This component doesn't render anything
};

export default AutoRefresh;