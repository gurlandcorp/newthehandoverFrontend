const API_LINK = 'https://handoverapi.herokuapp.com';
const Base_URL = process.env.NODE_ENV=='development' ? 'http://127.0.0.1:3000' : 'http://127.0.0.1:3000';
export { API_LINK, Base_URL }