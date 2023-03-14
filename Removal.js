class Removal {
  deleteTask = () => {
    this.button = [...document.querySelectorAll("button.delete")];
    this.button.forEach((btn) => {
      btn.addEventListener("click", () => {
        btn.parentElement.remove(); // usuń całego rodzica!
        show.taskList.splice(this.button.indexOf(btn), 1);
        show.span.textContent = show.taskList.length;
        show.showList(); // po usunięciu wyświetl aktualną listę zadań
      });
    });
  };
}
