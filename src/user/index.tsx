import { inject, observer } from "mobx-react";
import React from "react";
import { UserListStore } from "./store/userList";

interface IProps {
  userListStore?: UserListStore;
}

@inject(({ userListStore }) => ({ userListStore }))
@observer
class User extends React.Component<IProps> {
  componentDidMount() {
    console.log("this.props", this.props);
    const { userListStore } = this.props;
    console.log("userStore", userListStore.userName);
  }

  render() {
    return <div>个人中心</div>;
  }
}

export default User;
