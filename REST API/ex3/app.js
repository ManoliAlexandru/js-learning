//Indicates that the request body format is JSON

const url = "https://merax.herokuapp.com/todo_list";
const data = {
  title: "888888",
  body: "64543555",
  execution_time: "343434",
};

const fetchAsyncTodos = async (url, method) => {
  try {
    const response = await fetch(`${url}`, {
      method: method,
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

fetchAsyncTodos(url, "POST");
