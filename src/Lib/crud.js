import generalFetch from '../fetch';

const getData = async (path) => {
  const res = await generalFetch({
    path,
    method: 'GET'
  });

  return res;
};

const newData = async (path, body) => {
  const res = await generalFetch({
    path,
    method: 'POST',
    body
  });

  return res.data;
};

const deleteData = async (path, id) => {
  const res = await generalFetch({
    path: `${path}/${id}`,
    method: 'DELETE'
  });

  return res.data;
};

const updateData = async (path, id, newBody) => {
  const res = await generalFetch({
    path: `${path}/${id}`,
    method: 'PATCH',
    body: newBody
  });

  return res.data;
};

export { getData, updateData, deleteData, newData };
