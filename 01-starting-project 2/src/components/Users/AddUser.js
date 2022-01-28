import React, { useState, useRef } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";
import Wrapper from "../Helpers/Wrapper";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  //useRef씀으로써 계속 렌더링되는 stata는 필요가 없어짐
  // const [enteredUsername, setEnteredUsername] = useState(""); //유져이름상태관리
  // const [enteredAge, setEnteredAge] = useState(""); //유져나이상태관리
  const [error, setError] = useState(); //에러상태관리

  //사용자 추가 버튼 이벤트
  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;
    //유효성을검사하는 if문(빈형태로 누르지마~ 나이누락하지마~ 음수로 쓰지마~)
    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      //인풋에 들어가는 글자수가 0과 같다면, 입력이 비어있다면
      setError({ title: "Invalid input", message: "Please enter a valid and age(non-empty values)" });
      return;
    }
    if (+enteredUserAge < 1) {
      setError({ title: "Invalid age", message: "Please enter a valid and age(>0)" });
      return;
      //문자열이기떄문에 +를붙여서 숫자고 인식할수있도록함
    }
    //// 상위 컨포넘는에서 전달받은 프롭스를 콜백함수 실행, 상태 갱신! 전달받지; 않으면 출력이 되지 않음
    props.onAddUser(enteredName, enteredUserAge);
    nameInputRef.current.value = ""; //필드를 빈 문자열,즉 초기값으로 리겟되게 해주는 구문
    ageInputRef.current.value = "";
    // setEnteredUsername(""); useRef사용으로 필요없어진구문
    // setEnteredAge("");
  };

  // const usernameChangeHandler = (event) => {
  //   setEnteredUsername(event.target.value);
  // }; //이름변화상태감지 이벤트
  // useRef사용으로 필요없어진구문============================
  // const ageChangeHandler = (event) => {
  //   setEnteredAge(event.target.value);
  // }; //나이변화상태감지 이벤트

  const errorHandler = () => {
    setError(null);
  }; //에러 이벤트함수

  return (
    <Wrapper>
      {/* 두개의 연속한 컴포넌트가 렌더 되는걸 허용하지 않음. 또 하나의 태그로 감싸주어야함 */}
      {/* 자스표현에서는 단 하나만 jsx요소를 저장할수있음 */}

      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
      <Card cssClass={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">User Name</label>
          <input id="username" type="text" ref={nameInputRef} />
          <label htmlFor="age">Age (year)</label>
          <input id="age" type="number" ref={ageInputRef} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
    //이아래에 사용자입력을 목로으로 렌더링할 요소를 생성할수있지만 x 출력과 인출로직을  따로분리
  );
};

export default AddUser;
