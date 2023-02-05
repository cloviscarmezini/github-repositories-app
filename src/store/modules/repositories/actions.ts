import { ActionTypes, RepositoriesRequestProps, RepositoriesSuccessProps } from "./types";

export function fetchRepositoriesRequest({ page, itemsPerView, searchTerm, isUpdating }: RepositoriesRequestProps) {
    return {
        type: ActionTypes.fetchRepositoriesRequest,
        payload: {
            page,
            itemsPerView,
            searchTerm,
            isUpdating
        }
    }
}

export function fetchRepositoriesSuccess({ repositories, isUpdating }: RepositoriesSuccessProps) {
    return {
        type: ActionTypes.fetchRepositoriesSuccess,
        payload: {
            repositories,
            isUpdating
        }
    }
}

export function fetchRepositoriesFailure() {
    return {
        type: ActionTypes.fetchRepositoriesFailure
    }
}

export function activeLoader() {
    return {
        type: ActionTypes.activeLoader
    }
}