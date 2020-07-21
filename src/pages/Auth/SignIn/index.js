import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '../../../styles/components/Button';
import { Container, SignForm } from '../styles';

import { signInRequest } from '../../../store/ducks/auth/actions';

const SignIn = () => {
  const [data, setData] = useState({ email: '', password: '' });
  const dispatch = useDispatch();

  function onSubmitHandler(e) {
    e.preventDefault();
    dispatch(signInRequest(data));
  }

  function onChangeHandler(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  return (
    <Container>
      <SignForm onSubmit={onSubmitHandler}>
        <h1>boas vindas</h1>
        <span>e-mail</span>
        <input type="email" name="email" onChange={onChangeHandler} />
        <span>senha</span>
        <input type="password" name="password" onChange={onChangeHandler} />
        <Button type="submit" size="big" onClick={onSubmitHandler}>entrar</Button>
      </SignForm>
    </Container>
  );
};

export default SignIn;
