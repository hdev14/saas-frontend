import React from 'react';
import PropTypes from 'prop-types';

import { Container, TeamList, Team } from './styles';

const TeamSwitcher = ({ teams }) => (
  <Container>
    <TeamList>
      {teams.map((team) => (
        <Team key={team.id}>
          <img src={`https://ui-avatars.com/api/?font-size=0.33&background=7289da&name=${team.name}`} alt={team.name} />
        </Team>
      ))}
    </TeamList>
  </Container>
);

TeamSwitcher.defaultProps = {
  teams: [],
};

TeamSwitcher.propTypes = {
  teams: PropTypes.arrayOf(PropTypes.object),
};

export default TeamSwitcher;
