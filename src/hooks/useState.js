let state = undefined;
const useState = (initialState) => {
  if (!state) {
    state = initialState;
  }

  const setState = (newState) => {
    state = newState;
  };
  return [state, setState];
};
