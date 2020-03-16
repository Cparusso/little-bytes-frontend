import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useUserContext } from "../../../services/context/useUserContext";

const Login = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const { isLoggedIn, setIsLoggedIn } = useUserContext();

  const onSubmit = data => {
    setIsLoggedIn({ ...isLoggedIn, isLoggedIn: true });
  };

  return (
    <LoginWrapper>
      <FormWrapper onSubmit={handleSubmit(onSubmit)}>
        <h2>Log In</h2>
        <Input>
          <label>Email</label>
          <input name="email" defaultValue="" ref={register} />
        </Input>
        <Input>
          <label>Password</label>
          <input name="password" ref={register} />
        </Input>
        <SubmitButton type="submit" />
      </FormWrapper>
    </LoginWrapper>
  );
};

export default Login;

const LoginWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  h2 {
    text-align: center;
  }
`;

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 60px;
  width: 400px;
  height: 500px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);
`;

const Input = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
  input {
    width: 300px;
  }
`;

const SubmitButton = styled.input`
  margin: 10px 0;
  background: blue;
  padding: 10px 0;
  border-radius: 2px;
  border: none;
  color: #fff;
  text-transform: uppercase;
`;
