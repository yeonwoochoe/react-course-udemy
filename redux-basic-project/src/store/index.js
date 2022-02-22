import { createStore } from "redux";

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }

  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }

  return state;
}; // 순수함수만 가능 : 입력와 값이 같다면 항상 같은 출력을 생산

const store = createStore(counterReducer);

export default store;
