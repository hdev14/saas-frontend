import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FiPlus } from 'react-icons/fi';
import { toast } from 'react-toastify';
import Select from 'react-select';

import api from '../../services/api';
import { createProject, addRoles, inviteMember } from '../../store/ducks/team/actions';

import Modal from '../Modal';
import Can from '../Can';
import Button from '../../styles/components/Button';
import {
  Container, Project, MemberList, Invite,
} from './styles';

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

  const [members, setMembers] = useState([]);
  async function fetchMembers() {
    try {
      const response = await api.get('/members');
      setMembers(response.data);
    } catch (err) {
      toast.warning('Não foi possível carregar os membros.');
    }
  }

  const [roles, setRoles] = useState([]);
  async function fetchRoles() {
    try {
      const response = await api.get('/roles');
      setRoles(response.data);
    } catch (err) {
      toast.warning('Não foi possível carregar as permissões');
    }
  }

  const [auth, setAuth] = useState({});
  async function fetchAuth() {
    try {
      const response = await api.get('/authorizations');
      setAuth(response.data);
    } catch (err) {
      toast.warning('Não foi possível carregar as autorizações');
    }
  }

  useEffect(() => {
    if (activeTeam) {
      fetchProjects();
      fetchMembers();
      fetchRoles();
      fetchAuth();
    }
  }, [activeTeam]);

  function onChangeRolesHandler(userId, selectedRoles) {
    if (selectedRoles) {
      const getRoles = selectedRoles.map((role) => roles.find((r) => r.id === role.id));
      const memberId = members.findIndex((member) => member.user_id === userId);
      if (memberId >= 0) {
        const member = members[memberId];
        const memberWithNewRoles = { ...member, roles: getRoles };
        const membersWihtoutMemberWithNewRoles = members.filter((m) => m.id !== members[memberId].id);
        setMembers([...membersWihtoutMemberWithNewRoles, memberWithNewRoles]);
        const rolesId = getRoles.map((r) => r.id);
        dispatch(addRoles(userId, rolesId));
      }
    }
  }

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

  const [memberEmail, setMemberEmail] = useState('');
  function onChangeMemberEmailHanlder(e) {
    setMemberEmail(e.target.value);
  }

  async function onClickInviteHandler(e) {
    e.preventDefault();
    dispatch(inviteMember(memberEmail));
  }

  return (
    <Container>
      {activeTeam ? (
        <>
          <header>
            <h1>{activeTeam.name}</h1>
            <div>
              <Can auth={auth} userPermission="create-project">
                <Button size="small" onClick={() => setToggleProjectModal(true)}>
                  <FiPlus size={24} />
                  novo
                </Button>
              </Can>
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

              <form>

                <Can auth={auth} userPermission="create-invite">
                  <Invite>
                    <span>CONVIDAR MEMBRO</span>
                    <input
                      type="email"
                      placeholder="Digite o email do membro."
                      value={memberEmail}
                      onChange={onChangeMemberEmailHanlder}
                    />
                    <Button type="submit" size="small" onClick={onClickInviteHandler}>enviar</Button>
                  </Invite>
                </Can>

                <MemberList>
                  {members.map((m) => (
                    <li key={m.user_id}>
                      <strong>{m.user.name}</strong>

                      <Can auth={auth} userRole="admin">
                        {(can) => (
                          <Select
                            isMulti
                            isDisabled={!can}
                            options={roles}
                            defaultValue={m.roles}
                            getOptionLabel={(role) => role.name}
                            getOptionValue={(role) => role.id}
                            closeMenuOnSelect={false}
                            onChange={(value) => onChangeRolesHandler(m.user_id, value)}
                          />
                        )}
                      </Can>

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
