'use client';

import React from 'react';
type Props = {
  error: Error;
  reset: () => void;
};

export default function Error({error, reset}: Props) {
  return (
    <div className="h-full flex flex-col items-center justify-center gap-4">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold">An error occurred</h1>
        <p className="text-sm text-zinc-500">{error.message}</p>
      </div>

      <button
        onClick={reset}
        className="border py-1 px-4 rounded-md hover:bg-zinc-200 cursor` transition-colors ">
        Try Again
      </button>
    </div>
  );
}
