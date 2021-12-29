import React from "react";
import { Button } from "@mui/material";
import DataBunch from "data-bunch";


export const reportBunch = new DataBunch({
    initialValues: {
        reportData: []
    }
});

export const dataBunch = new DataBunch({
    initialValues: {
        subscriberKey: 0,
        listenerKey: ""
    },
    watcher: allData => {
        const dataBunchKeys = Object.keys(allData);
        const reportData = dataBunchKeys.map(key => ({
            dataBunchKeyName: key,
            listenersCount: Object.keys(allData[key].listeners).length,
            subscribersCount: Object.keys(allData[key].subscribers).length,
            value: JSON.stringify(allData[key].value),
            actions: [
                <Button size="small" variant="outlined" onClick={() => alert(JSON.stringify(dataBunch.get(key)))}>
                    <span style={{ fontSize: 10 }}>{`Get`}</span>
                </Button>,
                <Button size="small" variant="outlined" onClick={() => dataBunch.reset(key)}>
                    <span style={{ fontSize: 10 }}>{`Reset`}</span>
                </Button>,
                <Button size="small" variant="outlined" onClick={() => dataBunch.remove(key)}>
                    <span style={{ fontSize: 10 }}>{`Remove`}</span>
                </Button>
            ]
        }));
        reportBunch.send({ reportData });
    }
});