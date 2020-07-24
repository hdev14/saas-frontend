import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FiPlus } from 'react-icons/fi';
import { toast } from 'react-toastify';

import { createProject } from '../../store/ducks/team/actions';
import api from '../../services/api';

import Modal from '../Modal';
import Button from '../../styles/components/Button';
import { Container, Project, MemberList } from './styles';

const Projects = () => {
  const activeTeam = useSelector((state) => state.activeTeam.active);
  const [toggleProjectModal, setToggleProjectModal] = useState(false);
  const [toggleMembersModal, setToggleMembersModal] = useState(false);
  const dispatch = useDispatch();

  const [projects, setProjects] = useState([]);
  async function fetchProjects() {
    try {
      const response = await api.get('/projects');
      setProjects(response.data);
    } catch (err) {
      toast.warning('Não foi possível carregar os projetos.');
    }
  }

  useEffect(() => {
    fetchProjects();
  }, []);

  const [members, setMembers] = useState([]);
  async function fetchMembers() {
    try {
      const response = await api.get('/members');
      setMembers(response.data);
    } catch (err) {
      toast.warning('Não foi possível carregar os membros.');
    }
  }

  useEffect(() => {
    fetchMembers();
  }, []);

  const [project, setProject] = useState('');
  async function onSubmitProjectHandler(e) {
    e.preventDefault();
    dispatch(createProject(project));
    setToggleProjectModal(false);
    setTimeout(fetchProjects, 1000);
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
              <Button size="small" onClick={() => setToggleProjectModal(true)}>
                <FiPlus size={24} />
                novo
              </Button>
              <Button size="small" onClick={() => setToggleMembersModal(true)}>membros</Button>
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

          {toggleMembersModal && (
            <Modal size="big">
              <h1>Membros</h1>
              <form onSubmit={onSubmitProjectHandler}>
                <MemberList>
                  {members.map((m) => (
                    <li key={m.user.id}>
                      <strong>{m.user.name}</strong>
                    </li>
                  ))}
                </MemberList>
                <Button
                  size="small"
                  color="gray"
                  onClick={() => setToggleMembersModal(false)}
                >
                  cancelar
                </Button>
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
