import React from "react";
import Styled from "./UserLogin.module.css";


const UserLogin = props => {
    const logInHandler = (event) => {
        event.preventDefault();
    }

    return (
        <form>
            <label id={`${Styled.id}`}>이메일</label>
            <br></br>
            <input id={`${Styled.username}`} type="text" placeholder="example@naver.com" />
            <br></br>
            <label id={`${Styled.pass}`}>비밀번호</label>
            <br></br>
            <input id={`${Styled.password}`} type="password" placeholder="비밀번호를 입력해주세요." />
            <br></br>
            <button id={`${Styled.join}`} type="submit">회원가입</button>
            <button type="submit">로그인</button>
        </form>
    );
}

export default UserLogin;