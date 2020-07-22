import React from 'react';

import { Container, TeamList, Team } from './styles';

const TeamSwitcher = () => (
  <Container>
    <TeamList>
      <Team>
        <img src="https://ui-avatars.com/api/?name=John+Doe" alt="jd" />
      </Team>
      <Team>
        <img src="https://ui-avatars.com/api/?name=John+Doe" alt="jd" />
      </Team>
      <Team>
        <img src="https://ui-avatars.com/api/?name=John+Doe" alt="jd" />
      </Team>
    </TeamList>
  </Container>
);

export default TeamSwitcher;
