import React from 'react';
import { useSelector } from 'react-redux';
import { FiPlus } from 'react-icons/fi';

import Button from '../../styles/components/Button';
import { Container, Project } from './styles';

const Projects = () => {
  const activeTeam = useSelector((state) => state.activeTeam.active);

  return (
    <Container>
      {activeTeam ? (
        <>
          <header>
            <h1>{activeTeam.name}</h1>
            <div>
              <Button size="small">
                <FiPlus size={24} />
                novo
              </Button>
              <Button size="small">membros</Button>
            </div>
          </header>

          <Project>First Project</Project>
          <Project>First Project</Project>
          <Project>First Project</Project>
        </>
      ) : (
        <h2>Selecione um time ou crie um novo!</h2>
      )}
    </Container>
  );
};

export default Projects;
