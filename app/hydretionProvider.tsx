import React from 'react'
import { Client, HydrationProvider } from 'react-hydration-provider';

export default function HyProvider({ children }: { children: React.ReactNode }) {
  return (
    <HydrationProvider>
      <Client>{children}</Client>
    </HydrationProvider>
  );
}
  
