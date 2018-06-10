import { UIState } from './UIState';

export class AppState {
  constructor(
    public ui = new UIState()
  ) { }
}
