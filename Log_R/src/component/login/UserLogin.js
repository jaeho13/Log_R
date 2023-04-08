import React from "react";
import Styled from "./UserLogin.module.css";


const UserLogin = props => {
    const logInHandler = (event) => {
        event.preventDefault();
    }

    return (
        <form>
            <label>ID</label>
            <input id={`${Styled.username}`} type="text" />
            <br></br>
            <label>Password</label>
            <input id={`${Styled.password}`} type="text" />
            <br></br>
            <button type="submit">로그인</button>
        </form>
    );
}

export default UserLogin;