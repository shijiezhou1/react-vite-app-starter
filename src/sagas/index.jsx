import { put, takeLatest, all, race } from "redux-saga/effects";
function* fetchNews() {
  const json = yield fetch("http://localhost:3000/posts").then((response) =>
    response.json()
  );
  yield put({ type: "NEWS_RECEIVED", json });

  const json1 = yield fetch("http://localhost:3000/comments").then((response) =>
    response.json()
  );
  yield put({ type: "COMMENTS_RECEIVED", json: json1 });
}

function* fetchComments() {
  const json = yield fetch("http://localhost:3000/comments").then((response) =>
    response.json()
  );
  yield put({ type: "COMMENTS_RECEIVED", json });
}

function* actionWatcher() {
  yield takeLatest("GET_NEWS", fetchNews);
}

function* actionWatcher2() {
  yield takeLatest("GET_COMMENTS", fetchComments);
}

export default function* rootSaga() {
  yield all([actionWatcher(), actionWatcher2()]);
}
