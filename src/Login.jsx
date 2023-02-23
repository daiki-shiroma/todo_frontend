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

function Login(){
  const navigate = useNavigate()
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [visible, { toggle }] = useDisclosure(true);
  
  const userLogin = () => {
    axios
     .post("http://localhost:3000/api/v1/auth/sign_in", {
        email: userEmail,
        password: userPassword,
     })

     .then(() => {
      console.log("seccess")
      navigate("/LoginSuccess");
     })

     .catch((error) => {
      console.log(error)
      navigate("/Fail_login");
    });
  };


  return (
    <>
      <h1>ログインページ</h1>

      <Wrapper>
    　 <TextInput 
     placeholder="Your email" 
     label="Your email" 
     value={userEmail}
     type="email"
     onChange={(e) => setUserEmail(e.target.value)}
     required
     />

      <PasswordInput
        label="Password"
        visible={visible}
        onVisibilityChange={toggle}
        value={userPassword}
        onChange={(e) => setUserPassword(e.target.value)}
        required
      />

      <Button_div>
        <Button 
        type="submit" 
        onClick={(e) => userLogin(e)} 
        // disabled={ userName!=='' &emailRequired&checkPasswordRequired & passwordRequired ? false:true}
        > 
         Login
        </Button>
      </Button_div>
    </Wrapper>
      
      <div>
        新規登録は<Link to={`/register/`}>こちら</Link>
      </div>
      <div>
        <Link to={`/`}>ホームに戻る</Link>
      </div>
    </>
  );
};

export default Login;