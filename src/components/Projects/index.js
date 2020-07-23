import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { FiPlus } from 'react-icons/fi';
import { toast } from 'react-toastify';

import api from '../../services/api';

import Button from '../../styles/components/Button';
import { Container, Project } from './styles';

const Projects = () => {
  const activeTeam = useSelector((state) => state.activeTeam.active);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const response = await api.get('/projects');
        setProjects(response.data);
      } catch (err) {
        toast.error('Não foi possível carregar os projetos.');
      }
    }

    fetchProjects();
  });
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

          {projects.map((project) => (
            <Project>{project.title}</Project>
          ))}
        </>
      ) : (
        <h2>Selecione um time ou crie um novo!</h2>
      )}
    </Container>
  );
};

export default Projects;
