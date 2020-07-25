import { call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../services/api';

import { getTeamsSuccess, createTeamSuccess } from '../ducks/team/actions';

export function* getTeams() {
  try {
    const response = yield call(api.get, '/teams');
    yield put(getTeamsSuccess(response.data));
  } catch (err) {
    toast.warning('Algo errado não está certo');
  }
}

export function setActive({ payload }) {
  const { activeTeam } = payload;
  if (activeTeam) {
    api.defaults.headers.common['Team-Slug'] = activeTeam.active ? activeTeam.active.slug : activeTeam.slug;
  }
}

export function* createTeam({ payload }) {
  try {
    const response = yield call(api.post, '/teams', payload);
    yield put(createTeamSuccess(response.data));
    toast.success('Time criado.');
  } catch (err) {
    toast.error('Não foi possível criar o time, por favor tente novamente.');
  }
}

export function* createProject({ payload }) {
  try {
    const { project } = payload;
    yield call(api.post, '/projects', { title: project });
    toast.success('Projeto criado');
  } catch (err) {
    toast.error('Erro ao criar um projeto.');
  }
}

export function* addRoles({ payload }) {
  try {
    const { userId, roles } = payload;
    yield call(api.put, `/members/${userId}`, { roles });
    toast.success('Permissões adicionadas com sucesso');
  } catch (err) {
    toast.error('Error ao adicionar as permissões');
  }
}
