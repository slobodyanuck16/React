import React, { Component } from "react";
import Profile from "./Profile";
import ShoppingCart from "./ShoppingCart";

class Page extends Component {
    state = {
        userData: {
            firstName: "Tom",
            lastName: "Form",
        },
    };

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            userData: {
                ...this.state.userData,
                [name]: value,
            },
        });
    };
    render() {
        return (
            <div className="page">
                <main className="content">
                    <ShoppingCart userData={this.state.userData} />
                    <Profile
                        userData={this.state.userData}
                        handleChange={this.handleChange}
                    />
                </main>
            </div>
        );
    }
}

export default Page;
