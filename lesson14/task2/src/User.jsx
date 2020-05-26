import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const User = () => {
    const [user, setUser] = useState(null);
    const {userId} = useParams()

    useEffect(() => {
        fetch(`https://api.github.com/users/${userId}`)
            .then((response) => response.json())
            .then((data) => setUser(data));
    }, [userId]);

    if (!user) return null;

    const { avatar_url, name, location } = user;
    return (
        <div className="user">
            <img alt="User Avatar" src={avatar_url} className="user__avatar" />
            <div className="user__info">
                <span className="user__name">{name}</span>
                <span className="user__location">{location}</span>
            </div>
        </div>
    );
};

export default User;
