import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { signUpRequest } from '../../../store/ducks/auth/actions';

import Button from '../../../styles/components/Button';
import { Container, SignForm } from '../styles';

const SignUp = () => {
  const [data, setData] = useState({ name: '', email: '', password: '' });
  const dispatch = useDispatch();

  function onSubmitHandler(e) {
    e.preventDefault();
    const { name, email, password } = data;
    dispatch(signUpRequest(name, email, password));
  }

  function onChangeHandler(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  return (
    <Container>
      <SignForm onSubmit={onSubmitHandler}>
        <h1>Criar conta</h1>
        <span>nome</span>
        <input type="text" name="name" onChange={onChangeHandler} />
        <span>e-mail</span>
        <input type="email" name="email" onChange={onChangeHandler} />
        <span>senha</span>
        <input type="password" name="password" onChange={onChangeHandler} />
        <Button type="submit" size="big" onClick={onSubmitHandler}>entrar</Button>
      </SignForm>
    </Container>
  );
};

export default SignUp;
