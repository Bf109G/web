import { observable } from "mobx";

export class UserListStore {
  @observable
  userName: string;

  constructor() {
    this.userName = "UserList";
  }
}

export default new UserListStore();
