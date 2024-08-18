import { iUser } from "@/interfaces/user";
import { action, computed, makeObservable, observable } from "mobx";

class UsersStore {
  users: iUser[] = [];

  constructor() {
    makeObservable(this, {
      users: observable,
      addUser: action,
      total: computed
    })
  };

  addUser = (name: string) => {
    const newUser = {
      id: +Math.random().toFixed(4),
      name
    };
    this.users.push(newUser);
  };

  get total() {
    return this.users.length
  };
}

const usersStore = new UsersStore();
export default usersStore;