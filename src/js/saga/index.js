/**
 * Created by huangpan on 2017/3/31.
 */
function* rootSaga() {
  yield [
    helloSaga(),
    watchAndLog()
  ]
}