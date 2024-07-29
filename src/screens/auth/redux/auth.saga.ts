import { call, put, takeEvery } from "redux-saga/effects";

import { postSignInRequest, postRegisterRequest } from "./auth.api";
import { authCreators, authTypes } from "./auth.action";
import { setItemInStorage } from "../../../utilities/storage-service";
import { StorageKeys } from "../../../enums";
import { ILoginAction, ISignupAction } from "../interface";
import { getErrorResponse } from "../../../utilities/utils";

export function* watchAuth() {
  yield takeEvery(authTypes.HANDLE_SIGN_IN, handleSignIn);
  yield takeEvery(authTypes.HANDLE_SIGN_UP, handleSignUp);
}

function* handleSignIn({
  params,
}: {
  params: ILoginAction;
  type: string;
}): Generator<any, void, any> {
  try {
    const { values, showToast } = params;
    const response = yield call(postSignInRequest, values);

    setItemInStorage(StorageKeys.User, response.data.access_token);
    showToast("success", "Login Successfully");

    yield put(authCreators.handleSignInSuccess(response.data));
  } catch (error: any) {
    params.showToast("error", getErrorResponse(error));
    yield put(authCreators.handleSignInFailure(error));
  }
}

function* handleSignUp({
  params,
}: {
  params: ISignupAction;
  type: string;
}): Generator<any, void, any> {
  try {
    const { values, showToast } = params;

    const response = yield call(postRegisterRequest, values);
    setItemInStorage(StorageKeys.User, response?.data?.access_token);
    showToast("success", "Register Successfully");

    yield put(authCreators.handleSignUpSuccess(response?.data));
  } catch (error: any) {
    params.showToast("error", getErrorResponse(error));
    yield put(authCreators.handleSignUpFailure(error));
  }
}
