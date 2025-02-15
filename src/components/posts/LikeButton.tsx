'use client';

import { useState } from 'react';

interface LikeButtonProps {
  postId: string;
  initialLikes: number;
}

export default function LikeButton({ postId, initialLikes }: LikeButtonProps) {
  const [likes, setLikes] = useState(initialLikes);

  const handleLike = () => {
    setLikes(likes + 1);
    // Ici, vous pourriez ajouter une logique pour sauvegarder le like dans une base de données
  };

  return (
    <button
      onClick={handleLike}
      className="flex items-center space-x-2 text-gray-600 hover:text-red-500 transition-colors"
    >
      <svg
        className="w-6 h-6"
        fill={likes > initialLikes ? "currentColor" : "none"}
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
      <span>{likes} likes</span>
    </button>
  );
}
