import React, { Suspense } from 'react';


interface Props {
  fallback?: React.ElementType;
  children: React.ReactNode;
}

function CustomSuspense({ children }: Props) {
  return <Suspense>{children}</Suspense>;
}

export default CustomSuspense;
