import DataBunch from "data-bunch";
import { MODAL_INFO } from "../constants";

// MODAL TYPES BUNCH STARTS FROM THIS FILE !

const initialValues = {
    [MODAL_INFO]: {
        type: null,
        meta: {}
    }
};

const watcher = (allData = {}) => {
    console.info("modalTypesBunch", allData);
}


export const modalTypesBunch = new DataBunch({
    initialValues,
    watcher
});