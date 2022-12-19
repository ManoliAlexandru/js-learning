// npm run server
const requestURL = "http://localhost:3000/posts";

const fetchAsyncPosts = async (url, method) => {
  const list = document.querySelector('.list');
  try {
    const response = await fetch(`${url}`, {
      method: method
    });
    const data = await response.json();
    console.log(data)
    list.innerHTML = JSON.stringify(data)
  } catch (err) {
    console.error(err);
  }
};


fetchAsyncPosts(requestURL, 'GET')