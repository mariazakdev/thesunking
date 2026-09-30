import React, { useState } from 'react';

import './Videos.scss';

const videoList = [
  { id: 1, youtubeId: 'gK2kIXupmTU', title: 'Scene 23' },
  { id: 2, youtubeId: 'SwcmBCLCspI', title: 'Scene 26' },
  { id: 3, youtubeId: 'M4jrRqskJvc', title: 'Scene 6' },
];

const VideoPlayer = ({ youtubeId, title }) => {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="video-frame">
      {playing ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
          title={title}
          allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          className="video-thumb"
          onClick={() => setPlaying(true)}
          aria-label={`Play ${title}`}
          style={{
            backgroundImage: `url(https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg)`,
          }}
        >
          <span className="play-icon" />
        </button>
      )}
    </div>
  );
};

const Videos = () => {
  return (
    <div className="videos-container">
      <h3>Videos</h3>
      <div className="videos-content">
        {videoList.map((video) => (
          <div key={video.id} className="video-card">
            <h4>{video.title}</h4>
            <VideoPlayer youtubeId={video.youtubeId} title={video.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Videos;