import React from "react";
import Styled from "./UserLogin.module.css";


const UserLogin = props => {
    const logInHandler = (event) => {
        event.preventDefault();
    }

    return (
        <form>
            <label>ID</label>
            <input id={`${Styled.username}`} type="text" placeholder="id" />
            <br></br>
            <label>Password</label>
            <input id={`${Styled.password}`} type="password" placeholder="password" />
            <br></br>
            <button type="submit">회원가입</button>
            <button type="submit">로그인</button>
        </form>
    );
}

export default UserLogin;