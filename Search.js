class Search {
  searchLetter = () => {
    this.ul = document.querySelector("ul");
    this.span = document.querySelector("#count");

    add.input.addEventListener("input", (item) => {
      this.ul.textContent = "";
      let i = item.target.value;
      this.letterArr = show.taskList.filter((el) => el.includes(i));
      this.span.textContent = this.letterArr.length;

      //  show in DOM
      for (let i = 0; i < this.letterArr.length; i++) {
        this.li = document.createElement("li");
        this.ul.appendChild(this.li);
        this.li.style.marginLeft = 50 + "px";
        this.li.textContent = this.letterArr[i];
        this.delButton = document.createElement("button");
        this.li.appendChild(this.delButton);
        this.delButton.textContent = "delete";
        this.delButton.classList.add("delete");
      }
      remove.deleteTask();
    });
  };
}
