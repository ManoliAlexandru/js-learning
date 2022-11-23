const data = {
  Рыбы: {
    форель: {},
    лосось: {}
  },

  Деревья: {
    Огромные: {
      секвойя: {},
      дуб: {}
    },
    Цветковые: {
      яблоня: {},
      магнолия: {}
    }
  }
};

const createTree = (container, obj) => {
  container.append(createTreeDom(obj));
};

const createTreeDom = obj => {
  if (!Object.keys(obj).length)
    // если нет дочерних элементов
    return;

  const ul = document.createElement("ul");

  for (let key in obj) {
    const li = document.createElement("li");
    li.innerHTML = key;

    const childrenUl = createTreeDom(obj[key]);
    if (childrenUl) {
      li.append(childrenUl);
    }
    ul.append(li);
  }
  return ul;
};
const container = document.getElementById("container");
createTree(container, data);