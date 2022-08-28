import { render } from "../router/render";

let state = undefined;
const useState = (initialState) => {
  if (state === undefined) {
    state = initialState;
  }

  const setState = (newState) => {
    state = newState;
    render();
  };
  return [state, setState];
};

export default useState;
