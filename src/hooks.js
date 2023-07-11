import React, { useState } from "react";
import axios from "axios";

const useFlip = () => {
    const [isFacingUp, setIsFacingUp] = useState(true);
    const flipCard = () => {
        setIsFacingUp(isUp => !isUp);
    };
    return [isFacingUp, flipCard]
}

const useAxios = (baseUrl) => {
    const [data, setData] = useState([]);
    const fetchData = async (urlExtenstion) => {
        const url = baseUrl + urlExtenstion;
        const res = await axios.get(url);
        setData((prevData) => [...prevData, { ...res.data }]);
    };
    return [data, fetchData];
}

export { useFlip, useAxios };