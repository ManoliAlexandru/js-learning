const url = "https://merax.herokuapp.com/todo_list";
const id = 5
const data = {
  title: "88gnjhgfn88888",
  body: "688888",
  execution_time: "p---sdv--v-sd-vsdv"
};

const fetchAsyncTodos = async (url, id, method) => {
  try {
    const response = await fetch(`${url}/${id}`, {
      method: method,
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

fetchAsyncTodos(url, id, "PUT");
