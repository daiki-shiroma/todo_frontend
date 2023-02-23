import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"
import { TextInput, Loader } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { PasswordInput } from '@mantine/core';
import { Button } from '@mantine/core';


const Wrapper = styled.form`
  width: 700px;
  max-width: 85%;
  margin: 20px auto;
`

const Button_div = styled.div`
  text-align: right;
  margin-top: 20px;
`


  function Register(){
  const navigate = useNavigate()
  const [userName, setUserName] = useState("");
  const [userNickName, setUserNickName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userPasswordComfirm, setUserPasswordComfirm] = useState("");
  const [visible, { toggle }] = useDisclosure(true);
  const [emailRequired, setemailRequired] = useState(false);
  const [passwordRequired, setPasswordRequired] = useState(false);
  const [checkPasswordRequired, setcheckPasswordRequired] = useState(false);

  const checkEmail= (e)=>{
    const regex = /^[a-zA-Z0-9_+-]+(\.[a-zA-Z0-9_+-]+)*@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/;
    if (regex.test(e))  setemailRequired(true);
    else setemailRequired(false);
 };
 
   const countPassword= ()=>{
     if (userPassword.length>=6)  setPasswordRequired(true);
     else setPasswordRequired(false);
  };

  const checkPassword= ()=>{
    if (userPassword==userPasswordComfirm)  setcheckPasswordRequired(true);
    else setcheckPasswordRequired(false);
 };

  const createUser = (e) => {
     axios
     .post("http://localhost:3000/api/v1/auth", {
      // .post("https://wispy-wind-1056.fly.dev/todos", {
        name: userName,
        nickname: userNickName,
        email: userEmail,
        password: userPassword,
        password_confirmation: userPasswordComfirm
     })
     .then((e) => {
      console.log(e)
      navigate("/LoginSuccess");
     })

     .catch((error) => {
      console.log(error)
      navigate("/Fail_login");
    });

    return;
 };

 useEffect(() => {
}, []);


  return (
    <>
      <h1>新規ユーザー登録ページ</h1>
      <Wrapper>
      <TextInput
      placeholder="Name"
      label="Full name"
      withAsterisk
      value={userName}
      type="text"
      onChange={(e) => setUserName(e.target.value)}
      required
    />

     <TextInput
      placeholder="Nickname"
      label="Nick name"
      value={userNickName}
      type="text"
      onChange={(e) => setUserNickName(e.target.value)}
    />

     <TextInput 
     placeholder="Your email" 
     label="Your email" 
     withAsterisk 
     rightSection={<Loader size="xs" />} 
     value={userEmail}
     type="email"
     onChange={(e) => setUserEmail(e.target.value)}
     onKeyUp={(e) => checkEmail(e.target.value)}
     required
     />

      <PasswordInput
        label="Password"
        visible={visible}
        onVisibilityChange={toggle}
        withAsterisk
        value={userPassword}
        minLength="6"
        onChange={(e) => setUserPassword(e.target.value)}
        onKeyUp={(e) => countPassword(e.target.value)}
        error={passwordRequired ? false:"Password must input at least 6 characters"}
        required
      />

      <PasswordInput
        label="Confirm password"
        visible={visible}
        onVisibilityChange={toggle}
        withAsterisk
        value={userPasswordComfirm}
        minLength="6"
        onChange={(e) => setUserPasswordComfirm(e.target.value)}
        onKeyUp={(e) => checkPassword(e.target.value)}
        error={checkPasswordRequired ? false:"Password isn't match!!"}
        required
      />

      <Button_div>
        <Button 
        type="submit" 
        onClick={(e) => createUser(e)} 
        // disabled={ userName!=='' &emailRequired&checkPasswordRequired & passwordRequired ? false:true}
        > 
        Register
        </Button>
      </Button_div>
    </Wrapper>
      <div>
        ログインは<Link to={`/login/`}>こちら</Link>
      </div>
      <div>
        <Link to={`/`}>ホームに戻る</Link>
      </div>
    </>
  );
};

export default Register;
