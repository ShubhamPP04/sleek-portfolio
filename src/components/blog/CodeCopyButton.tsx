'use client';

import React, { useState } from 'react';
import Copy from '../svgs/Copy';
import Copied from '../svgs/Copied';
import { Button } from '@/components/ui/button';

interface CodeCopyButtonProps {
  code: string;
  className?: string;
}

export const CodeCopyButton: React.FC<CodeCopyButtonProps> = ({ 
  code, 
  className = '' 
}) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  return (
    <Button
      onClick={handleCopy}
      variant="outline"
      size="sm"
      className={`flex items-center gap-2 ${className}`}
    >
      {isCopied ? (
        <>
          <Copied className="h-4 w-4" />
          Copied!
        </>
      ) : (
        <>
          <Copy className="h-4 w-4" />
          Copy
        </>
      )}
    </Button>
  );
};
