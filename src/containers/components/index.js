import React, { useState } from "react";
import { Button, InputBase } from "@mui/material";
import ComponentWrapper from "../../components/componentWrapper";
import { numToArr } from "../../utils";

const Components = ({ type }) => {
    const [count, setCount] = useState(2);
    const [componentCounts, setComponentCounts] = useState(count);

    const inputOnChange = e => setCount(Number(e.target.value));

    const applyCount = () => setComponentCounts(count);


    return (
        <>
            <div>
                <InputBase
                    value={count}
                    onChange={e => inputOnChange(e)}
                />
                <Button
                    variant="outlined"
                    onClick={applyCount}
                >
                    Apply
                </Button>
            </div>

            <div className="grid-container-2">
                {numToArr(componentCounts).map(componentCount => (
                    <ComponentWrapper
                        key={componentCount}
                        type={type}
                    />
                ))}
            </div>
        </>
    );
};

export default Components;