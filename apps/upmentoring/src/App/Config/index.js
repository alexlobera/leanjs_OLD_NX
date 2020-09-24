export const API_BASE_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://api2.upmentoring.com'
    : 'http://localhost:4203/api';

export const VIDEO_API_BASE_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://video.upmentoring.com'
    : 'http://localhost:3000/video';

export const NX_KEY_API_GOOGLE_PLACES = process.env.NX_KEY_API_GOOGLE_PLACES;

export const LEANJS_API_BASE_URL =
  process.env.NX_LEANJS_API_BASE_URL || 'https://api.leanjs.com';
