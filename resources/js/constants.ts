export const MAX_IMAGE_SIZE = 1000; // in kilobytes
export const MAX_VIDEO_SIZE = 6000; // in kilobytes
export const MAX_MUSIC_SIZE = 5000; // in kilobytes

export const ACCEPTED_IMAGE_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
export const ACCEPTED_VIDEO_TYPES = [
    'video/mp4',
    'video/webm',
    'video/ogg',
    'video/x-msvideo', // avi
    'video/quicktime', // mov
    'video/mpeg',
    'video/3gpp',
    'video/3gpp2',
    'video/x-ms-wmv',
    'video/x-flv',
    'video/x-matroska', // mkv];
];
export const ACCEPTED_MUSIC_TYPES = [
    'audio/mpeg', // mp3
    'audio/wav',
    'audio/ogg',
    'audio/webm',
    'audio/aac',
    'audio/mp4', // m4a
    'audio/flac',
    'audio/amr',
    'audio/x-aiff',
    'audio/midi',
];

export const BASE_URL = import.meta.env.MODE == 'production' ? 'http://localhost:8000' : 'http://localhost:8000';
