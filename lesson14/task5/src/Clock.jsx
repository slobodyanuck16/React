import React, { useState, useEffect } from "react";
import moment from "moment";

const Clock = ({ location, offset }) => {
    const [time, setTime] = useState(0);

    const formateTime = () => moment().utcOffset(offset).format("LTS");

    useEffect(() => {
        const liveTime = setInterval(() => {
            setTime(formateTime());
        }, 1000);

        return () => clearInterval(liveTime);
    });

    return (
        <div className="clock">
            <div className="clock__location">{location}</div>
            <div className="clock__time">{time}</div>
        </div>
    );
};

export default Clock;
