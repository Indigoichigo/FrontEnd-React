import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ song }) => {
  if (!song) {
    return <div>Select a song</div>;
  }

  return (
    <div>
      <h3>Details for:</h3>
      <p>Title: {song.title}</p>
      <p>Duration: {song.duration}mins</p>
    </div>
  );
};

const mapStateToProp = state => {
  console.log(state);
  return {
    song: state.selectedSongReducer,
  };
};

export default connect(mapStateToProp)(SongDetail);
