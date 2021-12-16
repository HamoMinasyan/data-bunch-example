import { ADD_CAR, CARS_LIST, DELETE_CAR, MODAL_INFO } from "../constants";
import { dataBunch } from "../dataBunches/dataBunch";
import { modalTypesBunch } from "../dataBunches/modalTypesBunch";

export const modals = () => {
    return modalTypesBunch.subscribe({
        [MODAL_INFO]: (modalInfo) => {
            switch (modalInfo.type) {
                case ADD_CAR: {
                    const newVal = prompt("Please enter car name", "");
                    if (newVal) {
                        dataBunch.set({
                            [CARS_LIST]: prevValue => [ { brand: newVal }, ...prevValue ]
                        });
                    }
                    break;
                }
                case DELETE_CAR: {
                    // eslint-disable-next-line no-restricted-globals
                    const accepted = confirm("Are you sure you want to delete this item?");
                    if (accepted) {
                        const { brand } = modalInfo.meta || {};
                        const { CARS_LIST: carsList } = dataBunch.get(CARS_LIST);
                        const newData = carsList.filter(item => item.brand !== brand);
                        dataBunch.set({
                            [CARS_LIST]: newData
                        });
                    }
                    break;
                }
                default:
                    break;
            }
        }
    });
}