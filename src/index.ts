function addTask(title: string): void {
  if (title !== "") {
    const tasksList = document.getElementsByTagName("ul");
    const item = document.createElement("li");
    const taskLabel = document.createElement("label");
    const button = document.createElement("button");
    const div = document.createElement("div");
    const taskId = Math.floor(Math.random() * 101).toString();

    div.className = "output-group";
    taskLabel.className = "label";
    taskLabel.htmlFor = taskId;
    taskLabel.textContent = title;
    button.className = "btn btn--danger";
    button.textContent = "Delete";
    button.addEventListener("click", () => {
      const isConfirmed = confirm("Are you sure?");
      if (isConfirmed) {
        item.remove();
      }
    });
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = taskId;

    checkbox.addEventListener("click", (e: Event) => {
      const ischecked = (<HTMLInputElement>e.target).checked;
      if (ischecked) taskLabel.style.textDecoration = "line-through";
      if (!ischecked) taskLabel.style.textDecoration = "none";
    });

    const task = document.createElement("div");
    task.className = "task";

    task.appendChild(checkbox);
    task.appendChild(taskLabel);
    div.appendChild(task);
    div.append(button);
    item.appendChild(div);
    tasksList[0]?.append(item);

    const inputField = document.getElementsByTagName("input")[0];
    inputField.value = "";
  }
}

function handleTextChange(): string {
  return document.getElementsByTagName("input")[0]?.value;
}

const inputField = document.getElementById("task");
inputField?.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    addTask(handleTextChange());
  }
});
