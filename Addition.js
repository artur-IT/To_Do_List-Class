class Addition {
  constructor() {
    this.input = document.querySelector("input");
    this.buttonAdd = document.querySelector("button.add");
    this.buttonAdd.addEventListener("click", this.taskAdd);
  }
  taskAdd = () => {
    show.taskList.push(this.input.value);
    this.input.value = "";
    show.showList();
  };
}
