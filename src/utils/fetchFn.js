function fetchFn(args = {}) {
  const {
    url,
    method = 'GET',
    body,
    type = 'application/json',
  } = args;

  if (!url) {
    return Promise.reject(
      new Error('Missing url'),
    );
  }

  return fetch(`/api/${url}`, {
    method,
    credentials: 'include',
    headers: {
      Accept: type,
      'Content-Type': type,
    },
    body: JSON.stringify(body),
  })
    .then(
      (response) => {
        if (response.ok) {
          if (type === 'application/json') {
            return response.json();
          }
          return response.text();
        }
        return Promise.reject(
          new Error(`${response.statusText} [${response.status}]`),
        );
      },
    );
}

export default fetchFn;
