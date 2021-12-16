import React, { useEffect } from "react";
import { getJson } from "../api/makeRequest";
import { PROFILE_URL, CARS_LIST_URL, PROFILE, CARS_LIST } from "../constants";
import { dataBunch } from "../dataBunches/dataBunch";
import Profile from "../components/profile";
import CarsList from "../components/carsList";
import { modals } from "../utils/modals";

const App = () => {

    useEffect(() => {
        const modalsSubscription = modals();
        return () => modalsSubscription.unsubscribe();
    }, []);

    useEffect(() => {
        getJson(PROFILE_URL).then(data => dataBunch.set({ [PROFILE]: data }));
        getJson(CARS_LIST_URL).then(data => dataBunch.set({ [CARS_LIST]: data }));
    }, []);

    return (
        <div className="inline">
            <Profile />
            <CarsList />
        </div>
    );
};

export default App;