const API_LINK = process.env.API_URL;
const Base_URL = process.env.NODE_ENV=='development' ? 'http://127.0.0.1:3000' : 'https://thehandover.com';
export { API_LINK, Base_URL }