import React, { Component } from "react";

class CreateTaskInput extends Component {
    state = {
        value: "",
    };

    handleChange = (e) => {
        this.setState({
            value: e.target.value,
        });
    };

    handleTaskCreate = () => {
        this.props.onCreate(this.state.value);
        this.setState({ value: "" });
        console.log(this.state.value);
    };

    render() {
        return (
            <div className="create-task">
                <input
                    type="text"
                    className="create-task__input"
                    value={this.state.value}
                    onChange={this.handleChange}
                />
                <button
                    className="btn create-task__btn"
                    onClick={this.handleTaskCreate}
                >
                    Create
                </button>
            </div>
        );
    }
}

export default CreateTaskInput;
