import { fileStackKey, fileStackPath } from '../data/config.js';
import { uploadPath } from '../helpers/apiPaths'

function uploadFile(file) {
  return fetch(
    uploadPath(fileStackKey, fileStackPath), {
    method: 'POST',
    body: file
  })
    .then(response => response.json())
    .then((success) => { return success.url });
}

export default uploadFile;
