import React from 'react';
import { NavLink } from 'react-router-dom';
import { useResultContext } from '../contexts/ResultContextProvider';

const links = [
  { url: '/search', text: '🌍 All' },
  { url: '/news', text: '📰 News' },
  { url: '/images', text: '📷 Images' },
  { url: '/videos', text: '🎥 videos' },
];

export const Links = () => {
  const { isLoading } = useResultContext();

  return (
    <div className="flex sm:justify-around justify-between items-center mt-4">
      {!isLoading &&
        links.map(({ url, text }) => (
          <NavLink to={url} className="m-2 mb-0" activeClassName="text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 pb-2">
            {text}
          </NavLink>
        ))}
    </div>
  );
};
