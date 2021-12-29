import { useEffect, useState } from "react";
import { dataBunch } from "../../dataBunches/dataBunch";

const Subscriber = () => {
    const [value, setValue] = useState("");

    useEffect(() => {
        const subscription = dataBunch.subscribe({
            subscriberKey: setValue
        });
        return () => subscription.unsubscribe();
    }, []);

    return (
        <span>{value}</span>
    );
};

export default Subscriber;