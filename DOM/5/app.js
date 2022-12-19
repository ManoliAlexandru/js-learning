const showNotification = (params) => {
  const defaultConfig = {
    top: 0,
    right: 0,
    className: "welcome",
    html: "Hi",
    timeout: 0,
  };
  const config = {
    ...defaultConfig,
    ...params,
  };

  const notification = document.createElement("div");
  notification.className = "notification";

  notification.classList.add(config.className);
  notification.style.top = `${config.top}px`;
  notification.style.right = `${config.right}px`;
  notification.innerHTML = config.html;

  document.body.append(notification);

  if (config.timeout) {
    setTimeout(() => notification.remove(), config.timeout);
  }
};

let i = 1;
setInterval(() => {
  showNotification({
    bottom: 0,
    right: 0,
    html: `I'm JavaScript ${i++}`,
    className: "bye",
    timeout: 1500,
  });
}, 2000);
