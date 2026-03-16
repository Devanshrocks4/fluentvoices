import React from 'react';

interface ErrorPageProps {
  error?: Error;
  statusCode?: number;
}

export default function ErrorPage({ error, statusCode }: ErrorPageProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-primary mb-4">
          {statusCode || 500}
        </h1>
        <h2 className="text-2xl font-semibold mb-4">Something went wrong</h2>
        <p className="text-foreground/70 mb-8">
          {error?.message || 'An unexpected error occurred'}
        </p>
        <button
          onClick={() => window.location.href = '/'}
          className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
        >
          Go Home
        </button>
      </div>
    </div>
  );
}
