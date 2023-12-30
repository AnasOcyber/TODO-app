function addTask(title: string): void {
  const tasksList = document.getElementsByTagName("ul");
  const item = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");
  const div = document.createElement("div");

  div.className = "main";
  span.className = "label";
  span.textContent = title;
  button.className = "btn btn--danger";
  button.textContent = "Delete";
  button.addEventListener("click", () => {
    const isConfirmed = confirm("Are you sure?");
    if (isConfirmed) {
      item.remove();
    }
  });

  div.appendChild(span);
  div.append(button);
  item.appendChild(div);
  tasksList[0]?.append(item);

  const inputField = document.getElementsByTagName("input")[0];
  inputField.value = "";
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
