import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FiPlus } from 'react-icons/fi';
import { toast } from 'react-toastify';

import { createProject } from '../../store/ducks/team/actions';
import api from '../../services/api';

import Modal from '../Modal';
import Button from '../../styles/components/Button';
import { Container, Project } from './styles';

const Projects = () => {
  const activeTeam = useSelector((state) => state.activeTeam.active);
  const [projects, setProjects] = useState([]);
  const [toggleProjectModal, setToggleProjectModal] = useState(true);
  const [project, setProject] = useState('');
  const dispatch = useDispatch();

  async function fetchProjects() {
    try {
      const response = await api.get('/projects');
      setProjects(response.data);
    } catch (err) {
      toast.error('Não foi possível carregar os projetos.');
    }
  }

  useEffect(() => {
    fetchProjects();
  }, [projects]);

  function onSubmitProjectHandler(e) {
    e.preventDefault();
    dispatch(createProject(project));
    setToggleProjectModal(false);
    fetchProjects();
  }

  function onChangeProjectHandler(e) {
    setProject(e.target.value);
  }

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

          {projects.map((p) => (
            <Project key={p.id}>{p.title}</Project>
          ))}

          {toggleProjectModal && (
            <Modal>
              <h1>Adicionar projeto</h1>
              <form onSubmit={onSubmitProjectHandler}>
                <span>NOME</span>
                <input
                  type="text"
                  placeholder="Digite o nome do time"
                  value={project}
                  onChange={onChangeProjectHandler}
                />
                <div className="buttons">
                  <Button
                    size="big"
                    color="gray"
                    onClick={() => setToggleProjectModal(false)}
                  >
                    cancelar
                  </Button>
                  <Button type="submit" size="big" onClick={onSubmitProjectHandler}>salvar</Button>
                </div>
              </form>
            </Modal>
          )}
        </>
      ) : (
        <h2>Selecione um time ou crie um novo!</h2>
      )}
    </Container>
  );
};

export default Projects;
