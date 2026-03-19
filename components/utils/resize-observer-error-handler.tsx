'use client';

import React from 'react';

export function ResizeObserverErrorHandler() {
  React.useEffect(() => {
    const resizeObserverErrHandler = (e: ErrorEvent) => {
      if (e.message.includes('ResizeObserver loop completed with undelivered notifications')) {
        e.stopPropagation();
      }
    };

    window.addEventListener('error', resizeObserverErrHandler);
    return () => {
      window.removeEventListener('error', resizeObserverErrHandler);
    };
  }, []);

  return null;
}
