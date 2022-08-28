import counter from "../components/counter";

export const render = () => {
  const app = document.querySelector("#app");
  app.innerHTML = `
  <div>
    <div>${counter()}</div>
  </div>
`;
};
