import React, { useEffect } from "react";
import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const WakeUp: React.FC = () => {

    useEffect(() => {
        const wakeUpServer = async () => {
            try {
                await axios.get(`${BACKEND_URL}/`);
                console.log("Backend awake!");
            } catch (err) {
                console.error("Wake-up failed:", err);
            }
        };

        wakeUpServer();
    }, []);

    return null;
};

export default WakeUp;
