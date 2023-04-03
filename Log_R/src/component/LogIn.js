import React from "react";
import Styled from "styled-components";

function LogIn() {
    return <StyledLogIn>로그인 화면입니다.</StyledLogIn>
};

export default LogIn;

const StyledLogIn = Styled.h1`
    background-color: skyblue;
    font-size: 50px;
    text-align: center;
    color: green;
`;