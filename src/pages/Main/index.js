import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getTeamsRequest } from '../../store/ducks/team/actions';

import TeamSwitcher from '../../components/TeamSwitcher';
import Modal from '../../components/Modal';

import Button from '../../styles/components/Button';
import { Container } from './styles';

const Main = () => {
  const teams = useSelector((state) => state.team.data);
  const dispatch = useDispatch();

  const [toggleTeamModal, setToggleTeamModal] = useState(true);

  useEffect(() => {
    dispatch(getTeamsRequest());
  }, [dispatch]);

  return (
    <Container>
      <TeamSwitcher teams={teams} />
      {toggleTeamModal && (
        <Modal>
          <h1>Criar Time</h1>
          <form onSubmit={() => {}}>
            <span>NOME</span>
            <input type="text" placeholder="Digite o nome do time" value="" />
            <div className="buttons">
              <Button size="big" color="gray" onClick={() => setToggleTeamModal(false)}>cancelar</Button>
              <Button size="big">criar</Button>
            </div>
          </form>
        </Modal>
      )}
    </Container>
  );
};

export default Main;
