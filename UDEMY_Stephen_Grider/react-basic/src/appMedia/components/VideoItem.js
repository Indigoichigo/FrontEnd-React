import React from 'react';

const VedioItem = ({ video, handleVideoSelect }) => {
  return (
    <div onClick={() => handleVideoSelect(video)} className="video-item">
      <div className="video-img">
        <img src={video.snippet.thumbnails.medium.url} alt="titile vedio" />
      </div>
      <p className="video-title">{video.snippet.title}</p>
    </div>
  );
};
export default VedioItem;
