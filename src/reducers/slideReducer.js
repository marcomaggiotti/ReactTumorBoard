export default (state = {}, action) => {
  switch (action.type) {
    case "slideChange":
      return {
        ...state,
        currentSlide: action.payload
      };
    default:
      return state;
  }
};
