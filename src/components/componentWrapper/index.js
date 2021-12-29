import React, { useState } from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import ItemMenu from "../itemMenu";
import Subscriber from "../subscriber";
import Listener from "../listener";


const ComponentWrapper = ({ type }) => {
    const [visible, setVisible] = useState(true);

    return (
        <Box sx={{
                display: 'flex',
                '& > :not(style)': {
                    m: 1,
                    width: 150,
                    height: 150
                },
            }}>
            <Card variant="outlined">
                <ItemMenu
                    setVisible={setVisible}
                    visible={visible}
                />
                <CardContent>
                    <Typography lineHeight={4.5} variant="h5">
                        {(() => {
                            if (!visible) return null;

                            switch (type) {
                                case "subscriber":
                                    return <Subscriber />;
                                case "listener":
                                    return <Listener />;
                                default:
                                    return null;
                            }
                        })()}
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
};

export default ComponentWrapper;