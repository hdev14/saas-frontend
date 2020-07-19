import React from 'react';

import Button from '../../../styles/components/Button';
import { Container, SignForm } from '../styles';

const SignIn = () => (
  <Container>
    <SignForm>
      <h1>boas vindas</h1>
      <span>e-mail</span>
      <input type="email" name="email" />
      <span>senha</span>
      <input type="passowrd" name="passowrd" />
      <Button type="submit" size="big">entrar</Button>
    </SignForm>
  </Container>
);

export default SignIn;
