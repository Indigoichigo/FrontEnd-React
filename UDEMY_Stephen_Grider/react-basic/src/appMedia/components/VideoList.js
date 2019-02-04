import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, handleVideoSelect }) => {
  const renderVideoList = videos.map(video => (
    <VideoItem
      key={video.id.videoId}
      video={video}
      handleVideoSelect={handleVideoSelect}
    />
  ));

  return <div className="video-list">{renderVideoList}</div>;
};

export default VideoList;
