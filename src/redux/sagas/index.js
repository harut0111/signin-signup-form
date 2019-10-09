import { put, takeEvery, call, all } from 'redux-saga/effects'
import * as CNSTS from '../constants/index';

const delay = (ms) => new Promise(res => setTimeout(res, ms));

function* signinAsync() {
    yield put({type: CNSTS.DISABLEFORM});
    yield call(delay, 2000);
    yield put({type: CNSTS.DISABLEFORM});
    yield put({ type: CNSTS.SIGNIN });
}

function* signupAsync() {
    yield put({type: CNSTS.DISABLEFORM});
    yield call(delay, 2000);
    yield put({type: CNSTS.DISABLEFORM});
    yield put({ type: CNSTS.SIGNUP });
}

function* watchSigninAsync() {
    yield takeEvery(CNSTS.SIGNIN_ASYNC, signinAsync);
}

function* watchSignupAsync() {
    yield takeEvery(CNSTS.SIGNUP_ASYNC, signupAsync);
}

export default function* rootSaga() {
    yield all([ 
        watchSigninAsync(),
        watchSignupAsync()
    ])
}