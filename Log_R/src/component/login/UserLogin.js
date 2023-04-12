import React from "react";
import styled from "styled-components";

const UserLogin = (props) => {
  const logInHandler = (event) => {
    event.preventDefault();
  };

  return (
    <Form>
      <Label>이메일</Label>
      <br />
      <Input type="text" placeholder="example@naver.com" />
      <br />
      <Label>비밀번호</Label>
      <br />
      <PasswordInput type="password" placeholder="비밀번호를 입력해주세요." />
      <br />
      <JoinButton>회원가입</JoinButton>
      <LoginButton type="submit">로그인</LoginButton>
    </Form>
  );
};


const Form = styled.form`
  text-align: center;
  padding-top: 30px;
  font-size: 20px;
  border: 3px solid;
  margin-left: 700px;
  margin-right: 700px;
  margin-top: 50px;
`;

const Label = styled.label`
  font-size: 30px;
`;

const Input = styled.input`
  width: 200px;
  height: 20px;
  border: 2px solid;
  margin-top: 1px;
  margin-bottom: 15px;
`;

const PasswordInput = styled(Input)`
  margin-top: 15px;
`;

const JoinButton = styled.button`
  margin-top: 30px;
  margin-right: 30px;
  margin-bottom: 30px;
  font-size: 20px;
`;

const LoginButton = styled.button`
  margin-top: 15px;
  font-size: 20px;
`;

export default UserLogin;