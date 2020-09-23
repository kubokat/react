import { fileStackKey, fileStackPath } from '../data/config.js';

function uploadFile(file) {

  const url = fileStackPath + '?key=' + fileStackKey

  return fetch(
    url, {
    method: 'POST',
    body: file
  })
    .then(response => response.json())
    .then((success) => { return success.url });
}

export default uploadFile;
