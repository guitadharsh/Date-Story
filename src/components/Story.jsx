import React from 'react';
import SkeletonLoader from './SkeletonLoader';

/**
 * Story component displays a single story.
 * 
 * @component
 * @example
 * const storyText = "This is an interesting fact about today's date.";
 * return <Story story={storyText} />
 * 
 * @param {Object} props - Component props.
 * @param {string} props.story - The story text to be displayed.
 * @param {boolean} props.loading - A flag indicating if the data is still loading.
 * @returns {JSX.Element} A `div` containing the story text or skeleton loader.
 */
const Story = ({ story, loading }) => {
  return (
    <div className="stories">
      <p className="stories_story">
        {loading ? <SkeletonLoader /> : <span className="story-text">{story}</span>}
      </p>
    </div>
  );
};

export default Story;
