class Show {
  constructor() {
    this.taskList = ["learn JavaScript", "buy bananas", "feed cat", "buy flowers"];
    this.ul = document.querySelector("ul");
    this.span = document.querySelector("#count");
  }
  showList = () => {
    this.ul.textContent = "";
    for (let i = 0; i < this.taskList.length; i++) {
      this.li = document.createElement("li");
      this.ul.appendChild(this.li);
      this.li.style.marginLeft = 50 + "px";
      this.li.textContent = this.taskList[i];
      this.delButton = document.createElement("button");
      this.li.appendChild(this.delButton);
      this.delButton.textContent = "delete";
      this.delButton.classList.add("delete");
      this.span.textContent = this.taskList.length;
    }
    remove.deleteTask(); // listening on button 'delete'
  };
}
