import DataBunch from "../../dataBunch";
import {
    PROFILE,
    USERS,
    CARS_LIST,
    ADD_USER,
    DELETE_USER,
    USER_INFO
} from "../constants";
// DATA BUNCHES STARTS FROM THIS FILE !


// fetched data bunch
export const dataBunch = new DataBunch({
    watcher: allData => console.info(allData),
    initialValues: {
        [PROFILE]: {},
        [USERS]: [],
        [CARS_LIST]: []
    },
});


// modal types bunch
export const modalTypesBunch = new DataBunch({
    initialValues: {
        [ADD_USER]: false,
        [DELETE_USER]: false,
        [USER_INFO]: false
    }
});