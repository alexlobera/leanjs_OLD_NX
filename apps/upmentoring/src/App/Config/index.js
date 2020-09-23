export const API_BASE_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://api2.upmentoring.com'
    : 'http://localhost:3000/api';

export const VIDEO_API_BASE_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://video.upmentoring.com'
    : 'http://localhost:3000/video';

export const KEY_API_GOOGLE_PLACES =
  process.env.REACT_APP_KEY_API_GOOGLE_PLACES;
