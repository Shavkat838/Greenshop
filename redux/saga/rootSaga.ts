import { all } from "redux-saga/effects";
import { productSaga } from "./productSaga";
import { categorySaga } from "./categorySaga";
import { userSaga } from "./userSaga";
import { orderSaga } from "./orderSaga";

function* rootSaga(){
    yield all([
        productSaga(),
        categorySaga(),
        userSaga(),
        orderSaga()
    ])
}

export default rootSaga;