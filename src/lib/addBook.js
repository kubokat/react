import { key, path, table } from '../data/config.js';

function addBook(data) {
  let url = path + table;

  return fetch(
    url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + key
    },
    body: JSON.stringify({
      'records': [{
        'fields': { ...data, pages: parseInt(data.pages) }
      }]
    })
  }
  ).then(response => response.json())
}

export default addBook;