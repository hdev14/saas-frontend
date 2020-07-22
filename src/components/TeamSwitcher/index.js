import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { setActive } from '../../store/ducks/team/actions';

import { Container, TeamList, Team } from './styles';

const TeamSwitcher = ({ teams }) => {
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
      </TeamList>
    </Container>
  );
};

TeamSwitcher.defaultProps = {
  teams: [],
};

TeamSwitcher.propTypes = {
  teams: PropTypes.arrayOf(PropTypes.object),
};

export default TeamSwitcher;
