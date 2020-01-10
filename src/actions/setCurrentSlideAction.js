const setCurrentSlide = (payload) => {
  return {
    type: "slideChange",
    payload
  }
}
export default setCurrentSlideAction;
