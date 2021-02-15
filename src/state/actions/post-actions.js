const apiurl = 'https://jsonplaceholder.typicode.com/posts';

export const fetchApi = () => {
  return fetch(apiurl)
    .then((data) => data.json())
    .then((resp) => {
      return resp;
    });
};
