import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { FiPlus } from 'react-icons/fi';
import { setActive } from '../../store/ducks/active-team/actions';
import { signOut } from '../../store/ducks/auth/actions';

import {
  Container, TeamList, Team, NewTeam, SignOut,
} from './styles';

const TeamSwitcher = ({ teams, openTeamModal }) => {
  const dispatch = useDispatch();

  function setActiveHandler(team) {
    dispatch(setActive(team));
  }

  return (
    <Container>
      <TeamList>
        {teams.map((team) => (
          <Team key={team.id} onClick={() => setActiveHandler(team)}>
            <img src={`https://ui-avatars.com/api/?font-size=0.33&background=7289da&name=${team.name}`} alt={team.name} />
          </Team>
        ))}

        <NewTeam onClick={openTeamModal}>
          <FiPlus size={25} />
        </NewTeam>
      </TeamList>

      <SignOut type="button" onClick={() => dispatch(signOut())}>sair</SignOut>
    </Container>
  );
};

TeamSwitcher.defaultProps = {
  teams: [],
};

TeamSwitcher.propTypes = {
  teams: PropTypes.arrayOf(PropTypes.object),
  openTeamModal: PropTypes.func.isRequired,
};

export default TeamSwitcher;
