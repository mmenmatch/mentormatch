import React from 'react';

export const Container = ({ children }: any) => {
  return (
    <div className="max-w-7xl mx-auto px-8 py-16 flex item-center justify-center">
      {children}
    </div>
  )
}
