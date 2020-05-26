import React, { useState, useEffect } from "react";

const Dimensions = () => {
    const [dimensions, setDimensions] = useState({
        width: null,
        height: null,
    });

    useEffect(() => {
        const { innerHeight, innerWidth } = window;
        setDimensions({ width: innerWidth, height: innerHeight });
    }, []);

    const { width, height } = dimensions;
    return <div class="dimensions">{`${width}px - ${height}px`}</div>;
};

export default Dimensions;
