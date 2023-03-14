class Removal {
  deleteTask = () => {
    this.button = [...document.querySelectorAll("button.delete")];
    this.button.forEach((btn) => {
      btn.addEventListener("click", () => {
        btn.parentElement.remove(); // remove all parent
        show.taskList.splice(this.button.indexOf(btn), 1);
        show.span.textContent = show.taskList.length;
        show.showList(); // after remove show actual task list
      });
    });
  };
}
