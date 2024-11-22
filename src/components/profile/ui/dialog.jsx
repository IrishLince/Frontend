import React from 'react';

export function Dialog({ children, open, onOpenChange }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full mx-4">
        {children}
      </div>
    </div>
  );
}

export function DialogContent({ children, className = '' }) {
  return <div className={`p-6 ${className}`}>{children}</div>;
}

export function DialogHeader({ children }) {
  return <div className="mb-4">{children}</div>;
}

export function DialogTitle({ children }) {
  return <h2 className="text-lg font-semibold">{children}</h2>;
}