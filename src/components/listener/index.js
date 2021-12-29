import { useEffect, useState } from "react";
import { dataBunch } from "../../dataBunches/dataBunch";

const Listener = () => {
    const [value, setValue] = useState("");

    useEffect(() => {
        const subscription = dataBunch.listen({
            listenerKey: setValue
        });
        return () => subscription.removeListener();
    }, []);

    return (
        <span>{value}</span>
    );
};

export default Listener;