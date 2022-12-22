const urlPosts: string = "https://jsonplaceholder.typicode.com/posts";
const urlUsers: string = "https://jsonplaceholder.typicode.com/users";
const wrapper = document.querySelector(".wrapper")!;

const getUsersName = async (url: string) => {
  try {
    const resUser = await fetch(url);
    return await resUser.json();
  } catch (error) {
    console.log(error);
  }
};

const getData = async (url: string) => {
  try {
    const res = await fetch(url);
    return await res.json();
  } catch (error) {
    console.log(error);
  }
};

const createExpansionPanel = (data) => {
  data.forEach(({ name, id }) => {
    const panel = document.createElement("details");
    panel.innerHTML = `
    <summary>
      <h1>${name}</h1>
    </summary>
    <div class="container" id="userId-${id}"></div>
    `;
    wrapper.append(panel);
  });
};

const createCard = (data) => {
  data.forEach(({ userId, id, title, body }) => {
    const element = document.createElement("div");
    element.classList.add("card");
    element.innerHTML = `
    <div class='box'>
      <div class='content'>
      <h1>${userId}</h1>
      <h2>${id}</h2>
      <p>${body}</p>
      </div>
    </div>
    `;
    document.querySelector(`#userId-${userId}`)!.append(element);
  });
};

const processData = async () => {
  const usersName = await getUsersName(urlUsers);
  createExpansionPanel(usersName);

  const posts = await getData(urlPosts);
  createCard(posts);
};

processData();
