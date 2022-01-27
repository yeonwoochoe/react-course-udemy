import React from "react";
import Card from "../UI/Card";
import classes from "./UsersList.module.css";

const UsersList = (props) => {
  return (
    //이 userList컴포넌트를 어디에 렌더링되게 하는 것이 가장이상적일까 ?
    //AddUser.js에 버튼 누르면 -> 사용자데이터를 로그할 할뿐만아니라 -> 그 데이터와 함꼐 사용자 객체 생성 -> 그 객체를 사용자 객체를 배열에 추가 -> 그리고 사용자리스트출력
    <Card cssClass={classes.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
