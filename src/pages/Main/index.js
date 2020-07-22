import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getTeamsRequest } from '../../store/ducks/team/actions';

import TeamSwitcher from '../../components/TeamSwitcher';
import { Container } from './styles';

const Main = () => {
  const teams = useSelector((state) => state.team.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTeamsRequest());
  }, [dispatch]);

  return (
    <Container>
      <TeamSwitcher teams={teams} />
    </Container>
  );
};

export default Main;
