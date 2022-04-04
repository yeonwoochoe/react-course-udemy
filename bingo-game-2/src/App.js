import React, { useState } from "react";

import "./App.css";

let bingoArr = new Array(25); //1,2,3,4,5,6,7,8,9,...25//
for (let i = 0; i < bingoArr.length; i++) bingoArr[i] = i + 1; // 1,2,3,4,5,6,7,7,8,9,10

bingoArr.sort(function () {
  return 0.5 - Math.random();
}); //랜돌려

let arr2 = [];
let tmp = 0;
let bingo = [];

for (let i = 0; i < bingoArr.length; i++) {
  bingo[i % 5] = bingoArr[i]; // 01234 / 01234/01234/01234/01234
  // 5개 씩 담기
  if ((i + 1) % 5 == 0) {
    arr2[tmp] = bingo; // 섞어
    tmp++;
    bingo = []; //빙고 게임 판 담기
  }
}

console.log(bingoArr);

const App = () => {
  const [print, setPrint] = useState(bingoArr);
  console.log(print);
  const bingHandlr = () => {};

  return (
    <>
      <h1>빙고판의 난수 출력</h1>
      <div className="container">
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
      </div>
      <button onClick={() => {}}>Random</button>
    </>
  );
};

export default App;
