const url = "https://jsonplaceholder.typicode.com/todos";
const id = 8;

const fetchAsyncTodos = async (url, id, method) => {
  try {
    const response = await fetch(`${url}`, {
      method: method,
    });
    const responseWithID = await fetch(`${url}/${id}`, {
      method: method,
    });
    const data = await response.json();
    const dataWithID = await responseWithID.json();
    console.log(data);
    console.log(dataWithID);
  } catch (error) {
    console.log(error);
  }
};

fetchAsyncTodos(url, id, "GET");
