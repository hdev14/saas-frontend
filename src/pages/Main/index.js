import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getTeamsRequest, createTeamRequest } from '../../store/ducks/team/actions';

import TeamSwitcher from '../../components/TeamSwitcher';
import Projects from '../../components/Projects';
import Modal from '../../components/Modal';

import Button from '../../styles/components/Button';
import { Container } from './styles';

const Main = () => {
  const teams = useSelector((state) => state.team.data);
  const dispatch = useDispatch();

  const [team, setTeam] = useState('');
  const [toggleTeamModal, setToggleTeamModal] = useState(false);

  useEffect(() => {
    dispatch(getTeamsRequest());
  }, [dispatch]);

  function onChangeTeamHandler(e) {
    setTeam(e.target.value);
  }

  function onSubmitTeamHandler(e) {
    e.preventDefault();
    dispatch(createTeamRequest(team));
    setToggleTeamModal(false);
  }

  return (
    <Container>
      <TeamSwitcher teams={teams} openTeamModal={() => setToggleTeamModal(true)} />
      <Projects />
      {toggleTeamModal && (
        <Modal>
          <h1>Criar time</h1>
          <form onSubmit={onSubmitTeamHandler}>
            <span>NOME</span>
            <input
              type="text"
              placeholder="Digite o nome do time"
              value={team}
              onChange={onChangeTeamHandler}
            />
            <div className="buttons">
              <Button size="big" color="gray" onClick={() => setToggleTeamModal(false)}>cancelar</Button>
              <Button type="submit" size="big" onClick={onSubmitTeamHandler}>salvar</Button>
            </div>
          </form>
        </Modal>
      )}
    </Container>
  );
};

export default Main;
