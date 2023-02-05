import { RepositoryDTO } from "@dtos/RepositoryDTO";

export enum ActionTypes {
    fetchRepositoriesRequest = 'FETCH_REPOSITORIES_REQUEST',
    fetchRepositoriesSuccess = 'FETCH_REPOSITORIES_SUCCESS',
    fetchRepositoriesFailure = 'FETCH_REPOSITORIES_FAILURE',
    activeLoader = 'ACTIVE_LOADER'
}

export interface RepositoriesRequestProps {
    page: number;
    itemsPerView: number;
    searchTerm: string;
    isUpdating: boolean;
}

export interface RepositoriesSuccessProps {
    repositories: RepositoryDTO[];
    isUpdating: boolean;
}

export interface RepositoriesResponseProps {
    items: RepositoryDTO[]
}

export interface RepositoriesState {
    items: RepositoryDTO[];
    isLoading: boolean;
}