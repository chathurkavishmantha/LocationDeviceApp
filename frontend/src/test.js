export const rm = (event) => {
  (event.target)
    .closest("tr")
    .remove();
};

export const add = () => {
  ("table").append(
    "<tr><td><input type=text /></td><td><button onClick='rm()'>remove</button></td></tr>"
  );
};
