import { createContext } from "react";
import { observable, action, decorate } from "mobx";

export class AppStore {
  activePage = "";

  changeActivePage(activePage) {
    this.activePage = activePage;
  }
}

decorate(AppStore, {
  activePage: observable,
  changeActivePage: action,
});

export default createContext(new AppStore());
