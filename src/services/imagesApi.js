const BASE_URL = 'https://pixabay.com/api/';
const KEY = '14611902-cba6e6d3c19977a925f1406cc';

export default function getImages(query = '') {
  return fetch(`${BASE_URL}?key=${KEY}&q=${query}&image_type=photo`).then(
    response => response.json()
  );
}
