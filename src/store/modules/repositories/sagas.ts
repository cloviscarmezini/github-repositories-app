import axios, { AxiosResponse } from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects'
import { fetchRepositoriesSuccess, fetchRepositoriesFailure, fetchRepositoriesRequest, activeLoader } from './actions';
import { ActionTypes, RepositoriesResponseProps } from './types';

const BASE_GITHUB_API = 'https://api.github.com/search/repositories';
//por se tratar de uma API externa, não foi adicionada a uma pasta services com a baseURL fixa.

type FetchRepositoriesRequest = ReturnType<typeof fetchRepositoriesRequest>;

function* fetchRepositories({ payload }: FetchRepositoriesRequest) {
    const { page, itemsPerView, searchTerm, isUpdating } = payload;

    if(!searchTerm) {
        yield put(fetchRepositoriesSuccess({
            repositories: [],
            isUpdating: false
        }));
        return;
    }

    yield put(activeLoader());

    try {
        const response: AxiosResponse<RepositoriesResponseProps> = yield call(axios.get, `${BASE_GITHUB_API}?q=${searchTerm}&per_page=${itemsPerView}&page=${page}&order=asc`);
    
        if(response.data?.items) {
            yield put(fetchRepositoriesSuccess({
                repositories: response.data.items,
                isUpdating
            }));
            return;
        }
    } catch(error) {
        yield put(fetchRepositoriesFailure());
    }
}

export default all([
    takeLatest(ActionTypes.fetchRepositoriesRequest, fetchRepositories)
]);