import React from 'react';

/**
 * SkeletonLoader component to show a smooth loading effect.
 * 
 * @component
 * @example
 * return <SkeletonLoader />
 * @returns {JSX.Element} A skeleton loader with a waving glimmer effect.
 */
const SkeletonLoader = () => {
  return (
    <div className="skeleton-loader">
      <div className="skeleton-text line"></div>
      <div className="skeleton-text line large"></div>
      <div className="skeleton-text line"></div>
    </div>
  );
};

export default SkeletonLoader;
