import { observable, transaction } from "mobx";

export class UIState {
  @observable winWidth = window.innerWidth;
  @observable winHeight = window.innerHeight;

  constructor() {
    window.addEventListener('resize', () => {
      transaction(() => {
        this.winWidth = window.innerWidth;
        this.winHeight = window.innerHeight;
      });
    });
  }
}
