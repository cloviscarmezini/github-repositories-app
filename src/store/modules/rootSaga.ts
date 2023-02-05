import { all } from  'redux-saga/effects';

import repositories from './repositories/sagas';

export default function* rootSaga() {
    yield all([
        repositories
    ])
}