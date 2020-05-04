import React, { Component } from "react";
import User from "./User";
import Filter from "./Filter";

class UsersList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const usersList = this.props.users;
        return (
            <div>
                <div className="filter">
                    <span className="filter__count">5</span>
                    <input type="text" className="filter__input" value="a" />
                </div>
                <ul className="users">
                    {usersList.map((user) => (
                        <User key={user.id} {...user} />
                    ))}
                </ul>
            </div>
        );
    }
}

export default UsersList;
