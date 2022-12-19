//PATCH используется для частичного изменения ресурса. 
//PUT создает новый ресурс или заменяет представление целевого ресурса, данными представленными в теле запроса.

const url = "https://merax.herokuapp.com/todo_list";
const id = 5

const fetchAsyncTodos = async (url, id, method) => {
  try {
    const response = await fetch(`${url}/${id}`, {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

fetchAsyncTodos(url, id, "DELETE");
