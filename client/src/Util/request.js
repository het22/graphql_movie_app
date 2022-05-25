async function request(query) {
  return fetch('http://localhost:4000', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify({ query })
  })
    .then(r => r.json())
    .then(({ data }) => data);
}

export default request;
