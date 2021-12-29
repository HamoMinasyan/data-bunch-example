import { dataBunch } from "../dataBunches/dataBunch";
import { getCountByInterval, getTimeByInterval } from "../api";

export const initApp = () => {
    getCountByInterval(val => {
        dataBunch.set({
            subscriberKey: prevValue => prevValue + val
        });
    });

    getTimeByInterval(val => {
        dataBunch.send({
            listenerKey: val
        });
    });
};