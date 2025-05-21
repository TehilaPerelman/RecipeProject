import { useState } from "react";

const useCustom = () => {
    const [state, setState] = useState("מרוצה");

    const faction = (status) => {
        setState(status);
    };

    return { state, faction };
};

export default useCustom;
