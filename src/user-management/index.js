import React, { Component } from "react";
import data from "./data.json";
import Search from "./Search";
import Users from "./Users";
import Modal from "./Modal";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listUser: data,
    };
  }

  findIndex = (id) => {
    return this.state.listUser.findIndex((user) => {
      return user.id === id;
    });
  };

  handleDeleteUser = (user) => {
    const index = this.findIndex(user.id);
    if (index !== -1) {
      let listUser = [...this.state.listUser];
      listUser.splice(index, 1);

      this.setState({
        listUser: listUser,
      });
    }
  };

  render() {
    console.log(this.state.listUser);
    const { listUser } = this.state;
    return (
      <div className="container">
        <h1 className="display-4 text-center my-3">User Management</h1>
        <div className="d-flex justify-content-between align-items-center">
          <Search />
          <button
            className="btn btn-success"
            data-toggle="modal"
            data-target="#modelIdUser"
          >
            Add User
          </button>
        </div>
        <Users list={listUser} userDelete={this.handleDeleteUser} />
        <Modal />
      </div>
    );
  }
}

export default Home;
