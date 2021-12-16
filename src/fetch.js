const generalFetch = async ({ path, method, body }) => {
  const res = await fetch(`http://localhost:5000/${path}`, {
    method,
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }
  });
  // console.log('res: ', res);
  return res.json();
};

export default generalFetch;
