import React, { useState, useEffect } from "react";
import { dataBunch } from "../../dataBunches/dataBunch";
import { ADD_CAR, CARS_LIST, DELETE_CAR, MODAL_INFO } from "../../constants";
import { modalTypesBunch } from "../../dataBunches/modalTypesBunch";

const CarsList = () => {
    const [carsList, setCarsList] = useState([]);

    const addCar = () => {
        modalTypesBunch.set({
            [MODAL_INFO]: {
                type: ADD_CAR,
                meta: {}
            }
        });
    }

    const removeItem = (item) => {
        modalTypesBunch.set({
            [MODAL_INFO]: {
                type: DELETE_CAR,
                meta: item
            }
        });
    }

    useEffect(() => {
        const subscription = dataBunch.subscribe({
            [CARS_LIST]: setCarsList
        });
        return () => subscription.unsubscribe();
    }, []);

    if (!carsList.length) return <span>Loading</span>;

    return (
        <ul className="list">
            <button onClick={addCar}>Add Car</button>
            {carsList.map((item, index) => (
                <li key={index}>
                    <span>{item.brand}</span>
                    <button onClick={() => removeItem(item)}>Remove Car</button>
                </li>
            ))}
        </ul>
    );
};

export default CarsList;