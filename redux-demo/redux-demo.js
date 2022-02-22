const redux = require("redux");

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
const store = redux.createStore(counterReducer); //스토어와 직접 작업하는건 무조건 ruducer

console.log(store.getState());
const conuterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

store.subscribe(conuterSubscriber);
store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });
