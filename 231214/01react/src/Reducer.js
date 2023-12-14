//함수

const initialState = {
  count: 0,
  id: "",
  pw: "",
};
function Reducer(state = initialState, action) {
  console.log(action);
  const { type, payload } = action;
  switch (type) {
    case "INCREMENT":
      return { ...state, count: state.count + payload.num };
    case "DECREMENT":
      return { ...state, count: state.count - payload.num };
    case "LOGIN":
      return { ...state, id:state.id, pw:state.pw };
    default:
      return { ...state };
  }
  // if (action.type === "INCREMENT") {
  //   return { ...state, count: state.count + 1 };
  // }
  //반드시 reducer의 종결문이 있어야함
  // return { ...state };
}

export default Reducer;
