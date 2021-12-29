import React, {useEffect} from "react";
import Components from "../containers/components";
import Paper from '@mui/material/Paper';
import Report from "../containers/report";
import { initApp } from "../utils/initApp";

const App = () => {
    useEffect(initApp, []);

    return (
        <Paper>
            <div className="grid-container-3">
                <div className="grid-item">
                    <h4>Ex. (set, subscribe)</h4>
                    <Components type="subscriber" />
                </div>
                <div className="grid-item">
                    <h4>Ex. (send, listen)</h4>
                    <Components type="listener" />
                </div>
                <div className="grid-item">
                    <h4>REPORT</h4>
                    <Report />
                </div>
            </div>
        </Paper>
    );
};

export default App;