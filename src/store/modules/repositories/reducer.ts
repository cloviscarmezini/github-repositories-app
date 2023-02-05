import { Reducer } from "redux";
import { ActionTypes, RepositoriesState } from "./types";
import produce from 'immer';

const INITIAL_STATE: RepositoriesState = {
    items: [],
    isLoading: false
}

const repositories: Reducer<RepositoriesState> = (state = INITIAL_STATE, action) => {
    return produce(state, draft=> {
        switch(action.type) {
            case ActionTypes.fetchRepositoriesSuccess: {
                const { repositories, isUpdating } = action.payload;

                if(isUpdating) {
                    const withDuplicatesList = [...draft.items, ...repositories];
    
                    const withoutDuplicatesList = new Map(
                        withDuplicatesList.map(value=> [value['id'], value])
                    )

                    draft.items = Array.from(withoutDuplicatesList.values());
                    draft.isLoading = false;
                    break;
                }

                draft.items = repositories;
                draft.isLoading = false;
                break;
            }
            case ActionTypes.fetchRepositoriesFailure: {
                draft.isLoading = false;
                break;
            }
            case ActionTypes.activeLoader: {
                draft.isLoading = true;
                break;
            }
            default: {
                return draft;
            }
        }
    })
}

export default repositories;