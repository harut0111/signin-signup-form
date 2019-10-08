import { put, takeEvery, call, all } from 'redux-saga/effects'
import * as CNSTS from '../constants/index';

const delay = (ms) => new Promise(res => setTimeout(res, ms));

function* signinAsync(action) {
    yield call(delay, 2000);
    yield put({ type: CNSTS.SIGNIN, payload: action.payload });
}

function* signupAsync(action) {
    console.log(action);
    yield call(delay, 2000);
    yield put({ type: CNSTS.SIGNUP, payload: action.payload });
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