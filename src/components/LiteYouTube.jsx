import { useState } from 'react';

/**
 * LiteYouTube - A performance-optimised YouTube embed.
 * Shows a thumbnail image and only loads the heavy YouTube iframe when clicked.
 * This eliminates ~500KB of YouTube scripts from the initial page load per embed.
 */
export default function LiteYouTube({ videoId, title }) {
  const [activated, setActivated] = useState(false);

  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;

  if (activated) {
    return (
      <iframe
        className="w-full h-full border-none"
        src={embedUrl}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    );
  }

  return (
    <button
      onClick={() => setActivated(true)}
      className="w-full h-full relative group cursor-pointer bg-black border-none p-0 block"
      aria-label={`Play ${title}`}
    >
      {/* Thumbnail */}
      <img
        src={thumbnailUrl}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        loading="lazy"
        decoding="async"
        onError={(e) => { e.target.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`; }}
      />

      {/* Dark overlay on hover */}
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />

      {/* Play Button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-red-600 group-hover:bg-red-500 flex items-center justify-center shadow-2xl transition-all duration-300 group-hover:scale-110">
          <svg
            className="w-6 h-6 md:w-8 md:h-8 text-white ml-1"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>

      {/* Video Title */}
      <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-black/60 to-transparent">
        <p className="text-white text-xs font-semibold truncate text-left">{title}</p>
      </div>
    </button>
  );
}
