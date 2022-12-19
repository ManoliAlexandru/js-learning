const urlPosts = "https://jsonplaceholder.typicode.com/posts";
const urlUsers = "https://jsonplaceholder.typicode.com/users";
const wrapper = document.querySelector(".wrapper");

const getUsersName = async (url) => {
  try {
    const resUser = await fetch(url);
    return await resUser.json();
  } catch (error) {
    console.log(error);
  }
};

getUsersName(urlUsers).then((data) => {
  createExpansionPanel(data);
});

const getData = async (url) => {
  try {
    const res = await fetch(url);
    return await res.json();
  } catch (error) {
    console.log(error);
  }
};

getData(urlPosts).then((data) => {
  createCard(data);
});

const createExpansionPanel = (data) => {
  data.forEach(({ name }) => {
    const panel = document.createElement("details");
    panel.innerHTML = `
    <summary>
      <h1>${name}</h1>
    </summary>
    <div class="container"></div>
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
    document.querySelector(".container").append(element);
  });
};
