import DataBunch from "data-bunch";
import { PROFILE, CARS_LIST } from "../constants";

// DATA BUNCHES STARTS FROM THIS FILE !

const initialValues = {
    [PROFILE]: {},
    [CARS_LIST]: [],
    // ...
};

const watcher = (allData = {}) => {
    console.info("dataBunch", allData);
}

export const dataBunch = new DataBunch({
    initialValues,
    watcher
});