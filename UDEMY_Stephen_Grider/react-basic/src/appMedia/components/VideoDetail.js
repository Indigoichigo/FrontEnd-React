import React from 'react';

const VedioDetail = ({ video }) => {
  if (!video) {
    return <div className="video-detail">Loading...</div>;
  }

  const videoUrl = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div className="video-detail">
      <iframe
        className="video-style"
        src={videoUrl}
        title={video.snippet.title}
      />
      <p>{video.snippet.title}</p>
    </div>
  );
};
export default VedioDetail;
