var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const urlPosts = "https://jsonplaceholder.typicode.com/posts";
const urlUsers = "https://jsonplaceholder.typicode.com/users";
const wrapper = document.querySelector(".wrapper");
const getUsersName = (url) => __awaiter(this, void 0, void 0, function* () {
    try {
        const resUser = yield fetch(url);
        return yield resUser.json();
    }
    catch (error) {
        console.log(error);
    }
});
const getData = (url) => __awaiter(this, void 0, void 0, function* () {
    try {
        const res = yield fetch(url);
        return yield res.json();
    }
    catch (error) {
        console.log(error);
    }
});
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
        document.querySelector(`#userId-${userId}`).append(element);
    });
};
const processData = () => __awaiter(this, void 0, void 0, function* () {
    const usersName = yield getUsersName(urlUsers);
    createExpansionPanel(usersName);
    const posts = yield getData(urlPosts);
    createCard(posts);
});
processData();
//# sourceMappingURL=app.js.map