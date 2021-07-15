import { makeObservable, observable, action } from "mobx"

class Todo {
  constructor(title: string) {
    makeObservable(this, {
      title: observable,
      finished: observable,
      toggle: action,
    });
    this.title = title;
  }

  toggle() {
    this.finished = !this.finished;
  }
  id = Math.random();
  title = "";
  finished = false;
}

export default Todo;