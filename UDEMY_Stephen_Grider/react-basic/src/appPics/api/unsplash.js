import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID 7caa97dde84e8563eb37fb75d9f31fcfce5cea63a119a9725df9ca54948f8796'
  }
});
