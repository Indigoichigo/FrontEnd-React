import axios from 'axios';

// api:youtube.developers.google.com
const KEY = 'AIzaSyACTdyYfYWN_pgv5xCibUW_VhDuqeraK-U';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: '5',
    key: KEY,
  },
});
