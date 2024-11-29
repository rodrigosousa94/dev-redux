import { all, call, put, takeLatest } from "redux-saga/effects";
import { fetchUserSucces, fetchUserFail } from "./slice";
import axios from "axios";
// api: https://jsonplaceholder.typicode.com/users/

function* fetchUsers(){
    try{
        const response = yield call(axios.get, "https://jsonplaceholder.typicode.com/users/")
        yield put(fetchUserSucces(response.data))
    }catch(error) {
        yield put(fetchUserFail(error.message))
    }
}

export default all([
    takeLatest("user/fetchUsers", fetchUsers)
])