/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
const helpHttp = () => {
  const customFetch = (endPoint, options) => {
    const defaultHeader = {
      accept: 'application/json'
    };
    const controller = new AbortController();
    options.signal = controller.signal;

    options.method = options.method || 'GET';
    options.headers = { ...defaultHeader, ...options.headers };
    options.body = JSON.stringify(options.body) || false;
    if (!options.body) delete options.body;

    console.log({ options });
    // console.log(options);
    setTimeout(() => controller.abort(), 4000);

    return fetch(endPoint, options)
      .then((res) =>
        res.ok
          ? res.json()
          : Promise.reject({
              err: true,
              status: res.status || '00',
              statusTex: res.statusTex || 'Ocurrió un error'
            })
      )
      .catch((err) => err);
  };

  const get = (url, options = {}) => customFetch(url, options);
  const post = (url, options = {}) => {
    options.method = 'POST';
    return customFetch(url, options);
  };
  const put = (url, options = {}) => {
    options.method = 'PUT';
    return customFetch(url, options);
  };
  const del = (url, options = {}) => {
    options.method = 'DEL';
    return customFetch(url, options);
  };

  return {
    get,
    post,
    put,
    del
  };
};

export default helpHttp;
